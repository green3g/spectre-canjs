define("spectre-canjs@3.4.0#sp-property-table/demo/templates/name.stache!steal-stache@4.1.2#steal-stache",["module","can-stache","can-stache/src/mustache_core","can-view-import@4.2.0#can-view-import","can-stache-bindings@4.3.3#can-stache-bindings"],function(e,t,a){var s=t("sp-property-table/demo/templates/name.stache",[{tokenType:"chars",args:["This is a formatted property. We can also show and format other properties, like favorite food.",1]},{tokenType:"start",args:["br",!0,1]},{tokenType:"end",args:["br",!0,1]},{tokenType:"chars",args:["\r\n",1]},{tokenType:"start",args:["strong",!1,2]},{tokenType:"end",args:["strong",!1,2]},{tokenType:"special",args:["../object[field.name]",2]},{tokenType:"chars",args:[" likes ",2]},{tokenType:"close",args:["strong",2]},{tokenType:"chars",args:[" ",2]},{tokenType:"start",args:["mark",!1,2]},{tokenType:"end",args:["mark",!1,2]},{tokenType:"start",args:["i",!1,2]},{tokenType:"attrStart",args:["class",2]},{tokenType:"attrValue",args:["fa fa-cutlery",2]},{tokenType:"attrEnd",args:["class",2]},{tokenType:"end",args:["i",!1,2]},{tokenType:"close",args:["i",2]},{tokenType:"chars",args:[" \r\n",2]},{tokenType:"special",args:["../object.favorite_food",3]},{tokenType:"close",args:["mark",3]},{tokenType:"chars",args:["\r\n",3]},{tokenType:"done",args:[4]}]);return function(t,a,n){var r=Object.assign({},a);return r.helpers?r.helpers=Object.assign({module:e},r.helpers):r.module=e,s(t,r,n)}}),define("spectre-canjs@3.4.0#sp-property-table/demo/templates/date.stache!steal-stache@4.1.2#steal-stache",["module","can-stache","can-stache/src/mustache_core","can-view-import@4.2.0#can-view-import","can-stache-bindings@4.3.3#can-stache-bindings"],function(e,t,a){var s=t("sp-property-table/demo/templates/date.stache",[{tokenType:"special",args:["field.incrementMonth(../object[field.name].getUTCMonth())",1]},{tokenType:"chars",args:["/",1]},{tokenType:"special",args:["../object[field.name].getUTCDate()",1]},{tokenType:"chars",args:["/",1]},{tokenType:"special",args:["../object[field.name].getUTCFullYear()",1]},{tokenType:"done",args:[1]}]);return function(t,a,n){var r=Object.assign({},a);return r.helpers?r.helpers=Object.assign({module:e},r.helpers):r.module=e,s(t,r,n)}}),define("spectre-canjs@3.4.0#sp-property-table/demo/propertyTable",["can-stache@4.10.3#can-stache","spectre-canjs@3.4.0#sp-property-table/demo/templates/name.stache!steal-stache@4.1.2#steal-stache","spectre-canjs@3.4.0#sp-property-table/demo/templates/date.stache!steal-stache@4.1.2#steal-stache","can-define@2.5.4#map/map","spectre-canjs@3.4.0#sp-property-table/sp-property-table","spectre-canjs@3.4.0#sp-property-table/sp-property-table.stache!steal-stache@4.1.2#steal-stache","can-component@4.3.0#can-component","spectre-canjs@3.4.0#sp-property-table/ViewModel","spectre-canjs@3.4.0#util/field/base/FieldIteratorMap","spectre-canjs@3.4.0#util/field/parseFieldArray/parseFieldArray","spectre-canjs@3.4.0#util/field/Field","spectre-canjs@3.4.0#util/string/string","can-define@2.5.4#list/list","spectre-canjs@3.4.0#util/field/fieldComponents","spectre-canjs@3.4.0#util/field/mapToFields/mapToFields"],function(e,t,a,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=n(e),p=n(t),o=n(a),c=n(s),l=r.default.from("demo-html"),i=new c.default({fields:[{name:"name",alias:"User name",displayComponent:p.default},{name:"birthday",incrementMonth:function(e){return e+1},displayComponent:o.default},"favorite_food"],myData:{name:"James McMannus",birthday:new Date,favorite_food:"Pizza"}});document.body.appendChild(l(i)),window.DEMO_SOURCE="\nimport 'spectre-canjs/sp-property-table/sp-property-table';\nimport stache from 'can-stache';\nimport prop1Template from './templates/prop1.stache';\n\nvar render = stache.from('demo-html');\n\nvar viewModel = {\n    fields: [{\n        //fields can be specified using a detailed object\n        name: 'prop_1',\n        alias: 'Property 1',\n\n        // custom templates can customize the look of the value\n        displayComponent: prop1Template\n    },\n        //or a simple field name\n        'another_property_value', 'etc_or_misc'\n    ],\n    data: {\n        prop_1: 'This is a property',\n        another_property_value: 'Value here',\n        etc_or_misc: 'This is a value'\n    }\n};\n\ndocument.body.appendChild(render(viewModel));\n"});
//# sourceMappingURL=propertyTable.js.map