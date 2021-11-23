<!-- section-title: aqua - CLI Version Manager -->

# aqua - CLI Version Manager

![logo](https://github.com/suzuki-shunsuke/aqua/raw/main/logo/aqua_without_text.svg)


<!-- block-start: grid -->
Shunsuke Suzuki
<!-- account: twitter, szkdash -->
<!-- account: github, suzuki-shunsuke -->
<!-- block-end -->

2021-11-13 

---

<!-- section-title: Overview -->

## Overview

The introduction of the tool `aqua`

1. What's aqua?
1. Quick Start
1. Why is aqua needed?
1. Feature

---

<!-- section-title: What\'s aqua? -->

## What's aqua?

* CLI tool to install CLI tool with YAML configuration
* OSS: https://github.com/suzuki-shunsuke/aqua
* Written in Go

![logo](https://github.com/suzuki-shunsuke/aqua/raw/main/logo/aqua_without_text.svg)

---

<!-- section-title: Main Usecases -->

## Main Usecases

1. Install tools for a specific repository (CI and local development)
1. Install tools for your organization and team
1. Install tools for your laptops (like dotfiles)

---

<!-- section-title: Quick Start -->

## Quick Start

```console
# For Linux
# $ curl -sSfL \
#   https://raw.githubusercontent.com/suzuki-shunsuke/aqua-installer/v0.2.0/aqua-installer |
#   bash
$ brew install suzuki-shunsuke/aqua/aqua

$ export PATH=~/.aqua/bin:$PATH
$ vi aqua.yaml
$ aqua i -l
```

aqua.yaml

```yaml
registries:
- type: standard
  ref: v0.10.8 # renovate: depName=suzuki-shunsuke/aqua-registry
packages:
- name: direnv/direnv@v2.28.0
- name: junegunn/fzf@0.27.2
```

---

<!-- section-title: GitHub Actions and CircleCI Orb -->

## GitHub Actions and CircleCI Orb

* GitHub Actions
  * [int128/aqua-action](https://github.com/int128/aqua-action)
  * [suzuki-shunsuke/aqua-installer](https://github.com/suzuki-shunsuke/aqua-installer)
* CircleCI Orb
  * [suzuki-shunsuke/aqua](https://circleci.com/developer/orbs/orb/suzuki-shunsuke/aqua)

---

<!-- section-title: Why is aqua needed? -->

## Why is aqua needed? 

* Install tools easily with unified way
* Solve the problem due to the difference of tool version
* Coexist different versions and fork versions in a laptop

---

<!-- section-title: Feature -->

## Feature

* Simple Configuration
* Lazy Install
* Renovate Friendly

---

<!-- section-title: Simple Configuration -->

## Simple Configuration

aqua.yaml

```yaml
registries:
- type: standard
  ref: v0.10.8 # renovate: depName=suzuki-shunsuke/aqua-registry

packages:
- name: direnv/direnv@v2.28.0
- name: junegunn/fzf@0.27.2
```

---

<!-- section-title: Lazy Install -->

## Lazy Install

```console
$ direnv version
2.28.0

# change direnv version
$ sed -i "s/direnv@v2.28.0/direnv@v2.27.0/" aqua.yaml

# direnv v2.27.0 is installed automatically
$ direnv version
INFO[0000] download and unarchive the package            aqua_version=0.7.16 package_name=direnv/direnv package_version=v2.27.0 program=aqua registry=standard
2.27.0
```

---

<!-- section-title: Renovate Friendly -->

## Renovate Friendly

You can update package versions with [Renovate](https://docs.renovatebot.com/).

* [suzuki-shunsuke/aqua-renovate-config](https://github.com/suzuki-shunsuke/aqua-renovate-config)

```json
{
  "extends": [
    "github>suzuki-shunsuke/aqua-renovate-config",
    "github>suzuki-shunsuke/aqua-renovate-config:file(aqua/.*\\.ya?ml)"
  ]
}
```

---

<!-- section-title: Additional Feature -->

## Additional Feature

* Registry
* [Standard Registry](https://github.com/suzuki-shunsuke/aqua-registry): Let's add your favorite tools
* Save installation time and disk by sharing tools across projects
* Fuzzy Search of packages by command `aqua g`
* Read configuration files recursively
* Split `packages` configuration to multiple files

Please see [the document](https://github.com/suzuki-shunsuke/aqua/blob/main/README.md).

---

<!-- section-title: Uninstall aqua -->

## Uninstall aqua

You can install and uninstall aqua easily, so let's try aqua feel free.

Remove aqua and `~/.aqua`.

```console
# For Linux
# $ rm /usr/local/bin/aqua
$ brew uninstall aqua

$ rm -R ~/.aqua
```