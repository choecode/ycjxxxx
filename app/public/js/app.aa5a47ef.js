(function(){"use strict";var t={2575:function(t,e,r){var o=r(6369),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("el-input",{attrs:{type:"text",placeholder:"请输入身份证"},model:{value:t.cardNo,callback:function(e){t.cardNo=e},expression:"cardNo"}}),e("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.doLogin}},[t._v("获取成绩")]),e("el-button",{attrs:{type:"danger",loading:t.loading},on:{click:t.deleteThat}},[t._v("删除记录")]),t._l(t.historyList,(function(r){return e("el-tag",{key:r,on:{click:function(e){t.cardNo=r}}},[t._v(" "+t._s(r)+" ")])})),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.result}},[e("el-table-column",{attrs:{prop:"subjectName",label:"科目名称"}}),e("el-table-column",{attrs:{prop:"outlineTime",label:"大纲学时"}}),e("el-table-column",{attrs:{prop:"studyTime",label:"培训学时"}}),e("el-table-column",{attrs:{prop:"gatherTime",label:"有效学时"}}),e("el-table-column",{attrs:{prop:"mileage",label:"培训公里数"}}),e("el-table-column",{attrs:{prop:"examDate",label:"上报时间",formatter:t.formate}}),e("el-table-column",{attrs:{prop:"approveDate",label:"审核时间",formatter:t.formate}}),e("el-table-column",{attrs:{prop:"leastStudyTime",label:"最后学习时间"}})],1)],2)},n=[],a=r(6265),l=r.n(a),s={name:"App",data(){return{cardNo:"",loading:!1,result:[],historyList:[],test:[]}},created(){var t=localStorage.getItem("list");if(t){var e=JSON.parse(t);Array.isArray(e)?this.historyList=JSON.parse(JSON.stringify(e)):this.historyList=[]}else this.historyList=[];console.log(this.historyList)},methods:{getItem(t){this.cardNo=t},formate(t,e,r,o){return console.log(t,e,r,o),new Date(r).toLocaleString()},deleteThat(){if(this.cardNo){var t=this.historyList.filter((t=>t!==this.cardNo));localStorage.setItem("list",JSON.stringify(t)),this.historyList=t,alert("删除成功"),this.cardNo="",this.result=[]}else alert("身份证号码不能为空")},doLogin(){this.loading=!0,this.cardNo?l().post("/ycjx/login",{cardNo:this.cardNo}).then((t=>{if(console.log("response.data",t.data),0==t.data.code){this.loading=!1,this.result=t.data.data,this.historyList.push(this.cardNo);var e=this.historyList.filter(((t,e)=>this.historyList.indexOf(t)===e));localStorage.setItem("list",JSON.stringify(e)),this.historyList=e}else alert(t.data.msg||"出错了"),this.loading=!1})).catch((t=>{this.loading=!1,alert("出错了"),console.log(t)})):alert("身份证号码不能为空")}}},u=s,c=r(1001),d=(0,c.Z)(u,i,n,!1,null,null,null),f=d.exports,h=r(8499),p=r.n(h);o["default"].config.productionTip=!1,o["default"].use(p()),new o["default"]({render:t=>t(f)}).$mount("#app")}},e={};function r(o){var i=e[o];if(void 0!==i)return i.exports;var n=e[o]={exports:{}};return t[o](n,n.exports,r),n.exports}r.m=t,function(){var t=[];r.O=function(e,o,i,n){if(!o){var a=1/0;for(c=0;c<t.length;c++){o=t[c][0],i=t[c][1],n=t[c][2];for(var l=!0,s=0;s<o.length;s++)(!1&n||a>=n)&&Object.keys(r.O).every((function(t){return r.O[t](o[s])}))?o.splice(s--,1):(l=!1,n<a&&(a=n));if(l){t.splice(c--,1);var u=i();void 0!==u&&(e=u)}}return e}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[o,i,n]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,n,a=o[0],l=o[1],s=o[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(i in l)r.o(l,i)&&(r.m[i]=l[i]);if(s)var c=s(r)}for(e&&e(o);u<a.length;u++)n=a[u],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(c)},o=self["webpackChunkhello_world"]=self["webpackChunkhello_world"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(2575)}));o=r.O(o)})();
//# sourceMappingURL=app.aa5a47ef.js.map