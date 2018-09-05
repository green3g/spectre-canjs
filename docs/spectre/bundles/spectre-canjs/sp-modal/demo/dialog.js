define("spectre-canjs@3.4.0#sp-modal/demo/dialog",["can-stache@4.10.3#can-stache","can-define@2.5.4#map/map","spectre-canjs@3.4.0#sp-modal/sp-modal","spectre-canjs@3.4.0#sp-confirm/sp-confirm","can-component@4.3.0#can-component","spectre-canjs@3.4.0#sp-modal/sp-modal.stache!steal-stache@4.1.2#steal-stache","spectre-canjs@3.4.0#sp-modal/sp-modal.less!steal-less@1.3.1#less","spectre-canjs@3.4.0#sp-modal/ViewModel","spectre-canjs@3.4.0#sp-confirm/sp-confirm.stache!steal-stache@4.1.2#steal-stache","spectre-canjs@3.4.0#sp-confirm/ViewModel"],function(e,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var a=o(e),s=o(n),c=(0,a.default)(document.getElementById("demo-html").innerHTML),t=new s.default({modal1:!1,modal2:!1,modal3:!1,modal4:!1,confirm1:!1,onAccept:function(e){console.log("----- Confirmation Accepted ------"),console.log(e)},onReject:function(e){console.log("----- Confirmation Rejected ------"),console.log(e)},showModal:function(e){this[e]=!0},hideModal:function(e){this[e]=!1}});document.body.appendChild(c(t)),window.DEMO_SOURCE="\nimport 'spectre-canjs/sp-modal/sp-modal';\nimport 'spectre-canjs/sp-modal/sp-confirm';\n\nimport stache from 'can-stache';\nimport DefineMap from 'can-define/map/map';\n\nvar render = stache(document.getElementById('demo-html').innerHTML);\n\nvar viewModel = new DefineMap({\n    modal1: false,\n    modal2: false,\n    modal3: false,\n    confirm1: false,\n    onAccept () {\n        console.log('----- Confirmation Accepted ------');\n        console.log(arguments);\n    },\n    onReject () {\n        console.log('----- Confirmation Rejected ------');\n        console.log(arguments);\n    },\n    showModal (name) {\n        this[name] = true;\n    },\n    hideModal (name) {\n        this[name] = false;\n    }\n});\n\ndocument.body.appendChild(render(viewModel));\n"});
//# sourceMappingURL=dialog.js.map