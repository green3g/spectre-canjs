define("spectre-canjs@4.1.0#sp-tab-container/demo/nav",["can-stache@4.15.12#can-stache","can-define@2.7.5#map/map","axios@0.18.0#index","spectre-canjs@4.1.0#sp-tab-container/sp-tab-container","spectre-canjs@4.1.0#sp-tab-page/sp-tab-page","can-component@4.4.10#can-component","can-component@4.4.10#control/control","can-control@4.4.1#can-control","can-construct@3.5.3#can-construct","can-reflect@1.17.7#can-reflect","can-reflect@1.17.7#reflections/call/call","can-symbol@1.6.3#can-symbol","can-namespace@1.0.0#can-namespace","can-reflect@1.17.7#reflections/type/type","can-reflect@1.17.7#reflections/helpers","can-reflect@1.17.7#reflections/get-set/get-set","can-reflect@1.17.7#reflections/observe/observe","can-reflect@1.17.7#reflections/shape/shape","can-reflect@1.17.7#reflections/shape/schema/schema","can-reflect@1.17.7#reflections/get-name/get-name","can-reflect@1.17.7#types/map","can-reflect@1.17.7#types/set","can-log@1.0.0#dev/dev","can-log@1.0.0#can-log","can-string@1.0.0#can-string","can-assign@1.3.1#can-assign","can-stache-key@1.4.0#can-stache-key","can-observation-recorder@1.3.0#can-observation-recorder","can-reflect-promise@2.2.0#can-reflect-promise","can-queues@1.2.1#can-queues","can-queues@1.2.1#queue","can-queues@1.2.1#queue-state","can-queues@1.2.1#priority-queue","can-queues@1.2.1#completion-queue","can-key-tree@1.2.0#can-key-tree","can-observation@4.1.1#can-observation","can-event-queue@1.1.4#value/value","can-define-lazy-value@1.1.0#define-lazy-value","can-event-queue@1.1.4#dependency-record/merge","can-observation@4.1.1#recorder-dependency-helpers","can-observation@4.1.1#temporarily-bind","can-event-queue@1.1.4#map/map","can-dom-events@1.3.3#can-dom-events","can-dom-events@1.3.3#helpers/util","can-globals@1.2.0#document/document","can-globals@1.2.0#global/global","can-globals@1.2.0#can-globals-instance","can-globals@1.2.0#can-globals-proto","can-globals@1.2.0#is-browser-window/is-browser-window","can-globals@1.2.0#is-node/is-node","can-dom-events@1.3.3#helpers/make-event-registry","can-dom-events@1.3.3#helpers/-make-delegate-event-tree","can-key@1.2.0#get/get","can-key@1.2.0#utils","can-dom-mutate@1.3.6#can-dom-mutate","can-globals@1.2.0#can-globals","can-globals@1.2.0#location/location","can-globals@1.2.0#mutation-observer/mutation-observer","can-globals@1.2.0#custom-elements/custom-elements","can-dom-mutate@1.3.6#-util","can-bind@1.3.0#can-bind","can-reflect-dependencies@1.1.1#can-reflect-dependencies","can-reflect-dependencies@1.1.1#src/add-mutated-by","can-reflect-dependencies@1.1.1#src/delete-mutated-by","can-reflect-dependencies@1.1.1#src/get-dependency-data-of","can-reflect-dependencies@1.1.1#src/is-function","can-stache-bindings@4.8.0#can-stache-bindings","can-stache@4.15.12#src/expression","can-stache@4.15.12#expressions/arg","can-stache@4.15.12#expressions/literal","can-stache@4.15.12#expressions/hashes","can-stache@4.15.12#src/expression-helpers","can-view-scope@4.13.0#make-compute-like","can-single-reference@1.2.0#can-single-reference","can-cid@1.3.0#can-cid","can-simple-observable@2.4.1#setter/setter","can-simple-observable@2.4.1#settable/settable","can-simple-observable@2.4.1#can-simple-observable","can-simple-observable@2.4.1#log","can-stache@4.15.12#expressions/bracket","can-stache@4.15.12#expressions/call","can-stache@4.15.12#src/set-identifier","can-view-scope@4.13.0#can-view-scope","can-view-scope@4.13.0#template-context","can-simple-map@4.3.0#can-simple-map","can-view-scope@4.13.0#compute_data","can-view-scope@4.13.0#scope-key-data","can-stache-helpers@1.2.0#can-stache-helpers","can-stache@4.15.12#expressions/helper","can-stache@4.15.12#expressions/lookup","can-stache@4.15.12#src/utils","can-stache@4.15.12#src/key-observable","can-view-callbacks@4.3.2#can-view-callbacks","can-dom-mutate@1.3.6#node","can-dom-mutate@1.3.6#node/node","can-view-nodelist@4.3.2#can-view-nodelist","can-fragment@1.3.0#can-fragment","can-child-nodes@1.2.0#can-child-nodes","can-view-model@4.0.1#can-view-model","can-dom-data-state@1.0.5#can-dom-data-state","can-attribute-encoder@1.1.2#can-attribute-encoder","can-attribute-observable@1.2.1#can-attribute-observable","can-attribute-observable@1.2.1#event","can-attribute-observable@1.2.1#behaviors","can-diff@1.4.4#list/list","can-attribute-observable@1.2.1#get-event-name","can-event-dom-radiochange@2.2.0#can-event-dom-radiochange","can-define@2.7.5#list/list","can-define@2.7.5#can-define","can-simple-observable@2.4.1#async/async","can-simple-observable@2.4.1#resolver/resolver","can-event-queue@1.1.4#type/type","can-string-to-any@1.2.0#can-string-to-any","can-data-types@1.2.0#maybe-boolean/maybe-boolean","can-data-types@1.2.0#maybe-date/maybe-date","can-data-types@1.2.0#maybe-number/maybe-number","can-data-types@1.2.0#maybe-string/maybe-string","can-define@2.7.5#define-helpers/define-helpers","can-define@2.7.5#ensure-meta","spectre-canjs@4.1.0#sp-tab-container/sp-tab-container.stache!steal-stache@4.1.2#steal-stache","can-stache@4.15.12#src/mustache_core","can-view-live@4.2.7#can-view-live","can-view-live@4.2.7#lib/core","can-view-parser@4.1.2#can-view-parser","can-view-live@4.2.7#lib/attr","can-view-live@4.2.7#lib/attrs","can-view-live@4.2.7#lib/html","can-view-live@4.2.7#lib/list","can-view-live@4.2.7#lib/set-observable","can-diff@1.4.4#patcher/patcher","can-view-live@4.2.7#lib/text","can-view-import@4.2.0#can-view-import","can-import-module@1.2.0#can-import-module","spectre-canjs@4.1.0#sp-tab-container/sp-tab-container.less!steal-less@1.3.4#less","spectre-canjs@4.1.0#sp-tab-container/ViewModel","spectre-canjs@4.1.0#sp-tab-page/ViewModel","spectre-canjs@4.1.0#sp-tab-page/sp-tab-page.stache!steal-stache@4.1.2#steal-stache","can-stache@4.15.12#src/html_section","can-view-target@4.1.2#can-view-target","can-stache@4.15.12#src/text_section","can-stache@4.15.12#helpers/core","can-globals@1.2.0#base-url/base-url","can-join-uris@1.2.0#can-join-uris","can-parse-uri@1.2.0#can-parse-uri","can-stache@4.15.12#helpers/-debugger","can-stache@4.15.12#src/truthy-observable","can-stache@4.15.12#helpers/converter","can-dom-data@1.0.1#can-dom-data","can-stache@4.15.12#helpers/-for-of","can-stache@4.15.12#helpers/-let","can-stache-ast@1.1.0#can-stache-ast","can-stache-ast@1.1.0#controls","axios@0.18.0#lib/axios","axios@0.18.0#lib/utils","axios@0.18.0#lib/helpers/bind","is-buffer@1.1.6#index","axios@0.18.0#lib/core/Axios","axios@0.18.0#lib/defaults","axios@0.18.0#lib/helpers/normalizeHeaderName","axios@0.18.0#lib/adapters/xhr","axios@0.18.0#lib/core/settle","axios@0.18.0#lib/core/createError","axios@0.18.0#lib/core/enhanceError","axios@0.18.0#lib/helpers/buildURL","axios@0.18.0#lib/helpers/parseHeaders","axios@0.18.0#lib/helpers/isURLSameOrigin","axios@0.18.0#lib/helpers/btoa","axios@0.18.0#lib/helpers/cookies","axios@0.18.0#lib/core/InterceptorManager","axios@0.18.0#lib/core/dispatchRequest","axios@0.18.0#lib/core/transformData","axios@0.18.0#lib/cancel/isCancel","axios@0.18.0#lib/helpers/isAbsoluteURL","axios@0.18.0#lib/helpers/combineURLs","axios@0.18.0#lib/cancel/Cancel","axios@0.18.0#lib/cancel/CancelToken","axios@0.18.0#lib/helpers/spread"],function(e,a,c){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var s=n(e),t=n(a),r=n(c),i=(0,s.default)(document.getElementById("demo-html").innerHTML),l=new t.default({people:r.default.get("http://jsonplaceholder.typicode.com/users").then(function(e){return e.data}),pages:[{label:"List"},{label:"Create",active:!0},{label:"Other Options"}]});document.body.appendChild(i(l))});
//# sourceMappingURL=nav.js.map