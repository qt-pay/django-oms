webpackJsonp([46],{NF3V:function(t,e,a){"use strict";function s(t){a("XsX4")}Object.defineProperty(e,"__esModule",{value:!0});var n=a("EMlb"),r=a("QmSG"),i=a("Zk8K"),l=a("ZTLr"),o=a("nSkA"),c={components:{},data:function(){return{tableData:[],tabletotal:0,currentPage:1,pagesize:r.pagesize,pageformat:r.pageformat,STATUS_TEXT:{0:"未审核",1:"已通过",2:"未通过",3:"已完成"},STATUS_COLOR:{0:"danger",1:"success",2:"warning",3:"info"},listQuery:{limit:r.LIMIT,offset:"",pid:"",status:"",create_user__username:"",action_user__username:"",search:"",ordering:""},updateform:{id:"",status:"1"},statusForm:!1}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;Object(n.j)(this.listQuery).then(function(e){t.tableData=e.data.results,t.tabletotal=e.data.count})},searchClick:function(){this.fetchData()},handleSizeChange:function(t){this.listQuery.limit=t,this.fetchData()},handleCurrentChange:function(t){this.listQuery.offset=(t-1)*r.LIMIT,this.fetchData()},changeStatus:function(){this.fetchData()},handleSortChange:function(t){"ascending"===t.order?this.listQuery.ordering=t.prop:"descending"===t.order?this.listQuery.ordering="-"+t.prop:this.listQuery.ordering="",this.fetchData()},deleteDemand:function(t){var e=this;Object(n.c)(t).then(function(t){e.$message({message:"恭喜你，删除成功",type:"success"}),e.fetchData()}).catch(function(t){e.$message.error("删除失败"),console.log(t)})},updateDemand:function(t){this.statusForm=!0,this.updateform.id=t},changeDemand:function(){var t=this;Object(n.q)(this.updateform.id,this.updateform).then(function(e){if(t.$message({message:"恭喜你，修改成功",type:"success"}),3===e.data.status){var a={pid:e.data.pid};if("来自第三方支付对接"===e.data.type){var s={status:2};Object(i.j)(a).then(function(t){Object(i.m)(t.data[0].id,s).then(function(t){var e={action_user:t.data.create_user,title:"【通道已完成】"+t.data.name,message:"平台: "+t.data.platform+"\n通道类型: "+t.data.type+"}"};Object(o.h)(e)})})}else if("来自工单"===e.data.type){var n={ticket_status:2};Object(l.f)(a).then(function(t){Object(l.g)(t.data[0].id,n).then(function(t){var e={action_user:t.data.create_user,title:"【工单已完成】"+t.data.name,message:"指派人: "+t.data.action_user+"\n工单地址: http://"+window.location.host+"/#/worktickets/editworkticket/"+t.data.pid};Object(o.h)(e)})})}}t.statusForm=!1,t.fetchData()}).catch(function(e){t.$message.error("修改失败"),console.log(e)})}}},u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-card",[a("div",{staticClass:"head-lavel"},[a("div",{staticClass:"table-button"},[a("router-link",{attrs:{to:"adddemand"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"}},[t._v("新建")])],1),t._v(" "),a("el-radio-group",{staticStyle:{"margin-left":"20px"},on:{change:t.changeStatus},model:{value:t.listQuery.status,callback:function(e){t.$set(t.listQuery,"status",e)},expression:"listQuery.status"}},t._l(Object.keys(t.STATUS_TEXT),function(e){return a("el-radio",{key:e,attrs:{label:e}},[t._v(t._s(t.STATUS_TEXT[e])+"\n          ")])}))],1),t._v(" "),a("div",{staticClass:"table-search"},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"编号、标题、内容或类型"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.searchClick(e)}},model:{value:t.listQuery.search,callback:function(e){t.$set(t.listQuery,"search",e)},expression:"listQuery.search"}},[a("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},on:{click:t.searchClick},slot:"suffix"})])],1)]),t._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""},on:{"sort-change":t.handleSortChange}},[a("el-table-column",{attrs:{prop:"pid",label:"编号"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("router-link",{attrs:{to:"viewdemand/"+e.row.id}},[a("a",{staticStyle:{color:"#257cff"}},[t._v(t._s(e.row.pid))])])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"类型"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{size:"mini",type:t.STATUS_COLOR[e.row.status]}},[t._v("\n                "+t._s(t.STATUS_TEXT[e.row.status])+"\n              ")]),t._v(" "),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"更改状态",placement:"top"}},[a("el-button",{staticClass:"modifychange",attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){t.updateDemand(e.row.id)}}})],1)],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"create_user",label:"需求人"}}),t._v(" "),a("el-table-column",{attrs:{prop:"create_time",label:"创建时间",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center",color:"rgb(0,0,0)"},attrs:{slot:"reference"},slot:"reference"},[a("span",[t._v(t._s(t._f("parseDate")(e.row.create_time)))])])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"end_time",label:"计划完成时间"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:"editdemand/"+e.row.id}},[a("el-button",{attrs:{type:"success",size:"small"}},[t._v("修改")])],1),t._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){t.deleteDemand(e.row.id)}}},[t._v("删除")])]}}])})],1)],1),t._v(" "),a("div",{staticClass:"table-footer"},[a("div",{staticClass:"table-button"}),t._v(" "),a("div",{staticClass:"table-pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":t.pagesize,"page-size":t.listQuery.limit,layout:t.pageformat,total:t.tabletotal},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1)])]),t._v(" "),a("el-dialog",{attrs:{visible:t.statusForm},on:{"update:visible":function(e){t.statusForm=e}}},[a("el-form",{attrs:{"label-width":"90px"}},[a("el-form-item",{attrs:{label:"更改状态",prop:"status"}},[a("el-radio-group",{model:{value:t.updateform.status,callback:function(e){t.$set(t.updateform,"status",e)},expression:"updateform.status"}},t._l(Object.keys(t.STATUS_TEXT),function(e){return a("el-radio",{key:e,attrs:{label:e}},[t._v(t._s(t.STATUS_TEXT[e])+"\n          ")])}))],1),t._v(" "),a("el-form-item",[a("el-button",{on:{click:function(e){t.statusForm=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.changeDemand}},[t._v("确 定")])],1)],1)],1)],1)},d=[],f={render:u,staticRenderFns:d},p=f,h=a("VU/8"),m=s,_=h(c,p,!1,m,null,null);e.default=_.exports},XsX4:function(t,e,a){var s=a("jPgA");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("b212c5c8",s,!0)},jPgA:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".modifychange{margin:5px}",""])}});