(self.webpackChunk=self.webpackChunk||[]).push([[179],{4533:(t,e,l)=>{"use strict";l.r(e),l.d(e,{slides:()=>s,backgrounds:()=>o,fragmentSteps:()=>i,fusumaProps:()=>m,default:()=>p});var a=l(7401),n=l(9332),u=(l(108),l(6465));function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var l=arguments[e];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a])}return t},r.apply(this,arguments)}const s=[t=>(0,n.kt)(a.Fragment,null,(0,n.kt)("h1",null,"tfcmt - Post terraform plan & apply result to Pull Request"),(0,n.kt)("div",{className:"grid"},(0,n.kt)("p",null,"Shunsuke Suzuki"),(0,n.kt)("a",{href:"https://twitter.com/szkdash",className:"account account-twitter","aria-label":"account-twitter"},(0,n.kt)(u.fWC,null)),(0,n.kt)("a",{href:"https://github.com/suzuki-shunsuke",className:"account account-github","aria-label":"account-github"},(0,n.kt)(u.hJX,null))),(0,n.kt)("p",null,"2021-12-26")),t=>(0,n.kt)(a.Fragment,null,(0,n.kt)("h2",null,"What's tfcmt?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/tfcmt"},"https://github.com/suzuki-shunsuke/tfcmt")),(0,n.kt)("li",{parentName:"ul"},"CLI tool to post terraform plan & apply result to GitHub Pull Request"),(0,n.kt)("li",{parentName:"ul"},"Improve Terraform CI/CD workflow"),(0,n.kt)("li",{parentName:"ul"},"Fork of ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mercari/tfnotify"},"mercari/tfnotify")),(0,n.kt)("li",{parentName:"ul"},"Written in Go"))),t=>(0,n.kt)(a.Fragment,null,(0,n.kt)("h2",null,"Feature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"👍 Easy to understand Plan & Apply Result"),(0,n.kt)("li",{parentName:"ul"},"👍 Work without configuration file"))),t=>(0,n.kt)(a.Fragment,null,(0,n.kt)("h2",null,"How to use"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"$ export GITHUB_TOKEN=xxx # Access Token is needed\n\n$ tfcmt plan -- terraform plan [terraform plan's arguments]\n$ tfcmt apply -- terraform apply [terraform apply's arguments]\n"))),t=>(0,n.kt)(a.Fragment,null,(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/13323303/147385107-36a7d84d-86db-4046-8d2e-52b271a6a752.png",alt:"image"}))),t=>(0,n.kt)(a.Fragment,null,(0,n.kt)("h2",null,"Set Colored Labels"),(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/13323303/147402636-efa93ee0-c82e-45f3-b138-384ec0f8e1b5.png",alt:"image"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Understand the result visually at a glance"),(0,n.kt)("li",{parentName:"ul"},"Labels are also useful for search"))),t=>(0,n.kt)(a.Fragment,null,(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/13323303/147385317-305a8e0f-d764-4977-b098-b08efc73b1bf.png",alt:"image"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"HCL Syntax Highlight"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Refreshing state...")," is excluded, so easy to read"))),t=>(0,n.kt)(a.Fragment,null,(0,n.kt)("h2",null,"Separate changes made outside of Terraform"),(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/13323303/147385656-54cdbef1-a876-49dc-945c-39bcf443ca59.png",alt:"image"}))),t=>(0,n.kt)(a.Fragment,null,(0,n.kt)("h2",null,"Show Plan Warning"),(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/13323303/136238685-be0bab01-f6cb-4b61-89fa-d94225e50ddb.png",alt:"image"}))),t=>(0,n.kt)(a.Fragment,null,(0,n.kt)("h2",null,"Hide old comments with github-comment"),(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/13323303/147385936-12c3c60e-396a-4dce-b4af-cf094900a6ed.png",alt:"image"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"$ github-comment hide\n"))),t=>(0,n.kt)(a.Fragment,null,(0,n.kt)("h2",null,"What's github-comment?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/github-comment"},"https://github.com/suzuki-shunsuke/github-comment")),(0,n.kt)("li",{parentName:"ul"},"CLI tool to post comments to GitHub Commit, Issue, and Pull Request"),(0,n.kt)("li",{parentName:"ul"},"Support hiding comments too")))],o=[0,0,0,0,0,0,0,0,0,0,0],i=[0,0,0,0,0,0,0,0,0,0,0],m=[{sectionTitle:"tfcmt - Post terraform plan & apply result to Pull Request"},{sectionTitle:"What's tfcmt?"},{sectionTitle:"Feature"},{sectionTitle:"How to use"},{sectionTitle:"Plan"},{sectionTitle:"Set Colored Labels"},{},{sectionTitle:"Separate changes made outside of Terraform"},{sectionTitle:"Show Plan Warning"},{sectionTitle:"Hide old comments with githug-comment"},{sectionTitle:"Whats github-comment"}],c={};function p(t){let{components:e,...l}=t;return(0,n.kt)("wrapper",r({},c,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",null,"tfcmt - Post terraform plan & apply result to Pull Request"),(0,n.kt)("p",null,"Shunsuke Suzuki"),(0,n.kt)("p",null,"2021-12-26"),(0,n.kt)("hr",null),(0,n.kt)("h2",null,"What's tfcmt?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/tfcmt"},"https://github.com/suzuki-shunsuke/tfcmt")),(0,n.kt)("li",{parentName:"ul"},"CLI tool to post terraform plan & apply result to GitHub Pull Request"),(0,n.kt)("li",{parentName:"ul"},"Improve Terraform CI/CD workflow"),(0,n.kt)("li",{parentName:"ul"},"Fork of ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/mercari/tfnotify"},"mercari/tfnotify")),(0,n.kt)("li",{parentName:"ul"},"Written in Go")),(0,n.kt)("hr",null),(0,n.kt)("h2",null,"Feature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"👍 Easy to understand Plan & Apply Result"),(0,n.kt)("li",{parentName:"ul"},"👍 Work without configuration file")),(0,n.kt)("hr",null),(0,n.kt)("h2",null,"How to use"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"$ export GITHUB_TOKEN=xxx # Access Token is needed\n\n$ tfcmt plan -- terraform plan [terraform plan's arguments]\n$ tfcmt apply -- terraform apply [terraform apply's arguments]\n")),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/13323303/147385107-36a7d84d-86db-4046-8d2e-52b271a6a752.png",alt:"image"})),(0,n.kt)("hr",null),(0,n.kt)("h2",null,"Set Colored Labels"),(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/13323303/147402636-efa93ee0-c82e-45f3-b138-384ec0f8e1b5.png",alt:"image"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Understand the result visually at a glance"),(0,n.kt)("li",{parentName:"ul"},"Labels are also useful for search")),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/13323303/147385317-305a8e0f-d764-4977-b098-b08efc73b1bf.png",alt:"image"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"HCL Syntax Highlight"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Refreshing state...")," is excluded, so easy to read")),(0,n.kt)("hr",null),(0,n.kt)("h2",null,"Separate changes made outside of Terraform"),(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/13323303/147385656-54cdbef1-a876-49dc-945c-39bcf443ca59.png",alt:"image"})),(0,n.kt)("hr",null),(0,n.kt)("h2",null,"Show Plan Warning"),(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/13323303/136238685-be0bab01-f6cb-4b61-89fa-d94225e50ddb.png",alt:"image"})),(0,n.kt)("hr",null),(0,n.kt)("h2",null,"Hide old comments with github-comment"),(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/13323303/147385936-12c3c60e-396a-4dce-b4af-cf094900a6ed.png",alt:"image"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"$ github-comment hide\n")),(0,n.kt)("hr",null),(0,n.kt)("h2",null,"What's github-comment?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/suzuki-shunsuke/github-comment"},"https://github.com/suzuki-shunsuke/github-comment")),(0,n.kt)("li",{parentName:"ul"},"CLI tool to post comments to GitHub Commit, Issue, and Pull Request"),(0,n.kt)("li",{parentName:"ul"},"Support hiding comments too")))}p.isMDXComponent=!0},3677:(t,e,l)=>{"use strict";l.r(e)},3447:(t,e,l)=>{var a={"./0-tfcmt-introduction.md":4533};function n(t){var e=u(t);return l(e)}function u(t){if(!l.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=u,t.exports=n,n.id=3447}},t=>{t.O(0,[179],(()=>{t.E(921),t.E(880)}),5);var e=e=>t(t.s=e);t.O(0,[736],(()=>(e(7751),e(1720),e(9969))));t.O()}]);