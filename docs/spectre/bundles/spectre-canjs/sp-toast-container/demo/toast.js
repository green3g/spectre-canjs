define("spectre-canjs@3.6.3#sp-toast-container/demo/toast",["can-define@2.6.3#map/map","can-stache@4.12.0#can-stache","can-view-model@4.0.1#can-view-model","spectre-canjs@3.6.3#sp-toast-container/sp-toast-container","spectre-canjs@3.6.3#sp-toast/sp-toast","spectre-canjs@3.6.3#sp-toast-container/demo/styles.less!steal-less@1.3.1#less","can-component@4.4.2#can-component","can-component@4.4.2#control/control","can-control@4.2.0#can-control","can-construct@3.5.3#can-construct","can-reflect@1.17.5#can-reflect","can-reflect@1.17.5#reflections/call/call","can-symbol@1.6.1#can-symbol","can-namespace@1.0.0#can-namespace","can-reflect@1.17.5#reflections/type/type","can-reflect@1.17.5#reflections/helpers","can-reflect@1.17.5#reflections/get-set/get-set","can-reflect@1.17.5#reflections/observe/observe","can-reflect@1.17.5#reflections/shape/shape","can-reflect@1.17.5#reflections/shape/schema/schema","can-reflect@1.17.5#reflections/get-name/get-name","can-reflect@1.17.5#types/map","can-reflect@1.17.5#types/set","can-log@1.0.0#dev/dev","can-log@1.0.0#can-log","can-string@1.0.0#can-string","can-assign@1.3.1#can-assign","can-stache-key@1.4.0#can-stache-key","can-observation-recorder@1.2.0#can-observation-recorder","can-reflect-promise@2.1.0#can-reflect-promise","can-queues@1.1.3#can-queues","can-queues@1.1.3#queue","can-queues@1.1.3#queue-state","can-queues@1.1.3#priority-queue","can-queues@1.1.3#completion-queue","can-key-tree@1.2.0#can-key-tree","can-observation@4.1.0#can-observation","can-event-queue@1.1.0#value/value","can-define-lazy-value@1.1.0#define-lazy-value","can-event-queue@1.1.0#dependency-record/merge","can-observation@4.1.0#recorder-dependency-helpers","can-observation@4.1.0#temporarily-bind","can-event-queue@1.1.0#map/map","can-dom-events@1.3.0#can-dom-events","can-dom-events@1.3.0#helpers/util","can-globals@1.2.0#document/document","can-globals@1.2.0#global/global","can-globals@1.2.0#can-globals-instance","can-globals@1.2.0#can-globals-proto","can-globals@1.2.0#is-browser-window/is-browser-window","can-globals@1.2.0#is-node/is-node","can-dom-events@1.3.0#helpers/make-event-registry","can-dom-events@1.3.0#helpers/-make-delegate-event-tree","can-key@1.2.0#get/get","can-key@1.2.0#utils","can-dom-mutate@1.2.1#can-dom-mutate","can-globals@1.2.0#can-globals","can-globals@1.2.0#location/location","can-globals@1.2.0#mutation-observer/mutation-observer","can-globals@1.2.0#custom-elements/custom-elements","can-dom-mutate@1.2.1#-util","can-bind@1.0.0#can-bind","can-reflect-dependencies@1.1.0#can-reflect-dependencies","can-reflect-dependencies@1.1.0#src/add-mutated-by","can-reflect-dependencies@1.1.0#src/delete-mutated-by","can-reflect-dependencies@1.1.0#src/get-dependency-data-of","can-reflect-dependencies@1.1.0#src/is-function","can-stache-bindings@4.4.1#can-stache-bindings","can-stache@4.12.0#src/expression","can-stache@4.12.0#expressions/arg","can-stache@4.12.0#expressions/literal","can-stache@4.12.0#expressions/hashes","can-stache@4.12.0#src/expression-helpers","can-view-scope@4.9.1#make-compute-like","can-single-reference@1.2.0#can-single-reference","can-cid@1.3.0#can-cid","can-simple-observable@2.3.0#setter/setter","can-simple-observable@2.3.0#settable/settable","can-simple-observable@2.3.0#can-simple-observable","can-simple-observable@2.3.0#log","can-stache@4.12.0#expressions/bracket","can-stache@4.12.0#expressions/call","can-stache@4.12.0#src/set-identifier","can-stache@4.12.0#expressions/helper","can-stache@4.12.0#expressions/lookup","can-stache@4.12.0#src/utils","can-view-scope@4.9.1#can-view-scope","can-view-scope@4.9.1#template-context","can-simple-map@4.3.0#can-simple-map","can-view-scope@4.9.1#compute_data","can-view-scope@4.9.1#scope-key-data","can-stache-helpers@1.2.0#can-stache-helpers","can-stache@4.12.0#src/key-observable","can-view-callbacks@4.3.1#can-view-callbacks","can-dom-mutate@1.2.1#node","can-view-nodelist@4.3.2#can-view-nodelist","can-fragment@1.2.0#can-fragment","can-child-nodes@1.2.0#can-child-nodes","can-dom-data-state@1.0.2#can-dom-data-state","can-attribute-encoder@1.1.0#can-attribute-encoder","can-attribute-observable@1.1.3#can-attribute-observable","can-attribute-observable@1.1.3#event","can-attribute-observable@1.1.3#behaviors","can-diff@1.4.2#list/list","can-attribute-observable@1.1.3#get-event-name","can-event-dom-radiochange@2.2.0#can-event-dom-radiochange","can-define@2.6.3#list/list","can-define@2.6.3#can-define","can-simple-observable@2.3.0#async/async","can-simple-observable@2.3.0#resolver/resolver","can-event-queue@1.1.0#type/type","can-string-to-any@1.2.0#can-string-to-any","can-data-types@1.2.0#maybe-boolean/maybe-boolean","can-data-types@1.2.0#maybe-date/maybe-date","can-data-types@1.2.0#maybe-number/maybe-number","can-data-types@1.2.0#maybe-string/maybe-string","can-define@2.6.3#define-helpers/define-helpers","can-define@2.6.3#ensure-meta","spectre-canjs@3.6.3#sp-toast-container/ViewModel","spectre-canjs@3.6.3#sp-toast/ViewModel","spectre-canjs@3.6.3#sp-toast-container/sp-toast-container.stache!steal-stache@4.1.2#steal-stache","can-stache@4.12.0#src/mustache_core","can-view-live@4.2.2#can-view-live","can-view-live@4.2.2#lib/core","can-view-parser@4.1.0#can-view-parser","can-view-live@4.2.2#lib/attr","can-view-live@4.2.2#lib/attrs","can-view-live@4.2.2#lib/html","can-view-live@4.2.2#lib/list","can-view-live@4.2.2#lib/set-observable","can-diff@1.4.2#patcher/patcher","can-view-live@4.2.2#lib/text","can-view-import@4.2.0#can-view-import","can-import-module@1.2.0#can-import-module","spectre-canjs@3.6.3#sp-toast/sp-toast.stache!steal-stache@4.1.2#steal-stache","spectre-canjs@3.6.3#sp-toast/sp-toast.less!steal-less@1.3.1#less","can-stache@4.12.0#src/html_section","can-view-target@4.1.0#can-view-target","can-stache@4.12.0#src/text_section","can-stache@4.12.0#helpers/core","can-globals@1.2.0#base-url/base-url","can-join-uris@1.2.0#can-join-uris","can-parse-uri@1.2.0#can-parse-uri","can-stache@4.12.0#helpers/-debugger","can-stache@4.12.0#src/truthy-observable","can-dom-data@1.0.1#can-dom-data","can-stache@4.12.0#helpers/-for-of","can-stache@4.12.0#helpers/-let","can-stache@4.12.0#helpers/converter","can-stache-ast@1.0.0#can-stache-ast","can-stache-ast@1.0.0#controls"],function(e,a,c){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var s=n(e),t=n(a),o=n(c),r=new s.default({heading:"Title Here",details:"Details",autoHide:5e3,severity:"info",dismissable:!0,add:function(){(0,o.default)("sp-toast-container").addToast({heading:this.heading,body:this.body,severity:this.severity,autoHide:this.autoHide,dismissable:this.dismissable})}}),l=t.default.from("demo-html");document.body.appendChild(l(r))});
//# sourceMappingURL=toast.js.map