(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{256:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"vscode插件开发3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vscode插件开发3","aria-hidden":"true"}},[e._v("#")]),e._v(" vscode插件开发3")]),e._v(" "),s("h3",{attrs:{id:"activation-events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#activation-events","aria-hidden":"true"}},[e._v("#")]),e._v(" Activation Events")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("Activation Events")]),e._v("是指package.json里面的配置项==activationEvents==，当满足"),s("strong",[e._v("Activation Events")]),e._v("条件的时候，你的命令就可以被触发，以下是"),s("strong",[e._v("Activation Events")]),e._v("列表")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("*")])]),e._v(" "),s("li",[s("strong",[e._v("onLanguage")])]),e._v(" "),s("li",[s("strong",[e._v("onCommand")])]),e._v(" "),s("li",[s("strong",[e._v("onDebug")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("onDebugInitialConfigurations")])]),e._v(" "),s("li",[s("strong",[e._v("onDebugResolve")])])])]),e._v(" "),s("li",[s("strong",[e._v("workspaceContains")])]),e._v(" "),s("li",[s("strong",[e._v("onFileSystem")])]),e._v(" "),s("li",[s("strong",[e._v("onView")])]),e._v(" "),s("li",[s("strong",[e._v("onWebviewPanel")])])]),e._v(" "),s("h3",{attrs:{id:"start-up"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-up","aria-hidden":"true"}},[e._v("#")]),e._v(" *(Start up)")]),e._v(" "),s("blockquote",[s("p",[e._v("当vscode启动时触发action")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('"activationEvents": [\n    "*"\n]\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h3",{attrs:{id:"onlanguage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onlanguage","aria-hidden":"true"}},[e._v("#")]),e._v(" onLanguage")]),e._v(" "),s("blockquote",[s("p",[e._v("当文件是指定语言类型时触发action")])]),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"activationEvents"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"onLanguage:python"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"onLanguage:markdown"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"onLanguage:typescript"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h3",{attrs:{id:"oncommand"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oncommand","aria-hidden":"true"}},[e._v("#")]),e._v(" onCommand")]),e._v(" "),s("blockquote",[s("p",[e._v("使用命令触发action")])]),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"activationEvents"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"onCommand:extension.sayHello"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h3",{attrs:{id:"ondebug"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ondebug","aria-hidden":"true"}},[e._v("#")]),e._v(" onDebug")]),e._v(" "),s("blockquote",[s("p",[e._v("使用调试工具时触发action")])]),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"activationEvents"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"onDebug"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h3",{attrs:{id:"ondebuginitialconfigurations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ondebuginitialconfigurations","aria-hidden":"true"}},[e._v("#")]),e._v(" onDebugInitialConfigurations")]),e._v(" "),s("h3",{attrs:{id:"ondebugresolve"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ondebugresolve","aria-hidden":"true"}},[e._v("#")]),e._v(" onDebugResolve")]),e._v(" "),s("blockquote",[s("p",[e._v("These are two more fine-grained onDebug activation events:")])]),e._v(" "),s("blockquote",[s("p",[e._v("onDebugInitialConfigurations is fired just before the provideDebugConfigurations method of the DebugConfigurationProvider is called.\nonDebugResolve:type is fired just before the resolveDebugConfiguration method of the DebugConfigurationProvider for the specified type is called.\nRule of thumb: If activation of a debug extension is lightweight, use onDebug. If it is heavyweight, use onDebugInitialConfigurations and/or onDebugResolve depending on whether the DebugConfigurationProvider implements the corresponding methods provideDebugConfigurations and/or resolveDebugConfiguration. See Using a DebugConfigurationProvider for more details on these methods.")])]),e._v(" "),s("h3",{attrs:{id:"workspacecontains"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#workspacecontains","aria-hidden":"true"}},[e._v("#")]),e._v(" workspaceContains")]),e._v(" "),s("blockquote",[s("p",[e._v("当打开的是文件夹，且文件夹中至少有一个文件满足满足要求时触发action")])]),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"activationEvents"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"workspaceContains:**/.editorconfig"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h3",{attrs:{id:"onfilesystem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onfilesystem","aria-hidden":"true"}},[e._v("#")]),e._v(" onFileSystem")]),e._v(" "),s("blockquote",[s("p",[e._v("当文件是从scheme中读取时触发action。通常是file-scheme,比如ssh或者ftp")])]),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"activationEvents"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"onFileSystem:sftp"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h3",{attrs:{id:"onview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onview","aria-hidden":"true"}},[e._v("#")]),e._v(" onView")]),e._v(" "),s("blockquote",[s("p",[e._v("This activation event is emitted and interested extensions will be activated whenever a view of the specified id is expanded:")])]),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"activationEvents"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"onView:nodeDependencies"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h3",{attrs:{id:"onuri"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onuri","aria-hidden":"true"}},[e._v("#")]),e._v(" onUri")]),e._v(" "),s("blockquote",[s("p",[e._v("This activation event is emitted and interested extensions will be activated whenever a system-wide Uri for that extension is opened. The Uri scheme is fixed to either vscode or vscode-insiders. The Uri authority must be the extension's identifier. The rest of the Uri is arbitrary.")])]),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"activationEvents"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"onUri"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h3",{attrs:{id:"onwebviewpanel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#onwebviewpanel","aria-hidden":"true"}},[e._v("#")]),e._v(" onWebviewPanel")]),e._v(" "),s("blockquote",[s("p",[e._v("This activation event is emitted and interested extensions will be activated whenever VS Code needs to restore a webview with the matching viewType.")])]),e._v(" "),s("blockquote",[s("p",[e._v("For example, the declaration of onWebviewPanel below:")])]),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"activationEvents"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    ..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"onWebviewPanel:catCoding"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("blockquote",[s("p",[e._v("will cause the extension to be activated when VS Code needs to restore a webview with the viewType: catCoding. The viewType is set in the call to window.createWebviewPanel and you will need to have another activation event (for example, onCommand) to initially activate your extension and create the webview.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);