webpackJsonp([9,53,56],{"3jMH":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("JAv/"),o={data:function(){return{ruleForm:{hostname:"",an:"",sn:"",ip:"",gateway:"",have_net:!1,idc:"",asset_type:"",status:"",os:"",cpu:"",memory:"",disk:"",desc:""},rules:{hostname:[{required:!0,message:"请输入一个正确的内容",trigger:"blur"}],ip:[{required:!0,message:"请输入一个正确的内容",trigger:"blur"}],idc:[{required:!0,message:"请输入一个正确的内容",trigger:"change"}],asset_type:[{required:!0,message:"请输入一个正确的内容",trigger:"blur"}],status:[{required:!0,message:"请输入一个正确的内容",trigger:"blur"}]},ASSET_STATUS:[{key:"used",name:"使用中"},{key:"noused",name:"未使用"},{key:"broken",name:"故障"},{key:"trash",name:"废弃"}],ASSET_TYPE:[{key:"physical",name:"物理机"},{key:"virtual",name:"虚拟机"},{key:"container",name:"容器"},{key:"network",name:"网络设备"},{key:"other",name:"其他设备"}],idcs:[]}},created:function(){this.getIdcs()},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.$emit("formdata",t.ruleForm),t.ruleForm={hostname:"",ip:"",other_ip:"",idc:"",asset_type:"",status:"",os:"",cpu:"",memory:"",disk:"",desc:""}})},resetForm:function(e){this.$refs[e].resetFields()},getIdcs:function(){var e=this;Object(r.d)().then(function(t){e.idcs=t.data})}}},l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"主机名",prop:"hostname"}},[a("el-input",{model:{value:e.ruleForm.hostname,callback:function(t){e.$set(e.ruleForm,"hostname",t)},expression:"ruleForm.hostname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"资产编号",prop:"an"}},[a("el-input",{model:{value:e.ruleForm.an,callback:function(t){e.$set(e.ruleForm,"an",t)},expression:"ruleForm.an"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"序列号",prop:"sn"}},[a("el-input",{model:{value:e.ruleForm.sn,callback:function(t){e.$set(e.ruleForm,"sn",t)},expression:"ruleForm.sn"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"主机ip",prop:"ip"}},[a("el-input",{model:{value:e.ruleForm.ip,callback:function(t){e.$set(e.ruleForm,"ip",t)},expression:"ruleForm.ip"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"网关",prop:"gateway"}},[a("el-input",{model:{value:e.ruleForm.gateway,callback:function(t){e.$set(e.ruleForm,"gateway",t)},expression:"ruleForm.gateway"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"外网",prop:"have_net"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.ruleForm.have_net,callback:function(t){e.$set(e.ruleForm,"have_net",t)},expression:"ruleForm.have_net"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"机房",prop:"idc"}},[a("el-select",{attrs:{placeholder:"请选择机房"},model:{value:e.ruleForm.idc,callback:function(t){e.$set(e.ruleForm,"idc",t)},expression:"ruleForm.idc"}},e._l(e.idcs,function(e){return a("el-option",{key:e.name,attrs:{value:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"设备类型",prop:"asset_type"}},[a("el-select",{attrs:{placeholder:"请选择设备类型"},model:{value:e.ruleForm.asset_type,callback:function(t){e.$set(e.ruleForm,"asset_type",t)},expression:"ruleForm.asset_type"}},e._l(e.ASSET_TYPE,function(e){return a("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"主机状态",prop:"status"}},[a("el-select",{attrs:{placeholder:"请选择主机状态"},model:{value:e.ruleForm.status,callback:function(t){e.$set(e.ruleForm,"status",t)},expression:"ruleForm.status"}},e._l(e.ASSET_STATUS,function(e){return a("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"系统",prop:"os"}},[a("el-input",{model:{value:e.ruleForm.os,callback:function(t){e.$set(e.ruleForm,"os",t)},expression:"ruleForm.os"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"cpu信息",prop:"cpu"}},[a("el-input",{model:{value:e.ruleForm.cpu,callback:function(t){e.$set(e.ruleForm,"cpu",t)},expression:"ruleForm.cpu"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"内存信息",prop:"memory"}},[a("el-input",{model:{value:e.ruleForm.memory,callback:function(t){e.$set(e.ruleForm,"memory",t)},expression:"ruleForm.memory"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"磁盘信息",prop:"disk"}},[a("el-input",{model:{value:e.ruleForm.disk,callback:function(t){e.$set(e.ruleForm,"disk",t)},expression:"ruleForm.disk"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"desc"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.ruleForm.desc,callback:function(t){e.$set(e.ruleForm,"desc",t)},expression:"ruleForm.desc"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("立即创建")]),e._v(" "),a("el-button",{on:{click:function(t){e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)},s=[],n={render:l,staticRenderFns:s},i=n,u=a("VU/8"),c=u(o,i,!1,null,null,null);t.default=c.exports},A6cu:function(e,t,a){var r=a("JmYY");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("84b8ce30",r,!0)},EeTk:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("JAv/"),o={props:["rowdata"],data:function(){return{rules:{hostname:[{required:!0,message:"请输入一个正确的内容",trigger:"blur"}],ip:[{required:!0,message:"请输入一个正确的内容",trigger:"blur"}],idc:[{required:!0,message:"请输入一个正确的内容",trigger:"change"}],asset_type:[{required:!0,message:"请输入一个正确的内容",trigger:"blur"}],status:[{required:!0,message:"请输入一个正确的内容",trigger:"blur"}]},ASSET_STATUS:[{key:"used",name:"使用中"},{key:"noused",name:"未使用"},{key:"broken",name:"故障"},{key:"trash",name:"废弃"}],ASSET_TYPE:[{key:"physical",name:"物理机"},{key:"virtual",name:"虚拟机"},{key:"container",name:"容器"},{key:"network",name:"网络设备"},{key:"other",name:"其他设备"}],idcs:[]}},created:function(){this.getIdcs()},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.$emit("formdata",t.rowdata)})},getIdcs:function(){var e=this;Object(r.d)().then(function(t){e.idcs=t.data})}}},l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"ruleForm",attrs:{model:e.rowdata,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"主机名",prop:"hostname"}},[a("el-input",{model:{value:e.rowdata.hostname,callback:function(t){e.$set(e.rowdata,"hostname",t)},expression:"rowdata.hostname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"资产编号",prop:"an"}},[a("el-input",{model:{value:e.rowdata.an,callback:function(t){e.$set(e.rowdata,"an",t)},expression:"rowdata.an"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"序列号",prop:"sn"}},[a("el-input",{model:{value:e.rowdata.sn,callback:function(t){e.$set(e.rowdata,"sn",t)},expression:"rowdata.sn"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"主机ip",prop:"ip"}},[a("el-input",{model:{value:e.rowdata.ip,callback:function(t){e.$set(e.rowdata,"ip",t)},expression:"rowdata.ip"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"网关",prop:"gateway"}},[a("el-input",{model:{value:e.rowdata.gateway,callback:function(t){e.$set(e.rowdata,"gateway",t)},expression:"rowdata.gateway"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"外网",prop:"have_net"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.rowdata.have_net,callback:function(t){e.$set(e.rowdata,"have_net",t)},expression:"rowdata.have_net"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"机房",prop:"idc"}},[a("el-select",{attrs:{placeholder:"请选择机房"},model:{value:e.rowdata.idc,callback:function(t){e.$set(e.rowdata,"idc",t)},expression:"rowdata.idc"}},e._l(e.idcs,function(e){return a("el-option",{key:e.name,attrs:{value:e.name}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"设备类型",prop:"asset_type"}},[a("el-select",{attrs:{placeholder:"请选择设备类型"},model:{value:e.rowdata.asset_type,callback:function(t){e.$set(e.rowdata,"asset_type",t)},expression:"rowdata.asset_type"}},e._l(e.ASSET_TYPE,function(e){return a("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"主机状态",prop:"status"}},[a("el-select",{attrs:{placeholder:"请选择主机状态"},model:{value:e.rowdata.status,callback:function(t){e.$set(e.rowdata,"status",t)},expression:"rowdata.status"}},e._l(e.ASSET_STATUS,function(e){return a("el-option",{key:e.key,attrs:{label:e.name,value:e.key}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"系统",prop:"os"}},[a("el-input",{model:{value:e.rowdata.os,callback:function(t){e.$set(e.rowdata,"os",t)},expression:"rowdata.os"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"cpu信息",prop:"cpu"}},[a("el-input",{model:{value:e.rowdata.cpu,callback:function(t){e.$set(e.rowdata,"cpu",t)},expression:"rowdata.cpu"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"内存信息",prop:"memory"}},[a("el-input",{model:{value:e.rowdata.memory,callback:function(t){e.$set(e.rowdata,"memory",t)},expression:"rowdata.memory"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"磁盘信息",prop:"disk"}},[a("el-input",{model:{value:e.rowdata.disk,callback:function(t){e.$set(e.rowdata,"disk",t)},expression:"rowdata.disk"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"描述",prop:"desc"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:e.rowdata.desc,callback:function(t){e.$set(e.rowdata,"desc",t)},expression:"rowdata.desc"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("立即更新")])],1)],1)},s=[],n={render:l,staticRenderFns:s},i=n,u=a("VU/8"),c=u(o,i,!1,null,null,null);t.default=c.exports},JmYY:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,".table-expand{font-size:0}.table-expand .el-form-item{margin-right:0;margin-bottom:0;width:50%}.table-expand .el-form-item .el-form-item__label{width:90px;color:#99a9bf}",""])},QT8Y:function(e,t,a){"use strict";function r(e){a("A6cu")}Object.defineProperty(t,"__esModule",{value:!0});var o=a("JAv/"),l=a("wLjJ"),s=a("QmSG"),n=a("3jMH"),i=a("EeTk"),u={components:{addObj:n.default,editObj:i.default},data:function(){return{tableData:[],tabletotal:0,searchdata:"",currentPage:1,listQuery:{limit:s.LIMIT,offset:"",search:"",status:"used"},pagesize:s.pagesize,pageformat:s.pageformat,addForm:!1,editForm:!1,viewForm:!1,groupName:"",rowdata:{},ASSET_TYPE:{physical:{type:"物理机",color:"#c0dbff"},virtual:{type:"虚拟机",color:"#19ddff"},container:{type:"容器",color:"#f06292"},network:{type:"网络设备",color:"#e6d664"},other:{type:"其他设备",color:"#838383"}},ASSET_STATUS:{used:{status:"使用中",type:"primary"},noused:{status:"未使用",type:"info"},broken:{status:"故障",type:"danger"},trash:{status:"废弃",type:"warning"}},autocreate:!1,autoupdate:!1}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;Object(o.c)(this.listQuery).then(function(t){e.tableData=t.data.results,e.tabletotal=t.data.count})},addGroupSubmit:function(e){var t=this;Object(o.e)(e).then(function(e){t.$message({message:"恭喜你，添加成功",type:"success"}),t.fetchData(),t.addForm=!1}).catch(function(e){t.$message.error("添加失败"),console.log(e)})},editGroupSubmit:function(e){var t=this;Object(o.g)(this.rowdata.id,e).then(function(e){t.$message({message:"恭喜你，更新成功",type:"success"}),t.fetchData(),t.editForm=!1}).catch(function(e){t.$message.error("更新失败"),console.log(e)})},deleteGroup:function(e){var t=this;Object(o.a)(e).then(function(e){t.$message({message:"恭喜你，删除成功",type:"success"}),t.fetchData()}).catch(function(e){t.$message.error("删除失败"),console.log(e)})},closeEditForm:function(){this.fetchData()},handleEdit:function(e){this.editForm=!0,this.rowdata=e},searchClick:function(){this.listQuery.search=this.searchdata,this.fetchData()},handleSizeChange:function(e){this.listQuery.limit=e,this.fetchData()},handleCurrentChange:function(e){this.listQuery.offset=(e-1)*s.LIMIT,this.fetchData()},changeStatus:function(e){this.listQuery.status=e,"noused"===e&&(this.havenoused=!0),this.fetchData()},getHostFromSalt:function(e){var t=this;"create"===e?(this.autocreate=!0,Object(l.e)(e).then(function(e){t.autocreate=!1,t.listQuery.status="noused",t.fetchData()}).catch(function(e){t.autocreate=!1,t.listQuery.status="noused",t.fetchData(),console.log(e)})):(this.autoupdate=!0,Object(l.e)(e).then(function(e){t.autoupdate=!1,t.fetchData()}).catch(function(e){t.autoupdate=!1,t.fetchData(),console.log(e)}))}}},c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[a("el-card",[a("div",{staticClass:"head-lavel"},[a("div",{staticClass:"table-button"},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){e.addForm=!0}}},[e._v("新建")]),e._v(" "),a("el-button-group",[a("el-button",{attrs:{type:"primary",plain:"",size:"mini",loading:e.autocreate},on:{click:function(t){e.getHostFromSalt("create")}}},[e._v("自动获取\n          ")]),e._v(" "),a("el-button",{attrs:{type:"success",plain:"",size:"mini",loading:e.autoupdate},on:{click:function(t){e.getHostFromSalt("update")}}},[e._v("自动更新\n          ")])],1),e._v(" "),a("el-radio-group",{staticStyle:{"margin-left":"20px"},on:{change:e.changeStatus},model:{value:e.listQuery.status,callback:function(t){e.$set(e.listQuery,"status",t)},expression:"listQuery.status"}},[a("el-radio",{attrs:{label:"noused"}},[e._v("未使用")]),e._v(" "),a("el-radio",{attrs:{label:"used"}},[e._v("使用中")]),e._v(" "),a("el-radio",{attrs:{label:"broken"}},[e._v("故障")]),e._v(" "),a("el-radio",{attrs:{label:"trash"}},[e._v("报废")])],1)],1),e._v(" "),a("div",{staticClass:"table-search"},[a("el-input",{attrs:{placeholder:"主机名或ip"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.searchClick(t)}},model:{value:e.searchdata,callback:function(t){e.searchdata=t},expression:"searchdata"}},[a("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"suffix"},on:{click:e.searchClick},slot:"suffix"})])],1)]),e._v(" "),a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"网关",prop:"gateway"}},[a("span",[e._v(e._s(t.row.gateway))])]),e._v(" "),a("el-form-item",{attrs:{label:"系统",prop:"os"}},[a("span",[e._v(e._s(t.row.os))])]),e._v(" "),a("el-form-item",{attrs:{label:"cpu信息",prop:"cpu"}},[a("span",[e._v(e._s(t.row.cpu))])]),e._v(" "),a("el-form-item",{attrs:{label:"内存信息",prop:"memory"}},[a("span",[e._v(e._s(t.row.memory))])]),e._v(" "),a("el-form-item",{attrs:{label:"磁盘信息",prop:"disk"}},e._l(t.row.disk.split("|"),function(t){return a("a",{key:t.id,staticStyle:{"margin-right":"5px"},attrs:{size:"mini"}},[a("el-tag",{attrs:{size:"mini"}},[e._v(e._s(t.split(" ")[0]))]),e._v(" "),a("span",[e._v(e._s(t.split(" ")[1]))])],1)})),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"desc"}},[a("span",[e._v(e._s(t.row.desc))])])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"hostname",label:"主机名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"an",label:"资产编号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ip",label:"ip"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center"},attrs:{slot:"reference"},slot:"reference"},e._l(t.row.ip.split("|"),function(t){return a("el-tag",{key:t.id,staticStyle:{"margin-right":"3px"},attrs:{size:"mini"}},[e._v("\n                "+e._s(t)+"\n              ")])}))]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"idc",label:"机房"}}),e._v(" "),a("el-table-column",{attrs:{prop:"asset_type",label:"类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center"},attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{staticStyle:{color:"#000"},attrs:{color:e.ASSET_TYPE[t.row.asset_type].color}},[e._v("\n                "+e._s(e.ASSET_TYPE[t.row.asset_type].type)+"\n              ")])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"name-wrapper",staticStyle:{"text-align":"center"},attrs:{slot:"reference"},slot:"reference"},[a("el-tag",{attrs:{type:e.ASSET_STATUS[t.row.status].type}},[e._v("\n                "+e._s(e.ASSET_STATUS[t.row.status].status)+"\n              ")])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(a){e.handleEdit(t.row)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){e.deleteGroup(t.row.id)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"table-footer"},[a("div",{staticClass:"table-button"}),e._v(" "),a("div",{staticClass:"table-pagination"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":e.pagesize,"page-size":e.listQuery.limit,layout:e.pageformat,total:e.tabletotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)])]),e._v(" "),a("el-dialog",{attrs:{visible:e.addForm},on:{"update:visible":function(t){e.addForm=t}}},[a("add-obj",{on:{formdata:e.addGroupSubmit}})],1),e._v(" "),a("el-dialog",{attrs:{visible:e.editForm},on:{"update:visible":function(t){e.editForm=t},close:e.closeEditForm}},[a("edit-obj",{attrs:{rowdata:e.rowdata},on:{formdata:e.editGroupSubmit}})],1)],1)},m=[],p={render:c,staticRenderFns:m},d=p,f=a("VU/8"),v=r,b=f(u,d,!1,v,null,null);t.default=b.exports}});