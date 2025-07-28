---
marp: false
paginate: true
title: Go で CLI を開発する tips 2025
---

# Go で CLI を開発する Tips 2025

Shunsuke Suzuki
2025-07-28

<!--
それでは Go で CLI を開発する Tips 2025 というタイトルで発表させていただきます。よろしくお願いします。
-->

---

![bg left:40% width:400px](https://github.com/suzuki-shunsuke.png)

Shunsuke Suzuki
GitHub: suzuki-shunsuke
X: szkdash
OSS 色々作ってる人

<!--
最初に自己紹介ですが、私 趣味で様々な OSS を作っている、鈴木と申します。
-->

---

## My Go CLIs

- [aqua](https://aquaproj.github.io/) - CLI Version Manager
- [tfcmt](https://github.com/suzuki-shunsuke/tfcmt) - `terraform plan`, `apply` の結果を GitHub の PR にコメント
- [pinact](https://github.com/suzuki-shunsuke/pinact) - GitHub Actions のバージョンを full length SHA で固定
- [github-comment](https://github.com/suzuki-shunsuke/github-comment) - GitHub PR にコメント
- [tfmv](https://github.com/suzuki-shunsuke/tfmv) - Terraform の resource や data block をリネームして moved block を生成
- [ghalint](https://github.com/suzuki-shunsuke/ghalint) - GitHub Actions Linter
- etc

<!--
aqua や tfcmt, pinact など様々な CLI を Go で開発しています。
-->

---

# aqua

CLI とそのバージョンを YAML で宣言的に管理

```yaml
registries:
  - type: standard
    ref: v4.384.0 # renovate: depName=aquaproj/aqua-registry
packages:
  # 今日の登壇者のツールもサポート
  - name: syumai/sbx@v0.0.5
  - name: fujiwara/lambroll@v1.3.0
  - name: ktr0731/evans@v0.10.11
  - name: mattn/bsky@v0.0.73
  - name: sivchari/ccowl@v1.0.1
  # Go 関連のツールもサポート
  - name: mvdan/gofumpt@v0.8.0
  - name: golangci/golangci-lint@v2.2.1
  - name: goreleaser/goreleaser@v2.11.0
```

<!--
CLI Version Manager の aqua を使うと CLI とそのバージョンを YAML で宣言的に管理することができます。
今日の登壇者の方々のツールもサポートしていますし、 Go 関連のツールもサポートしているので Go で開発するうえでも便利です。
-->

---

# 今日のトピック

Go で CLI を Go で効率よくメンテするためのノウハウ

- 構造化ロガーで version 情報などを含める
- 様々な CLI で共通する機能をライブラリで共通化
- test やコードの自動生成(修正), リリースの CI を GitHub Actions で共通化
- Go のコードから CLI の設定ファイル (YAML) の JSON Schema を生成
- 依存するライブラリのライセンスも一緒に配布
- リリース時の署名

<!--
本日はこれまで自分が様々なツールを Go で開発する中で培ってきたノウハウを共有したいと思います。

様々な Go CLI のメンテするためのテクニック

- コードの共通化
  - 共有ライブラリの開発
  - GitHub Actions の action, reusable workflow の開発
- autofix.ci による自動修正
- CLI の設定ファイルの JSON Schema の自動生成
- Go や Go Module のライセンスの同梱
- リリース時の署名
-->

---

## 構造化ロガーで version 情報などを含める

- 逐一ユーザーに確認しなくても欲しい情報をログに吐いておけばサポートが楽になる

```console
$ yq --version
INFO[0000] download and unarchive the package            env=darwin/arm64 exe_name=yq package_name=mikefarah/yq package_version=v4.47.1 program=aqua program_version=2.53.6 registry=standard
yq (https://github.com/mikefarah/yq/) version v4.47.1
```

<!--
構造化ロガーを使ってログを出力し、ツールのバージョン情報などを含めると逐一ユーザーにバージョンを確認したりする必要がなくなり、サポートが楽になります。
-->

---

## よく実装する機能をライブラリで共通化

[urfave-cli-v3-util](https://github.com/suzuki-shunsuke/urfave-cli-v3-util)

- version コマンド
- ロガーの初期化
- bash や zsh などのシェル補完
- 全 sub command の help をまとめて出力するコマンド (ドキュメント用)
- GitHub access token を Windows Credential Manager や macOS Keychain, GNOME Keyring で管理するコマンド
- etc

<!--
次によく実装する機能はライブラリのような形で再利用できるようにしましょう。
再利用できるようにすることで継続的に品質を改善できます。
自分は様々な CLI を開発しているので、多くの CLI で共通して必要になる機能・設定はライブラリとして共通化しています。
例えば version command や logger の初期化、 shell completion, GitHub access token を secret manager で管理する機能などを共通化し、簡単に実装できるようにしています。
OSS ではありますが、自分用という感じに割り切って作っています。
-->

---

## GitHub Actions で CI の共通化

Action や Reusable Workflow の開発

- [go-test-full-workflow](https://github.com/suzuki-shunsuke/go-test-full-workflow): test や lint などをまとめた Reusable Workflow
- [go-release-workflow](https://github.com/suzuki-shunsuke/go-release-workflow): リリース用の Reusable Workflow
- [go-autofix-action](https://github.com/suzuki-shunsuke/go-autofix-action): autofix.ci でコードを自動生成(修正) するための action

<!--
CI に関しても GitHub Actions の reusable workflow や action を使って共通化し、簡単に実装できるようにしています。
-->

---

## autofix.ci でコードの自動修正・生成

![bg left:40% width:400px](https://autofix.ci/logo/logo.png)

https://autofix.ci/

- CI で pull request のコードをセキュアに自動修正できる GitHub App
- OSS では Go に限らず超おすすめ

[go-autofix-action](https://github.com/suzuki-shunsuke/go-autofix-action) で以下のようなことをやってる

- `gofumpt` でフォーマット
- `go mod tidy` で go.mod, go.sum の更新
- JSON Schema の生成 (後述)

<!--
autofix.ci を使うと fork からの PR であっても CI でセキュアにコードを修正できます。
自分の場合 gofumpt で自動フォーマットしたり、 go mod tidy で go.mod や go.sum を自動更新したり JSON Schema を自動生成したりしています。
-->

---

## private repository では Securefix Action が便利

- autofix.ci は Private repository だと金銭面や会社のポリシー的にハードルがある
- Securefix Action が便利
- [参考: GitHub Actions でセキュアにコードを修正する](https://zenn.dev/shunsuke_suzuki/articles/securefix-action)

<!--
autofix.ci は Private repository だと金銭面や会社のポリシー的に多少ハードルがあると思います。
Securefix Action という自分が開発する OSS を使うと Private Repository でも autofix.ci 同様セキュアにコードを修正できます。
-->

---

## CLI の設定ファイルの JSON Schema をコードから生成

```yaml
# yaml-language-server: $schema=https://raw.githubusercontent.com/aquaproj/aqua/main/json-schema/aqua-yaml.json
```

- JSON Schema があるとエディタでリアルタイムにバリデーションや入力補完ができる
- [invopop/jsonschema](https://github.com/invopop/jsonschema) を使うと Go のコードから JSON Schema を生成できる
- 簡単に JSON Schema を生成できるライブラリを自作: [gen-go-jsonschema](https://github.com/suzuki-shunsuke/gen-go-jsonschema)

```go
if err := jsonschema.Write(&aqua.Config{}, "json-schema/aqua-yaml.json"); err != nil {
	return fmt.Errorf("create or update a JSON Schema: %w", err)
}
```

<!--
自分の CLI では設定ファイルに YAML を使うことが多いため、 JSON Schema を提供しています。
JSON Schema を使うことで設定ファイルのバリデーションができますし、 VSCode などのエディタではリアルタイムのバリデーションや入力補完が可能になります。
サードパーティのライブラリを使って Go のコードから JSON Schema を生成しています。
このライブラリをラップして 3 行で JSON Schema を生成するための薄いライブラリを自作しています。
-->

---

![bg left:40% width:500px](https://storage.googleapis.com/zenn-user-upload/54fba6db6fa4-20250709.png)

[aqua.yaml の JSON Schema](https://github.com/aquaproj/aqua/blob/main/json-schema/aqua-yaml.json)

<!--
これは aqua の設定ファイルの JSON Schema ですが、このように JSON Schema を生成してリポジトリにコミットしています。
-->

---

## CLI と一緒に Go と Go Module のライセンスも配布

- 依存する Go のライブラリのライセンスも一緒に配布しないといけない
- [google/go-licenses](https://github.com/google/go-licenses) が便利
- [参考記事: Go で CLI を配布する際にライブラリのライセンス文書も含める](https://zenn.dev/shunsuke_suzuki/articles/go-oss-licenses)

<!--
これはライブラリのライセンスにもよりますが、 Go でビルドしたバイナリを公開する場合、原則として依存する Go のライブラリのライセンスも配布しないといけません。
go-licenses というツールを使ってライセンスを生成し、バイナリと一緒に tarball や zip にして配布することでライセンス上の義務を果たすことができます。
詳細はブログに書いたのでそちらを参照してください。
-->

---

## GitHub Artifact Attestations の生成

- インストール時に改竄検知をできるようにする
- 署名のツールは [Cosign](https://github.com/sigstore/cosign) や [slsa-github-generator](https://github.com/slsa-framework/slsa-github-generator), [GitHub Artifact Attestations](https://docs.github.com/en/actions/how-tos/security-for-github-actions/using-artifact-attestations/using-artifact-attestations-to-establish-provenance-for-builds) など色々
- GitHub Artifact Attestations が非常に簡単でおすすめ

<!--
最後に、 Go CLI をリリースする際に GitHub Artiafct Attestations を生成しましょう。
インストール時に Attestation を検証することで、改竄を検証つすることができ、よりセキュアにインストールすることができます。
Cosign や slsa-github-generator など他にも色々ありますが、まずは GitHub Artifact Attestations が簡単なのでおすすめです。
-->

---

## :warning: Private Repository の場合

- [Private Repository の場合 GitHub Enterprise Cloud Plan が必要](https://docs.github.com/en/actions/how-tos/secure-your-work/use-artifact-attestations/use-artifact-attestations)
- 今回は主に OSS を想定

<!--
ただし、 Private repository だと GitHub Enterprise Cloud Plan が必要らしいです。
今回は主に OSS を想定しています。
-->

---

## GitHub Artifact Attestations

署名:

```yaml
permissions:
  id-token: write
  attestations: write
```

```yaml
- name: Generate artifact attestation
  uses: actions/attest-build-provenance@v2
  with:
    subject-path: 'PATH/TO/ARTIFACT'
```

検証:

```sh
gh attestation verify pinact_darwin_arm64.tar.gz \
  -R suzuki-shunsuke/pinact \
  --signer-workflow suzuki-shunsuke/go-release-workflow/.github/workflows/release.yaml
```

<!--
公式の action を実行するだけで attestation を生成することができ、 attestation の検証も GitHub CLI を使って簡単にできます。
-->

---

ユーザー向けにドキュメントも提供

[例: pinact](https://github.com/suzuki-shunsuke/pinact/blob/e49c91685b3d9dcb804ad52b57743f735f0fe3dd/INSTALL.md#verify-downloaded-assets-from-github-releases)

![bg left:50% width:600px](https://storage.googleapis.com/zenn-user-upload/8bc65675d930-20250709.png)

<!--
ただ attestation 生成してもユーザーに気づいて使ってもらわないと意味がないのでドキュメントにも記載するようにしています。
-->
