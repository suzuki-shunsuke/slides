---
marp: false
paginate: true
title: Go で CLI を作成する tips 2025
---

# Go で CLI を作成する tips 2025

Shunsuke Suzuki
2025-07-28

<!--
それでは Tips to build CLI with Go at 2025 というタイトルで発表させていただきます。よろしくお願いします。
-->

---

![bg left:40% width:400px](https://github.com/suzuki-shunsuke.png)

Shunsuke Suzuki
GitHub: suzuki-shunsuke
X: szkdash
OSS 色々作ってる人

<!--
最初に自己紹介ですが、私 freee 株式会社で SRE をやっております、鈴木と申します。
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
CLI Version Manager の aqua や terraform の結果を comment する tfcmt, GitHub Actions のバージョンを固定する pinact など様々な CLI を Go で開発しています。
-->

---

# aqua

CLI Version Manager

```yaml
registries:
  - type: standard
    ref: v4.384.0 # renovate: depName=aquaproj/aqua-registry
packages:
  - name: golangci/golangci-lint@v2.1.6
  - name: goreleaser/goreleaser@v2.9.0
```

<!--
aqua は CLI Version Manager で YAML の設定ファイルにツールとそのバージョンを定義して宣言的に管理することができます。
1,900 近いツールをサポートしていて、 goreleaser や golangci-lint, gofumpt など Go の開発で使われる様々なツールもサポートしています。
-->

---

## aqua は Go 関連の様々なツールもサポート

- [goreleaser](https://goreleaser.com/)
- [golangci-lint](https://golangci-lint.run/)
- [gofumpt](https://github.com/mvdan/gofumpt)
- [gopls](https://github.com/golang/tools/tree/master/gopls)
- etc

<!--
1,900 近いツールをサポートしていて、 goreleaser や golangci-lint, gofumpt など Go の開発で使われる様々なツールもサポートしています。
-->

---

# 今日のトピック

Go で CLI を作るときに役立つ tips

- 自分がよく使う Go ライブラリ
- 様々な CLI で共通する機能を簡単に実装する自作の Go ライブラリ
- test やコードの自動生成(修正), リリースのための GitHub Actions
- Go のコードから CLI の設定ファイル (YAML) の JSON Schema を生成
- リリース時の署名

<!--
本日は Go で CLI ツールを開発する tips を紹介したいと思います。
自分がよく使うライブラリの紹介や、自分が開発している GitHub Actions
コードからツールの設定ファイルの JSON Schema を自動生成するテクニックやリリースをセキュアに自動化する仕組み、
そしてリリース時に asset に署名する仕組みなどを紹介します。
-->

---

## 自分がよく使う Go ライブラリ

- [urfave/cli/v3](https://github.com/urfave/cli): CLI framework (Org のメンバーだったりする)
- [google/wire](https://github.com/google/wire): Dependency Injection のライブラリ
- [google/go-cmp](https://github.com/google/go-cmp): test で値を比較して分かりやすく diff を出力するライブラリ
- [sirupsen/logrus](https://github.com/sirupsen/logrus): Logging library (maintenance mode)

<!--
自分が Go で CLI を開発する際によく使うライブラリとしては
urfave/cli (ユー・アー・フェイヴ), google/wire, google/go-cmp, logrus などがあります。
今日これらについて説明する時間はないので、興味のある方は調べてみてください。
-->

---

## 様々な CLI で共通する機能を簡単に実装する自作の Go ライブラリ

[urfave-cli-v3-util](https://github.com/suzuki-shunsuke/urfave-cli-v3-util)

- version コマンド
- ロガーの初期化
- bash や zsh などのシェル補完
- 全 sub command の help をまとめて出力するコマンド (ドキュメント用)
- GitHub access token を Windows Credential Manager や macOS Keychain, GNOME Keyring で管理するコマンド
- etc

<!--
自分は様々な CLI を開発しているので、多くの CLI で共通して必要になる機能・設定はライブラリとして共通化しています。
例えば version command や logger の初期化、 shell completion, GitHub access token を keyring で管理する機能などを共通化し、簡単に実装できるようにしています。
OSS ではありますが、自分用という感じに割り切って作っています。
-->

---

## GitHub Actions

- [go-test-full-workflow](https://github.com/suzuki-shunsuke/go-test-full-workflow): test や lint などをまとめた Reusable Workflow
- [go-release-workflow](https://github.com/suzuki-shunsuke/go-release-workflow): リリース用の Reusable Workflow
- [go-autofix-action](https://github.com/suzuki-shunsuke/go-autofix-action): autofix.ci でコードを自動生成(修正) するための action

<!--
CI に関しても GitHub Actions の reusable workflow や action を使って共通化し、簡単に実装できるようにしています。
-->

---

## autofix.ci

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

---

![bg left:40% width:500px](https://storage.googleapis.com/zenn-user-upload/54fba6db6fa4-20250709.png)

[aqua.yaml の JSON Schema](https://github.com/aquaproj/aqua/blob/main/json-schema/aqua-yaml.json)

<!--
自分の CLI では設定ファイルに YAML を使うことが多いため、 JSON Schema を提供しています。
JSON Schema を使うことで設定ファイルのバリデーションができますし、 VSCode などのエディタではリアルタイムのバリデーションや入力補完が可能になります。
サードパーティのライブラリを使って Go のコードから JSON Schema を自動生成しています。
また、 JSON Schema の生成及び自動更新を簡単にするための簡単なライブラリも書いています。
-->

---

## CLI の設定ファイルの JSON Schema をコードから生成

1. JSON Schema を生成する Go のスクリプトを決まったパス [cmd/gen-jsonschema/main.go](https://github.com/aquaproj/aqua/blob/main/cmd/gen-jsonschema/main.go) に作成
1. [go-autofix-action でスクリプトを実行して自動更新](https://github.com/suzuki-shunsuke/go-autofix-action/blob/7f3fd73b0db1364b95a3f2404ad2fb0985e10465/action.yaml#L53-L58)

---

## Homebrew, Scoop, Winget に**ローカルから**リリース

- 別のリポジトリに commit を push する必要がある
- CI でやる場合、 GitHub App が必要だがセキュリティ的に使いたくない
- GitHub Actions でファイルを生成して Artifact に upload し、ローカルからダウンロードして push
- workflow の kick から push まで自動化する簡単なスクリプトを開発: [rgo](https://github.com/suzuki-shunsuke/rgo)
- 参考: [GoReleaser で生成した Homebrew tap や Scoop manifest などを CI でリリースする代わりにローカルからリリース](https://zenn.dev/shunsuke_suzuki/articles/github-security-2025#goreleaser-%E3%81%A7%E7%94%9F%E6%88%90%E3%81%97%E3%81%9F-homebrew-tap-%E3%82%84-scoop-manifest-%E3%81%AA%E3%81%A9%E3%82%92-ci-%E3%81%A7%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9%E3%81%99%E3%82%8B%E4%BB%A3%E3%82%8F%E3%82%8A%E3%81%AB%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%81%8B%E3%82%89%E3%83%AA%E3%83%AA%E3%83%BC%E3%82%B9)

<!--
-->

---

## Sign Release Artifacts for Security

- Verify signature before installing tools for security
- [Cosign](https://github.com/sigstore/cosign), [slsa-github-generator](https://github.com/slsa-framework/slsa-github-generator), [GitHub Artifact Attestations](https://docs.github.com/en/actions/how-tos/security-for-github-actions/using-artifact-attestations/using-artifact-attestations-to-establish-provenance-for-builds), etc
- GitHub Artifact Attestations is very easy to use

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

```sh
gh attestation verify PATH/TO/YOUR/BUILD/ARTIFACT-BINARY -R ORGANIZATION_NAME/REPOSITORY_NAME
```

<!--
最後に、 Go CLI をリリースする際は署名をしましょう。
署名をすることでインストール時に署名を検証して改竄を検知することができ、よりセキュアにインストールすることができます。
署名をするには Cosign や slsa-github-generator など色々ありますが、まずは GitHub Artifact Attestations が簡単なのでおすすめです。
公式の action を実行するだけで署名を生成することができ、署名の検証も GitHub CLI を使って簡単にできます。
ちなみに aqua は Cosign や SLSA Provenance, GitHub artifact Attestations の検証に対応しているため、セキュアにツールをインストールすることが可能です。
-->

