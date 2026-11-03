---
marp: true
paginate: true
title: GitHub Actions Best Practice 2025
---

# GitHub Actions Best Practice 2025

Shunsuke Suzuki
2025-03-11

<!--
それでは GitHub Actions Best Practice 2025 というタイトルで発表させていただきます。よろしくお願いします。
-->

---

![bg left:40% width:400px](https://github.com/suzuki-shunsuke.png)

Shunsuke Suzuki
GitHub: suzuki-shunsuke
X: szkdash
SRE at freee Corporation
Platform Engineer
OSS Developer

Automation, CI/CD
GitHub Actions, Terraform
Go

<!--
最初に自己紹介ですが、私 freee 株式会社で SRE をやっております、鈴木と申します。
-->

---

# Blog

https://zenn.dev/shunsuke_suzuki
https://suzuki-shunsuke.github.io/profile/blog

- [GitHub Actions による Renovate の安全自動マージ](https://zenn.dev/shunsuke_suzuki/articles/renovate-auto-merge-github-actions)
- [pull_request_target で GitHub Actions の改竄を防ぐ](https://zenn.dev/shunsuke_suzuki/articles/secure-github-actions-by-pull-request-target)
- [Terraform Monorepo の CI の実行時間を可視化し 2 分以上高速化](https://developers.freee.co.jp/entry/2024/11/19/100000)

<!--
主に zenn で色々ブログを書いています。
GitHub Actions に関するブログも書いているので是非御覧ください。
-->

---

# OSS

GitHub Actions, CLI built with Go

- [aqua](https://aquaproj.github.io/)
- [tfcmt](https://github.com/suzuki-shunsuke/tfcmt)
- [tfaction](https://github.com/suzuki-shunsuke/tfaction)
- [github-comment](https://github.com/suzuki-shunsuke/github-comment)
- [tfmv](https://github.com/suzuki-shunsuke/tfmv)
- [pinact](https://github.com/suzuki-shunsuke/pinact)
- [ghalint](https://github.com/suzuki-shunsuke/ghalint)
- etc

<!--
GitHub Actions やコマンドラインツールなど、趣味で様々な OSS の開発をしています。
本日の登壇の中でも幾つか紹介させていただきます。
-->

---

# Topic

GitHub Actions Best Practice

- Security
  - Basic practice
  - Advanced practice
- Developer Experience
- Performance Visualization

<!--
本日は GitHub Actions のベストプラクティス、特にセキュリティ周りの話をしたいと思います。
まず一般的なセキュリティのプラクティスの話をした後に、自分の経験に基づく応用的な話をします。
その後、セキュリティ以外の DX 周りの話も若干します。
-->

---

# Basic Practice

---

# Organization Settings of GitHub Actions Token

- Disable `Allow GitHub Actions to create and approve pull requests`
- ✅ `Workflow permissions` > `Read repository contents and packages permissions`

<!--
まず GitHub の Organization の GitHub Actions token に関する設定です。
GitHub Actions token を用いた PR の作成や approve を禁止しましょう。
また、 default で Read-only にしましょう。
-->

---

# Disable `Allow GitHub Actions to create and approve pull requests`

To prevent GitHub Actions token from being abused.

1. Create a pull request by GitHub Actions token
1. Add malicious code
1. Approve and merge it

<!--
GitHub Actions token で PR の作成ができると、
PR を作って悪意のあるコードを追加して自分で approve してマージするといったことが簡単に出来てしまいます。
なので禁止しましょう。
-->

---

# Branch Rulesets of the default branch

- ✅ `Require a pull request before merging`
  - ✅ `Dismiss stale pull request approvals when new commits are pushed`
  - ✅ `Require review from Code Owners`
  - ✅ `Require approval of the most recent reviewable push`
- ✅ `Require status checks to pass`

<!--
次に default branch の Branch Rulesets を適切に設定しましょう。
PR を必須にしたり、 code owner のレビューを必須にしたり、
最新のコミットに対するレビューを必須にしたり、 CI がパスしていることを必須にしましょう。
-->

---

# Minimize permissions of GitHub Actions token

```yaml
permissions:
  contents: read # To checkout the private repository
  pull-requests: write # To post comments
```

```yaml
permissions: {} # No Permission
```

<!--
GitHub Actions token の permissions を明示的に設定し、必要最小限にしましょう。
何も権限がいらない場合は空の map を設定しましょう。
-->

---

# Minimize permissions of GitHub App token

:o:

```yaml
- uses: tibdex/github-app-token@v2.1.0
  with:
    app_id: ${{secrets.APP_ID}}
    private_key: ${{secrets.PRIVATE_KEY}}
    repositories: >-
      ["${{github.event.repository.name}}"]
    permissions: >-
      {
        "contents": "write"
      }
```

:warning: [actions/create-github-app-token can't minimize permissions](https://github.com/actions/create-github-app-token/issues/3)

<!--
GitHub App を使って Access token を生成する場合も repositories や permissions を必要最小限にしましょう。
GitHub App から Access token を生成する公式の App は permissions が設定できないため、こちらの github-app-token という action がオススメです。
-->

---

# Minimize the scope of secrets

:o: Pass secrets to only specific steps

```yaml
steps:
  # ...
  - run: npm test
  - run: gh label create bug
    env:
      GITHUB_TOKEN: ${{github.token}}
```

:x: Pass secrets to workflows or jobs

```yaml
env:
  GITHUB_TOKEN: ${{github.token}}
steps:
  # ...
  - run: npm test
  - run: gh label create bug
```

<!--
secrets の scope を最小限にしましょう。
workflow や job の環境変数として渡すのではなく、 secret が必要な step にだけ渡すようにしましょう。
-->

---

# Disable persist-credentials of actions/checkout

[actions/checkout の persist-credentials を false にする linter と修正ツール](https://zenn.dev/shunsuke_suzuki/articles/github-action-checkout-persist-credentials)

```yaml
- uses: actions/checkout@v4.2.2
  with:
    persist-credentials: false
```

<!--
actions/checkout の persist-credentials を false にしましょう。
-->

---

# What’s persist-credentials?

If true, the auth token is persisted in the local git config
😱 Any subsequent steps can access the token
😱 persist-credentials is true by default ([issue](https://github.com/actions/checkout/issues/485))

<!--
persist-credentials が true だとリポジトリの checkout に使われる access token や SSH key が Git の設定に永続化されます。
そうすると、後続の任意の step が token にアクセスでき、セキュリティ的によろしくありません。
しかも、 persist-credentials はデフォルトで true です。
なので、明示的に false にしましょう。
-->

---

# Auto fix by disable-checkout-persist-credentials

```console
$ disable-checkout-persist-credentials
```

```diff
       - uses: actions/checkout@v4.2.2
+        with:
+          persist-credentials: false
```

<!--
disable-checkout-persist-credentials というツールを使うと workflow の修正を自動化出来ます。
-->

---

# How to push or pull commits without persist-credentials

- Pull, Push: `gh auth setup-git`
- Push Only: Use GitHub API instead of Git

<!--
persist-credentials を false にした状態で `git pull` や push をしたい場合、 `gh auth setup-git` を使う方法と、 GitHub API を使う方法の 2 つ方法があります。
-->

---

# `gh auth setup-git`

`gh auth setup-git` configures `git` to use GitHub CLI as a credential helper
:thumbsup: No auth token is persisted in the local git config

```yaml
- run: gh auth setup-git
  env:
    GH_HOST: github.com
- run: git push
  env:
    GH_TOKEN: ${{github.token}}
```

<!--
gh auth setup-git は GitHub CLI を使って Git の認証をするようにするコマンドです。
gh auth setup-git を実行しておくと環境変数で access token を渡すことで git の認証ができるようになります。
必要な step にだけ access token を渡せば良いのでより安全になります。
-->

---

# Create and Push commits by GitHub API

[ghcp](https://github.com/int128/ghcp) and [commit-action](https://github.com/suzuki-shunsuke/commit-action) allow you to create and push commits by GitHub API.
:thumbsup: Using GitHub App token, you can create **verified** commits without GPG keys

<!--
ghcp や commit-action というツールを使って GitHub API で commit を生成・ push することが出来ます。
GitHub App の access token を使うことで GPG key なしでコミットに署名が出来ます。
-->

---

# Pin action versions by full commit sha

:o:

```yaml
- uses: actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683 # v4.2.2
```

:x:

```yaml
- uses: actions/checkout@v4.2.2
```

```yaml
- uses: actions/checkout@v4
```

<!--
action のバージョンを full commit hash で固定しましょう。
Git の tag は後から作り直すことができるので危険ですし、メジャーバージョンしか指定していないとバージョンが勝手に変わって何もしてないのに CI が壊れることがあります。
-->

---

# pinact

[pinact](https://github.com/suzuki-shunsuke/pinact)

```diff
-      - uses: actions/setup-go@v4
+      - uses: actions/setup-go@4d34df0c2316fe8122ab82dc22947d607c0c91f9 # v4.0.0
```

:bulb: Update actions

```sh
pinact run -u
```

<!--
pinact というツールを使うと workflow の修正を自動化出来ます。
pinact は action の update にも対応しており、最新に update しつつバージョンを固定することが出来ます。
これは手元で workflow 書いてるときにも便利です。
action の最新バージョンが幾つかなんて一々覚えてないですし調べるのも面倒ですが、
とりあえず v1 みたいな適当なバージョンをしておいて workflow をざっと書いて、最後に pinact を実行すれば最新に update しつつバージョンを固定出来ます。
-->

---

# pinact-action

```yaml
- uses: suzuki-shunsuke/pinact-action@56efd2c1e82a807c939fe31dfbeb12fb73258566 # v0.1.1
  with:
    app_id: ${{secrets.APP_ID}}
    app_private_key: ${{secrets.APP_PRIVATE_KEY}}
```

![width:700px](https://storage.googleapis.com/zenn-user-upload/ad2f4622409d-20250310.png)

<!--
pinact-action という action を使うと CI で自動でバージョンを固定出来ます。
-->

---

# timeout-minutes

- [GitHub Actions の timeout-minutes の linter 及び一括設定ツール](https://zenn.dev/shunsuke_suzuki/articles/github-actions-timeout-minutes)
- [GitHub Actions の実行履歴に基づいて自動で timeout-minutes を設定](https://zenn.dev/shunsuke_suzuki/articles/ghatm-auto-timeout-minutes)
- :warning: The default timeout-minutes is too long (360 minutes)

```yaml
jobs:
  test:
    timeout-minutes: 30
```

<!--
job の timeout-minutes を明示的に設定しましょう。
timeout-minutes は job のタイムアウトで、デフォルトで 360 分ですが、これは長すぎるので job ごとに適切に設定しましょう。
-->

---

# [ghatm](https://github.com/suzuki-shunsuke/ghatm)

```sh
ghatm set [-auto]
```

```diff
   build:
+    timeout-minutes: 30
     runs-on: ubuntu-latest
```

<!--
ghatm というツールを使うと workflow の修正を自動化出来ます。
-->

---

# [multi-gitter](https://github.com/lindell/multi-gitter)

Fix multiple repositories using tools like pinact, ghatm, and disable-checkout-persist-credentials with one command 

```sh
multi-gitter run ./set.sh \
  --config config.yaml \
  -O "aquaproj" \
  -t "ci: disable actions/checkout's persist-credentials using disable-checkout-persist-credentials" \
  -b "https://github.com/suzuki-shunsuke/batch-bulk-disable-checkout-persist-credentials/issues/1" \
  -B ci-disable-checkout-persist-credentials-1
```

<!--
multi-gitter というツールを使うと、 pinact や ghatm, disable-checkout-persist-credentials というツールを GitHub Organizatino の全リポジトリにまとめて実行して PR 作成しマージして修正する事ができます。
-->

---

# Linter - ghalint or lintnet

Run these linters in CI to ensure that workflows conform to policies

- [ghalint](https://github.com/suzuki-shunsuke/ghalint): GitHub Actions Linter
- [lintnet](https://lintnet.github.io/): General purpose Linter

<!--
ghalint や lintnet という linter を使ってここまで紹介した best practice が守られているかチェックすることが出来ます。
CI でこれらのツールを実行することで best practice を強制することが出来ます。
-->

---

# [actionlint](https://github.com/rhysd/actionlint)

ghalint and actionlint is different:

- ghalint: Security Best Practices
- actionlint: Syntax Check
  - [shellcheck](https://github.com/koalaman/shellcheck) integration
  - [reviewdog](https://github.com/reviewdog/reviewdog) integration

<!--
GitHub Actions の Linter といえば actionlint も便利です。
ghalint が主に security 的なベストプラクティスのチェックに焦点を当てているのに対し、
actionlint は主に syntax check に焦点を当てています。
actionlint は shellcheck を実行してシェルスクリプトの潜在的なバグを見つけることが出来ます。
また reviewdog と連携して 分かりやすくエラーをレポート出来ます。
-->

---

# Advanced Practice

<!--
ここからより応用的な話をします。
-->

---

# Structure of Workflows and Jobs

To merge pull requests,

- All changes should be tested
- All tests must pass
  - All GitHub Actions jobs should succeed or be skipped

<!--
workflow や job を如何に構造化するかお話します。
理想的には、全ての変更は CI でテストされるべきであり、全てのテストがパスするべきです。
つまり、全ての job が pass するべきです。
-->

---

# Problems of Required Checks

- It's troublesome to add all jobs to Branch Ruleset's `Required Checks`
  - test, build, notify, format, ...
- You need to update both workflows and Branch Rulesets every time you add, rename, and remove jobs
- If you forget to add jobs to `Required Checks`, pull requests can be merged even if those jobs fail

<!--
しかし、 test や build, format といった様々な job を実行する場合、それら全ての job を Branch Rulesets の `Required Checks` に追加するのは大変です。
job を追加・リネーム・削除するたびに Branch Rulesets の修正が必要になりますし、修正を忘れると job が失敗しているのに PR がマージできるようになってしまいます。
-->

---

# Merge `pull_request` workflows into one workflow

- Everytime you add a workflow, you need to update Branch Rulesets

<!--
そこで、まず `pull_request` workflow をなるべくひとつにまとめましょう。
workflow を分けると、 workflow を追加したりするたびに Required Checks を更新する必要が出てきてしまいます。
-->

---

# :x: Don't share a required check across multiple workflows

Pull Requests can be merged before some workflows complete

Workflow A: build -> status-check ✅ Complete
Workflow B: test 🔄 Running (-> status-check (not start))

<!--
複数の workflow で required check を共有するのはやめましょう。
例えば workflow A, B で status-check という required Check を共有する場合、
B の test を実行中に A の status-check が完了すると PR がマージできるようになってしまいます。
auto-merge が有効になっていると B を待たずに PR がマージされてしまいます。
-->

---

# Use [dorny/paths-filter](https://github.com/dorny/paths-filter) instead of Workflow Path-filter

- If workflow Path-filter is used, you can't add jobs of the workflow to `Required Checks`
- You can configure path filters per job

<!--
Workflow の Path filter を使うと、その Workflow の job は実行されない場合があるので Required Checks に追加できなくなってしまいます。
そのため、 dorny/paths-filter のような action を使い、 job level で skip するようにしましょう。
また、 dorny/paths-filter を使えば job 単位でフィルタを設定できるため、 filter の異なる workflow をマージする場合でも filter が使えます。
-->

---

# Add a Required Check per `pull_request` workflow

![](https://storage.googleapis.com/zenn-user-upload/6ca2d2371192-20250311.png)

<!--
workflow ごとに Required Check を 1 つだけ追加しましょう。
このように、一つの workflow で色々な job を実行しつつ、 Required Check にはこの status-check という job だけ追加します。
そうすると workflow に job を追加したりしても Branch Rulesets を修正する必要がなくなります。
-->

---

The job `status-check` must pass if all jobs pass.
How?

![](https://storage.googleapis.com/zenn-user-upload/6ca2d2371192-20250311.png)

<!--
この場合、 status-check という job は他の全ての job が成功したら成功し、そうでなければ失敗しなければなりません。
このような job をどのように定義したら良いでしょうか？
-->

---

# :x: Add all jobs to `needs`

```yaml
status-check:
  runs-on: ubuntu-24.04
  needs: [test, build, format] # Add all jobs 
  if: failure()
  steps:
    - run: exit 1
```

:x: You need to maintain `needs`
:x: If you forget to add jobs to `needs`, PR can be merged even if they fail
:x: If only a job is retried and succeeds, `status-check` is skipped and PRs can be merged

<!--
まず駄目なパターンですが、全ての job を status-check の needs に追加し、どれかが失敗したら status-check も失敗するようにします。
このパターンには幾つか問題があります。
まず needs をメンテしないといけませんし、 needs に job を追加するのを忘れると job が失敗しているのに PR がマージできてしまいます。
-->

---

:x: If a job is retried and succeeds, `status-check` is skipped and PRs can be merged

![image](https://github.com/user-attachments/assets/647ea3c8-278e-4958-81d6-38be5394782d)

:warning: Bugs of job's `if`

https://github.com/actions/runner/issues/491
https://github.com/orgs/community/discussions/45058

<!--
更に特定の job だけリトライすることで、他の job が失敗したままでも status-check を skip させることができる GitHub Actions の bug のような挙動があります。
-->

---

# Solution: Split workflow by `workflow_call`

1. Create a workflow using `workflow_call`
1. Move all jobs from `pull_request` workflow to `workflow_call` workflow

```yaml
name: test (workflow_call)
on: workflow_call
jobs:
  path-filter:
    # ...
  test:
    # ...
  build:
    # ...
```

<!--
そこでこの問題を解決するために、 workflow_call を使って新しく workflow を作成し、 pull_request workflow の全 job を新しい workflow に移します。
-->

---

1. Invoke `workflow_call` workflow from `pull_request` workflow

```yaml
name: test
on: pull_request
jobs:
  test:
    uses: ./.github/workflows/workflow_call_test.yaml
    permissions:
      contents: read
```

<!--
そして pull_request workflow から呼び出すようにします。
-->

---

1. Add `status-check` job to `pull_request` workflow

```yaml
name: test
on: pull_request
jobs:
  status-check:
    runs-on: ubuntu-24.04
    if: failure()
    timeout-minutes: 10
    permissions: {}
    needs:
      - test # workflow_call
    steps:
      - run: |
          exit 1
```

<!--
そして pull_request workflow に status-check job を追加し、 workflow_call が失敗したら status-check が失敗するようにします。
-->

---

:thumbsup: You don't need to maintain `needs`
:thumbsup: There is no bug of job statuses

<!--
こうすると needs をメンテする必要がなくなりますし、 job の status 関連のバグもなくなります。
-->

---

# Prevent self approval

[self approve を防ぐ](https://zenn.dev/shunsuke_suzuki/articles/deny-self-approve)

<!--
PR をレビューなしでマージするのを防ぎましょう。
-->

---

# What's self approval?

To merge pull requests without approval from others.

- Add changes to prs created by others and approve it
- Approve your pull request by Bot or Machine User

<!--
自分以外が作成した PR に自分で commit を追加して自分で approve するであるとか、
自分の PR を Machine User や Bot を使って approve するみたいな不正を防ぎましょう。
-->

---

# How to prevent self approval

- Branch Rulesets
- Validate approver and committer by pull_request_review or merge_group event

<!--
まず既に説明した通り Branch Rulesets を設定しましょう。
codeowner の approve を必須にすることで Bot を使った approve を防ぐことが出来ます。
そして pull_request_review や merge_group event を使って PR のコミッターや approver のバリデーションをしましょう。
-->

---

# Validate approver and committer

:o: a pull request is approved by someone who isn't a committer of the pull request
:o: a pull request is approved by multiple people

<!--
PR にコミットした人以外が approve しているか、あるいは複数人が approve していれば良しとし、そうでなければ PR をマージできないようにします。
-->

```yaml
name: Require approval
on:
  pull_request_review:
    types:
      - submitted
jobs:
  require-approval:
    timeout-minutes: 10
    runs-on: ubuntu-24.04
    permissions:
      pull-requests: read # To get a pull request
      contents: read # To list commits in pull requests
    steps:
      - uses: suzuki-shunsuke/deny-self-approve-action@v0.2.0
```

<!--
このように pull_request_review event で workflow を実行し、この job を Required Check に追加します。
deny-self-approve-action という action を使って validation することが出来ます。
-->

---

# Developer Experience

<!--
ここからセキュリティ以外の話をします。
-->

---

# Auto fix

- Fixing code of pull requests automatically by CI increases developer experience
- [GitHub Actions で Verified Commit でコードを自動修正](https://zenn.dev/shunsuke_suzuki/articles/commit-action)
- [ghcp を使って GitHub API で commit や branch を生成する](https://zenn.dev/shunsuke_suzuki/articles/ghcp-create-commit-github-api)

<!--
CI によってコードを自動で修正すると便利です。
その際、先述の通り ghcp や commit-action を使うと簡単に署名付きの commit を生成できます。
-->

---

# Problems of fixing pull requests from fork repositories

- GitHub Actions triggered by pull requests from fork doesn't have write permissions and can't access secrets
- `pull_request_target` in public repositories is dangerous
  - Malicious code can be executed via pull requests from fork

<!--
ここで主に OSS のような public repository の話をします。
public repository では fork repository から PR が作成されますが、 fork からの pull request で実行される workflow では write 権限がありませんし、 secret にもアクセスできません。
そのため、 commit を push して自動で修正することも難しいです。
pull_request_target を使うとできるようになりますが、悪意のあるコードが fork からの PR 経由で実行される可能性があり、非常に危険です。
-->

---

# [autofix.ci](https://autofix.ci)

![bg left:40% width:400px](https://autofix.ci/logo/logo.png)

- GitHub App and action to fix pull requests automatically
- You can fix PRs from fork repositories securely
- Easy to use. You only need to fix codes and run action
- Commits are verified

<!--
そこで autofix.ci という GitHub App 及び Action を使うとこの問題を解決できます。
Workflow に権限を与えず GitHub App 経由でコードを修正することで fork からの PR でも安全にコードを修正できます。
OSS のメンテをされている方には非常にお勧めの App です。
-->

---

# How To Use autofix.ci

1. Install GitHub App (Free for OSS)
1. Add a workflow named `autofix.ci`

```yaml
name: autofix.ci
on: pull_request
jobs:
  fix:
    runs-on: ubuntu-24.04
    steps:
      - uses: actions/checkout@v4.2.2
        with:
          persist-credentials: false
      # ...
      - run: go mod tidy
      - run: prettier -w
      - uses: autofix-ci/action@v1.3.1
```

<!--
使い方も簡単で、 App をインストールしたうえで autofix.ci という名前の workflow を追加し、
workflow でコードを修正したうえで最後に専用の action を実行するだけです。
-->

---

# [commit-action](https://github.com/suzuki-shunsuke/commit-action)

Create commits by GitHub API

```yaml
name: Fix
on: pull_request
jobs:
  fix:
    runs-on: ubuntu-24.04
    steps:
      - uses: actions/checkout@v4.2.2
        with:
          persist-credentials: false
      # ...
      - run: go mod tidy
      - run: prettier -w
      - uses: suzuki-shunsuke/commit-action@v0.0.6
        with:
          app_id: ${{secrets.APP_ID}}
          app_private_key: ${{secrets.APP_PRIVATE_KEY}}
```

<!--
autofix.ci を仕事で使うのは難しいけど、 autofix.ci みたいに簡単にコードを修正したい場合、 commit-action が便利です。
autofix.ci のように job の最後に commit-action を実行するだけでコードを修正できます。
-->

---

# Performance Visualization

- [Terraform Monorepo の CI の実行時間を可視化し 2 分以上高速化](https://developers.freee.co.jp/entry/2024/11/19/100000)
- [Viewing GitHub Actions metrics](https://docs.github.com/en/actions/administering-github-actions/viewing-github-actions-metrics)
  - GitHub Actions usage metrics
  - GitHub Actions performance metrics
- [CIAnalyzer](https://github.com/Kesin11/CIAnalyzer)
- [actions-timeline](https://github.com/Kesin11/actions-timeline)

<!--
次に CI のパフォーマンスの可視化の話です。
パフォーマンスの改善を行うにはまず可視化しないといけません。
GitHub Actions のモニタリングには GitHub Actions Usage Metrics や Performance Metrics が使えます。 
-->

---

![](https://storage.googleapis.com/zenn-user-upload/42382430eaf2-20250310.png)

<!--
このように workflow や job がどのくらい実行されてどのくらい時間がかかってるか見ることが出来ます。
-->

---

![](https://storage.googleapis.com/zenn-user-upload/ee3456f83be0-20250310.png)

---

![](https://storage.googleapis.com/zenn-user-upload/332309c99830-20250310.png)

---

![](https://storage.googleapis.com/zenn-user-upload/19cda544fc9c-20250310.png)

---

:thumbsup: GitHub Actions Usage (Performance) Metrics is available without any setup
:thumbsdown: It's hard to look into the bottle neck deeply
:thumbsdown: They can't visualize the performance

<!--
GitHub Actions Usage Metrics や Performance Metrics は特別なセットアップ無しで簡単に使えますし、大雑把に状況を把握するのには便利です。
しかし、グラフで可視化したりボトルネックを詳細に調べたりするのには向いていません。
-->

---

# [CIAnalyzer](https://github.com/Kesin11/CIAnalyzer)

![bg left:50% width:500px](https://user-images.githubusercontent.com/1324862/82752752-3d5bcd00-9dfb-11ea-9cb3-a32e81c5f3b9.png)

- Collect data to BigQuery and visualize it using LookerStudio
- You can customize Dashboard
- You can drill down the bottle neck deelpy (workflow -> job -> step)

<!--
そこで CIAnalyzer という OSS を使うと、データを BigQuery に集めて LookerStudio で可視化することが出来ます。
ダッシュボードを自由にカスタマイズできますし、 workflow から job, step というふうにボトルネックをドリルダウンして調べることが出来ます。
-->

---

[Terraform Monorepo の CI の実行時間を可視化し 2 分以上高速化](https://developers.freee.co.jp/entry/2024/11/19/100000)

![](https://cdn-ak.f.st-hatena.com/images/fotolife/s/seli07/20241016/20241016154328.png)

---

# Make the result of CI easy to understand

- [github-comment で PR にコメントをして CI の結果を分かりやすくする](https://zenn.dev/shunsuke_suzuki/articles/improve-cicd-with-github-comment)
- [Workflow Command](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/workflow-commands-for-github-actions)
- [Job Summary](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/workflow-commands-for-github-actions#adding-a-job-summary)

<!--
CI の結果をよりわかりやすくし、 CI が失敗した場合にも開発者が困らないようにし、より効率よく問題を解決できるようにしましょう。
-->

---

```sh
github-comment exec -- curl --fail -LO \
  https://github.com/suzuki-shunsuke/tfcmt/releases/download/v3.0.0-2/tfcmt_linux_amd64.tar.gz
```

![](https://user-images.githubusercontent.com/13323303/147478037-c9ea47ee-7a42-4019-8feb-a849daff7cce.png)

<!--
github-comment というツールを使うと、コマンドが失敗した際に失敗したコマンドとその出力をコメントすることが出来ます。
そうすると CI のログを見なくてもどのコマンドが失敗したのか分かるようになります。
-->

---

# Describe how to handle the error

![](https://storage.googleapis.com/zenn-user-upload/0800778bb140-20250310.png)

<!--
また CI が失敗したときにどうすればいいのかガイドをコメントして開発者が困らないようにすることも出来ます。
単に CI を失敗させるだけでなく、このように開発者フレンドリーにすることでお互い幸せになれます。
-->

---

# Conclusion

1. Organization Settings
1. Branch Rulesets
1. Limit GitHub Actions token's permissions
1. Limit GitHub App's repositories and permissions
1. Limit the scope of GitHub Secrets
1. Disable persist-credentials of actions/checkout
1. Pin action versions by full commit sha
1. Set timeout-minutes
1. multi-gitter
1. Linters - ghalint, lintnet, actionlint

<!--
最後にまとめです。
本日は GitHub Actions の主にセキュリティ関連のベストプラクティスについてお話しました。
基本的で良く知られたプラクティスから、自分の経験に基づく応用的なプラクティスについてもお話しました。
-->

---

11. Structure of Workflows and Jobs
1. Prevent self approval
1. Auto fix
1. Performance Visualization
1. Make the result of CI easy to understand

---

- [tibdex/github-app-token](https://github.com/tibdex/github-app-token)
- [disable-checkout-persist-credentials](https://github.com/suzuki-shunsuke/disable-checkout-persist-credentials), [ghatm](https://github.com/suzuki-shunsuke/ghatm), [pinact](https://github.com/suzuki-shunsuke/pinact)
- [ghalint](https://github.com/suzuki-shunsuke/ghalint), [lintnet](https://lintnet.github.io/), [actionlint](https://github.com/rhysd/actionlint)
- [multi-gitter](https://github.com/lindell/multi-gitter)
- [dorny/paths-filter](https://github.com/dorny/paths-filter)
- [autofix.ci](https://autofix.ci)
- [ghcp](https://github.com/int128/ghcp), [commit-action](https://github.com/suzuki-shunsuke/commit-action)
- [deny-self-approve](https://github.com/suzuki-shunsuke/deny-self-approve)
- [github-comment](https://github.com/suzuki-shunsuke/github-comment)

<!--
また、これらのプラクティスを実践するための様々なツールを紹介しました。
今日お話したプラクティスをいきなり全て実践するのは難しいかもしれませんが、まず action のバージョンを full commit hash で固定しましょうみたいな一般的なプラクティスから実践していきましょう。
-->

---

# See also

- [pull_request_target で GitHub Actions の改竄を防ぐ](https://zenn.dev/shunsuke_suzuki/articles/secure-github-actions-by-pull-request-target)
- [GitHub Actions でスクリプト等の改竄を防ぐ](https://zenn.dev/shunsuke_suzuki/articles/prevent-tamper)

<!--
また、最後に本日は時間の関係で割愛したのですが、
GitHub Actions の Workflow や workflow で実行するスクリプトの改竄を防ぐ仕組みについてもブログを書いています。
ご興味のある方は読んでみてください。
-->
