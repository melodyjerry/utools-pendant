(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6470a858"],{a434:function(e,t,l){"use strict";var a=l("23e7"),n=l("23cb"),i=l("a691"),r=l("50c4"),c=l("7b0b"),o=l("65f0"),s=l("8418"),d=l("1dde"),u=l("ae40"),f=d("splice"),p=u("splice",{ACCESSORS:!0,0:0,1:2}),b=Math.max,v=Math.min,w=9007199254740991,h="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!f||!p},{splice:function(e,t){var l,a,d,u,f,p,m=c(this),_=r(m.length),y=n(e,_),k=arguments.length;if(0===k?l=a=0:1===k?(l=0,a=_-y):(l=k-2,a=v(b(i(t),0),_-y)),_+l-a>w)throw TypeError(h);for(d=o(m,a),u=0;u<a;u++)f=y+u,f in m&&s(d,u,m[f]);if(d.length=a,l<a){for(u=y;u<_-a;u++)f=u+a,p=u+l,f in m?m[p]=m[f]:delete m[p];for(u=_;u>_-a+l;u--)delete m[u-1]}else if(l>a)for(u=_-a;u>y;u--)f=u+a-1,p=u+l-1,f in m?m[p]=m[f]:delete m[p];for(u=0;u<l;u++)m[u+y]=arguments[u+2];return m.length=_-a+l,d}})},ef75:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticStyle:{padding:"10px 20px"}},[l("el-row",{attrs:{type:"flex",justify:"space-between"}},[l("el-col",{attrs:{span:4}},[l("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.$router.back()}}},[e._v("返回")])],1),l("el-col",{attrs:{span:5}},[l("el-button",{attrs:{size:"mini"},on:{click:e.createDefaultLive2d}},[e._v("启动默认 live2d 窗口")])],1)],1),l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.live2d.data}},[l("el-table-column",{attrs:{label:"序号",width:"90",type:"index"}}),l("el-table-column",{attrs:{label:"live2d 模式",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return["none"===t.row.mode?l("el-tag",{attrs:{type:"info"}},[e._v("不创建")]):l("el-tag",{attrs:{type:"success"}},[e._v("创建")])]}}])}),l("el-table-column",{attrs:{label:"作者",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[l("el-tag",{attrs:{size:"medium"}},[e._v(e._s(t.row.author))])],1)]}}])}),l("el-table-column",{attrs:{label:"描述",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.desc))])]}}])}),l("el-table-column",{attrs:{label:"开关"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.live2d.data[t.$index].switch,callback:function(l){e.$set(e.live2d.data[t.$index],"switch",l)},expression:"live2d.data[scope.$index].switch"}})]}}])}),l("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{size:"mini"},on:{click:function(l){return e.deleteHandle(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1)},n=[],i=(l("a434"),l("5530")),r=l("2f62"),c=l("4bc5"),o={data:function(){return{}},computed:Object(i["a"])({},Object(r["b"])(["live2d"])),created:function(){},methods:{createDefaultLive2d:function(){window.createDefaultLive2d()},deleteHandle:function(e,t){this.live2d.data.splice(e,1),c["a"].saveALL()}}},s=o,d=l("2877"),u=Object(d["a"])(s,a,n,!1,null,null,null);t["default"]=u.exports}}]);