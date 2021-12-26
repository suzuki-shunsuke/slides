<!-- section-title: tfcmt - Post terraform plan & apply result to Pull Request -->

# tfcmt - Post terraform plan & apply result to Pull Request

<!-- block-start: grid -->
Shunsuke Suzuki
<!-- account: twitter, szkdash -->
<!-- account: github, suzuki-shunsuke -->
<!-- block-end -->

2021-12-26

---

<!-- section-title: What\'s tfcmt? -->

## What's tfcmt?

* https://github.com/suzuki-shunsuke/tfcmt
* CLI tool to post terraform plan & apply result to GitHub Pull Request
* Improve Terraform CI/CD workflow
* Fork of [mercari/tfnotify](https://github.com/mercari/tfnotify)
* Written in Go

---

<!-- section-title: Feature -->

## Feature

* :thumbsup: Easy to understand Plan & Apply Result
* :thumbsup: Work without configuration file

---

<!-- section-title: How to use -->

## How to use

```console
$ export GITHUB_TOKEN=xxx # Access Token is needed

$ tfcmt plan -- terraform plan [terraform plan's arguments]
$ tfcmt apply -- terraform apply [terraform apply's arguments]
```

---

<!-- section-title: Plan -->

![image](https://user-images.githubusercontent.com/13323303/147385107-36a7d84d-86db-4046-8d2e-52b271a6a752.png)

---

<!-- section-title: Apply -->

![image](https://user-images.githubusercontent.com/13323303/147404674-a9df6aca-8d89-49c6-b562-9a82a34cf061.png)

---

<!-- section-title: Set Colored Labels -->

## Set Colored Labels

![image](https://user-images.githubusercontent.com/13323303/147402636-efa93ee0-c82e-45f3-b138-384ec0f8e1b5.png)

* Understand the result visually at a glance
* Labels are also useful for search

---

![image](https://user-images.githubusercontent.com/13323303/147385317-305a8e0f-d764-4977-b098-b08efc73b1bf.png)

* HCL Syntax Highlight
* `Refreshing state...` is excluded, so easy to read

---

<!-- section-title: Separate changes made outside of Terraform -->

## Separate changes made outside of Terraform

![image](https://user-images.githubusercontent.com/13323303/147385656-54cdbef1-a876-49dc-945c-39bcf443ca59.png)

---

<!-- section-title: Show Plan Warning -->

## Show Plan Warning

![image](https://user-images.githubusercontent.com/13323303/136238685-be0bab01-f6cb-4b61-89fa-d94225e50ddb.png)

---

<!-- section-title: Hide old comments with githug-comment -->

## Hide old comments with github-comment

![image](https://user-images.githubusercontent.com/13323303/147385936-12c3c60e-396a-4dce-b4af-cf094900a6ed.png)

```console
$ github-comment hide
```

---

<!-- section-title: Whats github-comment -->

## What's github-comment?

* https://github.com/suzuki-shunsuke/github-comment
* CLI tool to post comments to GitHub Commit, Issue, and Pull Request
* Support hiding comments too
