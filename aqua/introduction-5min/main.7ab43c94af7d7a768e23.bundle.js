(self.webpackChunk=self.webpackChunk||[]).push([[179],{7361:(a,e,t)=>{"use strict";t.r(e),t.d(e,{slides:()=>r,backgrounds:()=>s,fragmentSteps:()=>o,fusumaProps:()=>k,default:()=>m});var n=t(7401),l=t(9332),u=(t(108),t(6465));t(8602),t(1042);function i(){return i=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a},i.apply(this,arguments)}const r=[a=>(0,l.kt)(n.Fragment,null,(0,l.kt)("h1",null,"aqua - CLI Version Manager"),(0,l.kt)("p",null,(0,l.kt)("img",{src:"https://github.com/suzuki-shunsuke/aqua/raw/main/logo/aqua_without_text.svg",alt:"logo"})),(0,l.kt)("div",{className:"grid"},(0,l.kt)("p",null,"Shunsuke Suzuki"),(0,l.kt)("a",{href:"https://twitter.com/szkdash",className:"account account-twitter","aria-label":"account-twitter"},(0,l.kt)(u.fWC,null)),(0,l.kt)("a",{href:"https://github.com/suzuki-shunsuke",className:"account account-github","aria-label":"account-github"},(0,l.kt)(u.hJX,null))),(0,l.kt)("p",null,"2021-11-13 ")),a=>(0,l.kt)(n.Fragment,null,(0,l.kt)("h2",null,"Overview"),(0,l.kt)("p",null,"The introduction of the tool ",(0,l.kt)("inlineCode",{parentName:"p"},"aqua")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"What's aqua?"),(0,l.kt)("li",{parentName:"ol"},"Quick Start"),(0,l.kt)("li",{parentName:"ol"},"Why is aqua needed?"),(0,l.kt)("li",{parentName:"ol"},"Feature"))),a=>(0,l.kt)(n.Fragment,null,(0,l.kt)("h2",null,"What's aqua?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CLI tool to install CLI tool with YAML configuration"),(0,l.kt)("li",{parentName:"ul"},"OSS: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/aqua"},"https://github.com/suzuki-shunsuke/aqua")),(0,l.kt)("li",{parentName:"ul"},"Written in Go")),(0,l.kt)("p",null,(0,l.kt)("img",{src:"https://github.com/suzuki-shunsuke/aqua/raw/main/logo/aqua_without_text.svg",alt:"logo"}))),a=>(0,l.kt)(n.Fragment,null,(0,l.kt)("h2",null,"Main Usecases"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install tools for a specific repository (CI and local development)"),(0,l.kt)("li",{parentName:"ol"},"Install tools for your organization and team"),(0,l.kt)("li",{parentName:"ol"},"Install tools for your laptops (like dotfiles)"))),a=>(0,l.kt)(n.Fragment,null,(0,l.kt)("h2",null,"Quick Start"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"# For Linux\n# $ curl -sSfL \\\n#   https://raw.githubusercontent.com/suzuki-shunsuke/aqua-installer/v0.2.0/aqua-installer |\n#   bash\n$ brew install suzuki-shunsuke/aqua/aqua\n\n$ export PATH=~/.aqua/bin:$PATH\n$ vi aqua.yaml\n$ aqua i -l\n")),(0,l.kt)("p",null,"aqua.yaml"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- type: standard\n  ref: v0.10.8 # renovate: depName=suzuki-shunsuke/aqua-registry\npackages:\n- name: direnv/direnv@v2.28.0\n- name: junegunn/fzf@0.27.2\n"))),a=>(0,l.kt)(n.Fragment,null,(0,l.kt)("h2",null,"GitHub Actions and CircleCI Orb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GitHub Actions",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/int128/aqua-action"},"int128/aqua-action")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/aqua-installer"},"suzuki-shunsuke/aqua-installer")))),(0,l.kt)("li",{parentName:"ul"},"CircleCI Orb",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://circleci.com/developer/orbs/orb/suzuki-shunsuke/aqua"},"suzuki-shunsuke/aqua")))))),a=>(0,l.kt)(n.Fragment,null,(0,l.kt)("h2",null,"Why is aqua needed?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Install tools easily with unified way"),(0,l.kt)("li",{parentName:"ul"},"Solve the problem due to the difference of tool version"),(0,l.kt)("li",{parentName:"ul"},"Coexist different versions and fork versions in a laptop"))),a=>(0,l.kt)(n.Fragment,null,(0,l.kt)("h2",null,"Feature"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Simple Configuration"),(0,l.kt)("li",{parentName:"ul"},"Lazy Install"),(0,l.kt)("li",{parentName:"ul"},"Renovate Friendly"))),a=>(0,l.kt)(n.Fragment,null,(0,l.kt)("h2",null,"Simple Configuration"),(0,l.kt)("p",null,"aqua.yaml"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- type: standard\n  ref: v0.10.8 # renovate: depName=suzuki-shunsuke/aqua-registry\n\npackages:\n- name: direnv/direnv@v2.28.0\n- name: junegunn/fzf@0.27.2\n"))),a=>(0,l.kt)(n.Fragment,null,(0,l.kt)("h2",null,"Lazy Install"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},'$ direnv version\n2.28.0\n\n# change direnv version\n$ sed -i "s/direnv@v2.28.0/direnv@v2.27.0/" aqua.yaml\n\n# direnv v2.27.0 is installed automatically\n$ direnv version\nINFO[0000] download and unarchive the package            aqua_version=0.7.16 package_name=direnv/direnv package_version=v2.27.0 program=aqua registry=standard\n2.27.0\n'))),a=>(0,l.kt)(n.Fragment,null,(0,l.kt)("h2",null,"Renovate Friendly"),(0,l.kt)("p",null,"You can update package versions with ",(0,l.kt)("a",{parentName:"p",href:"https://docs.renovatebot.com/"},"Renovate"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/aqua-renovate-config"},"suzuki-shunsuke/aqua-renovate-config"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": [\n    "github>suzuki-shunsuke/aqua-renovate-config",\n    "github>suzuki-shunsuke/aqua-renovate-config:file(aqua/.*\\\\.ya?ml)"\n  ]\n}\n'))),a=>(0,l.kt)(n.Fragment,null,(0,l.kt)("h2",null,"Additional Feature"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Registry"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/aqua-registry"},"Standard Registry"),": Let's add your favorite tools"),(0,l.kt)("li",{parentName:"ul"},"Save installation time and disk by sharing tools across projects"),(0,l.kt)("li",{parentName:"ul"},"Fuzzy Search of packages by command ",(0,l.kt)("inlineCode",{parentName:"li"},"aqua g")),(0,l.kt)("li",{parentName:"ul"},"Read configuration files recursively"),(0,l.kt)("li",{parentName:"ul"},"Split ",(0,l.kt)("inlineCode",{parentName:"li"},"packages")," configuration to multiple files")),(0,l.kt)("p",null,"Please see ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/aqua/blob/main/README.md"},"the document"),".")),a=>(0,l.kt)(n.Fragment,null,(0,l.kt)("h2",null,"Uninstall aqua"),(0,l.kt)("p",null,"You can install and uninstall aqua easily, so let's try aqua feel free."),(0,l.kt)("p",null,"Remove aqua and ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.aqua"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"# For Linux\n# $ rm /usr/local/bin/aqua\n$ brew uninstall aqua\n\n$ rm -R ~/.aqua\n")))],s=[0,0,0,0,0,0,0,0,0,0,0,0,0],o=[0,0,0,0,0,0,0,0,0,0,0,0,0],k=[{sectionTitle:"aqua - CLI Version Manager"},{sectionTitle:"Overview"},{sectionTitle:"What's aqua?"},{sectionTitle:"Main Usecases"},{sectionTitle:"Quick Start"},{sectionTitle:"GitHub Actions and CircleCI Orb"},{sectionTitle:"Why is aqua needed?"},{sectionTitle:"Feature"},{sectionTitle:"Simple Configuration"},{sectionTitle:"Lazy Install"},{sectionTitle:"Renovate Friendly"},{sectionTitle:"Additional Feature"},{sectionTitle:"Uninstall aqua"}],p={};function m(a){let{components:e,...t}=a;return(0,l.kt)("wrapper",i({},p,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",null,"aqua - CLI Version Manager"),(0,l.kt)("p",null,(0,l.kt)("img",{src:"https://github.com/suzuki-shunsuke/aqua/raw/main/logo/aqua_without_text.svg",alt:"logo"})),(0,l.kt)("p",null,"Shunsuke Suzuki"),(0,l.kt)("p",null,"2021-11-13 "),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"Overview"),(0,l.kt)("p",null,"The introduction of the tool ",(0,l.kt)("inlineCode",{parentName:"p"},"aqua")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"What's aqua?"),(0,l.kt)("li",{parentName:"ol"},"Quick Start"),(0,l.kt)("li",{parentName:"ol"},"Why is aqua needed?"),(0,l.kt)("li",{parentName:"ol"},"Feature")),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"What's aqua?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"CLI tool to install CLI tool with YAML configuration"),(0,l.kt)("li",{parentName:"ul"},"OSS: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/aqua"},"https://github.com/suzuki-shunsuke/aqua")),(0,l.kt)("li",{parentName:"ul"},"Written in Go")),(0,l.kt)("p",null,(0,l.kt)("img",{src:"https://github.com/suzuki-shunsuke/aqua/raw/main/logo/aqua_without_text.svg",alt:"logo"})),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"Main Usecases"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install tools for a specific repository (CI and local development)"),(0,l.kt)("li",{parentName:"ol"},"Install tools for your organization and team"),(0,l.kt)("li",{parentName:"ol"},"Install tools for your laptops (like dotfiles)")),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"Quick Start"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"# For Linux\n# $ curl -sSfL \\\n#   https://raw.githubusercontent.com/suzuki-shunsuke/aqua-installer/v0.2.0/aqua-installer |\n#   bash\n$ brew install suzuki-shunsuke/aqua/aqua\n\n$ export PATH=~/.aqua/bin:$PATH\n$ vi aqua.yaml\n$ aqua i -l\n")),(0,l.kt)("p",null,"aqua.yaml"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- type: standard\n  ref: v0.10.8 # renovate: depName=suzuki-shunsuke/aqua-registry\npackages:\n- name: direnv/direnv@v2.28.0\n- name: junegunn/fzf@0.27.2\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"GitHub Actions and CircleCI Orb"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GitHub Actions",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/int128/aqua-action"},"int128/aqua-action")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/aqua-installer"},"suzuki-shunsuke/aqua-installer")))),(0,l.kt)("li",{parentName:"ul"},"CircleCI Orb",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://circleci.com/developer/orbs/orb/suzuki-shunsuke/aqua"},"suzuki-shunsuke/aqua"))))),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"Why is aqua needed?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Install tools easily with unified way"),(0,l.kt)("li",{parentName:"ul"},"Solve the problem due to the difference of tool version"),(0,l.kt)("li",{parentName:"ul"},"Coexist different versions and fork versions in a laptop")),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"Feature"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Simple Configuration"),(0,l.kt)("li",{parentName:"ul"},"Lazy Install"),(0,l.kt)("li",{parentName:"ul"},"Renovate Friendly")),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"Simple Configuration"),(0,l.kt)("p",null,"aqua.yaml"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"registries:\n- type: standard\n  ref: v0.10.8 # renovate: depName=suzuki-shunsuke/aqua-registry\n\npackages:\n- name: direnv/direnv@v2.28.0\n- name: junegunn/fzf@0.27.2\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"Lazy Install"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},'$ direnv version\n2.28.0\n\n# change direnv version\n$ sed -i "s/direnv@v2.28.0/direnv@v2.27.0/" aqua.yaml\n\n# direnv v2.27.0 is installed automatically\n$ direnv version\nINFO[0000] download and unarchive the package            aqua_version=0.7.16 package_name=direnv/direnv package_version=v2.27.0 program=aqua registry=standard\n2.27.0\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"Renovate Friendly"),(0,l.kt)("p",null,"You can update package versions with ",(0,l.kt)("a",{parentName:"p",href:"https://docs.renovatebot.com/"},"Renovate"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/aqua-renovate-config"},"suzuki-shunsuke/aqua-renovate-config"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": [\n    "github>suzuki-shunsuke/aqua-renovate-config",\n    "github>suzuki-shunsuke/aqua-renovate-config:file(aqua/.*\\\\.ya?ml)"\n  ]\n}\n')),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"Additional Feature"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Registry"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/aqua-registry"},"Standard Registry"),": Let's add your favorite tools"),(0,l.kt)("li",{parentName:"ul"},"Save installation time and disk by sharing tools across projects"),(0,l.kt)("li",{parentName:"ul"},"Fuzzy Search of packages by command ",(0,l.kt)("inlineCode",{parentName:"li"},"aqua g")),(0,l.kt)("li",{parentName:"ul"},"Read configuration files recursively"),(0,l.kt)("li",{parentName:"ul"},"Split ",(0,l.kt)("inlineCode",{parentName:"li"},"packages")," configuration to multiple files")),(0,l.kt)("p",null,"Please see ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/suzuki-shunsuke/aqua/blob/main/README.md"},"the document"),"."),(0,l.kt)("hr",null),(0,l.kt)("h2",null,"Uninstall aqua"),(0,l.kt)("p",null,"You can install and uninstall aqua easily, so let's try aqua feel free."),(0,l.kt)("p",null,"Remove aqua and ",(0,l.kt)("inlineCode",{parentName:"p"},"~/.aqua"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"# For Linux\n# $ rm /usr/local/bin/aqua\n$ brew uninstall aqua\n\n$ rm -R ~/.aqua\n")))}m.isMDXComponent=!0},3677:(a,e,t)=>{"use strict";t.r(e)},3447:(a,e,t)=>{var n={"./0-aqua-introduction.md":7361};function l(a){var e=u(a);return t(e)}function u(a){if(!t.o(n,a)){var e=new Error("Cannot find module '"+a+"'");throw e.code="MODULE_NOT_FOUND",e}return n[a]}l.keys=function(){return Object.keys(n)},l.resolve=u,a.exports=l,l.id=3447}},a=>{a.O(0,[179],(()=>{a.E(921),a.E(880)}),5);var e=e=>a(a.s=e);a.O(0,[736],(()=>(e(7751),e(6905),e(9969))));a.O()}]);