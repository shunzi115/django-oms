webpackJsonp([35],{"Ht+X":function(e,t,r){"use strict";function a(e){r("WofG")}Object.defineProperty(t,"__esModule",{value:!0});var o=r("mvHQ"),s=r.n(o),n=r("BO1k"),l=r.n(n),i=r("ZTLr"),c=r("EMlb"),u=r("lLHC"),p=r("nSkA"),m=r("QmSG"),d=r("0xDb"),f=r("vMJZ"),h={components:{},data:function(){return{route_path:this.$route.path.split("/"),pid:this.$route.params.pid,ruleForm:{},rules:{name:[{required:!0,message:"请输入正确的内容",trigger:"blur"}],content:[{required:!0,message:"请输入正确的内容",trigger:"blur"}]},copy:"dev",users:[],toolbars:{preview:!0,bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,ol:!0,help:!0},apiurl:m.apiUrl,uploadurl:m.uploadurl,types:[],img_file:{},count:0,enclosureData:[],enclosureForm:{project:"",create_user:localStorage.getItem("username"),file:""},commentForm:{ticket:"",create_user:localStorage.getItem("username"),content:"本工单已经被转成需求"}}},created:function(){this.fetchData(),this.fetchEnclosureData()},methods:{fetchData:function(){var e=this,t={pid:this.pid};Object(i.f)(t).then(function(t){e.ruleForm=t.data[0]})},resetForm:function(e){this.$refs[e].resetFields()},imgAdd:function(e,t){var r=this.$refs.md,a=new FormData;a.append("username",localStorage.getItem("username")),a.append("file",t),a.append("create_time",Object(d.a)(t.lastModified)),a.append("type",t.type),a.append("archive",this.route_path[1]),Object(p.i)(a).then(function(t){r.$imglst2Url([[e,t.data.file]])})},beforeAvatarUpload:function(e){var t=this,r=new FormData;return r.append("username",this.enclosureForm.create_user),r.append("file",e),r.append("create_time",Object(d.a)()),r.append("type",e.type),r.append("archive",this.route_path[1]),Object(p.i)(r).then(function(e){t.enclosureForm.file=e.data.filepath,t.enclosureForm.ticket=t.ruleForm.id,Object(i.i)(t.enclosureForm),"Created"===e.statusText&&t.$message({type:"success",message:"恭喜你，上传成功"}),t.fetchEnclosureData()}).catch(function(e){t.$message.error("上传失败"),t.$refs.upload.clearFiles(),console.log(e)}),!0},fetchEnclosureData:function(){var e=this,t={ticket__pid:this.pid};Object(i.d)(t).then(function(t){e.enclosureData=t.data})},deleteEnclosure:function(e){Object(i.a)(e),this.fetchEnclosureData()},copyWorkticket:function(){var e=this,t={pid:this.ruleForm.pid,name:this.ruleForm.name,content:this.ruleForm.content,type:"来自工单",create_user:this.ruleForm.create_user,create_time:this.ruleForm.create_time};"op"===this.copy?Object(u.m)(t).then(function(r){if(e.$message({type:"success",message:"恭喜你，转移成功"}),e.enclosureData.length>0){var a=!0,o=!1,s=void 0;try{for(var n,i=l()(e.enclosureData);!(a=(n=i.next()).done);a=!0){var c=n.value,m={project:r.data.id,file:c.file,create_user:c.create_user,create_time:c.create_time};Object(u.l)(m)}}catch(e){o=!0,s=e}finally{try{!a&&i.return&&i.return()}finally{if(o)throw s}}}var d={action_user:"admin",title:"【新需求】"+t.name,message:"需求创建人: "+t.create_user};Object(p.h)(d),e.$router.push("/opstasks/opsdemands")}).catch(function(t){var r=s()(t.response.data);e.$message.error(r)}):Object(c.u)(t).then(function(r){if(e.$message({type:"success",message:"恭喜你，转移成功"}),e.enclosureData.length>0){var a=!0,o=!1,s=void 0;try{for(var n,i=l()(e.enclosureData);!(a=(n=i.next()).done);a=!0){var u=n.value,m={project:r.data.id,file:u.file,create_user:u.create_user,create_time:u.create_time};Object(c.t)(m)}}catch(e){o=!0,s=e}finally{try{!a&&i.return&&i.return()}finally{if(o)throw s}}}var d={groups__name:"OMS_Dev_Manager"};Object(f.f)(d).then(function(e){var a=e.data,o=!0,s=!1,n=void 0;try{for(var i,c=l()(a);!(o=(i=c.next()).done);o=!0){var u=i.value,m={action_user:u.username,title:"【新需求】"+t.name,message:"操作人: "+t.create_user+"地址: http://"+window.location.host+"/#/projects/viewdemand/"+r.data.id};Object(p.h)(m)}}catch(e){s=!0,n=e}finally{try{!o&&c.return&&c.return()}finally{if(s)throw n}}}),e.$router.push("/projects/demands")}).catch(function(t){var r=s()(t.response.data);e.$message.error(r),console.log(r)}),this.commentForm.ticket=this.ruleForm.id,Object(i.h)(this.commentForm);var r={ticket_status:1};Object(i.g)(this.ruleForm.id,r)}}},v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"components-container",staticStyle:{height:"100vh"}},[r("el-card",[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"转移"}},[r("el-radio",{attrs:{label:"dev"},model:{value:e.copy,callback:function(t){e.copy=t},expression:"copy"}},[e._v("研发")])],1),e._v(" "),r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"内容",prop:"content"}},[r("mavon-editor",{ref:"md",staticStyle:{"z-index":"1"},attrs:{code_style:"monokai",toolbars:e.toolbars},on:{imgAdd:e.imgAdd},model:{value:e.ruleForm.content,callback:function(t){e.$set(e.ruleForm,"content",t)},expression:"ruleForm.content"}}),e._v(" "),r("a",{staticClass:"tips"},[e._v(" Tip：截图可以直接 Ctrl + v 粘贴到内容里面")])],1),e._v(" "),r("el-form-item",{attrs:{label:"附件"}},[r("el-upload",{ref:"upload",attrs:{action:e.uploadurl,"show-file-list":!1,"before-upload":e.beforeAvatarUpload}},[r("el-button",{attrs:{slot:"trigger",size:"mini",type:"success",plain:"",disabled:e.count>4},slot:"trigger"},[e._v("\n            上传\n          ")]),e._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[r("p",[r("a",{staticStyle:{color:"red"}},[e._v("最多只能上传5个文件")])])])],1),e._v(" "),r("hr",{staticClass:"heng"}),e._v(" "),e.enclosureData.length>0?r("div",{staticClass:"ticketenclosure"},[r("ul",e._l(e.enclosureData,function(t){return t.file?r("li",{key:t.id,staticStyle:{"list-style":"none"}},[r("i",{staticClass:"fa fa-paperclip"}),e._v(" "),r("a",{attrs:{href:e.apiurl+"/upload/"+t.file,download:t.file}},[e._v(e._s(t.file.split("/")[1]))]),e._v(" "),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除附件",placement:"right"}},[r("el-button",{attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(r){e.deleteEnclosure(t.id)}}})],1)],1):e._e()}))]):e._e()],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.copyWorkticket}},[e._v("提交")])],1)],1)],1)],1)},_=[],g={render:v,staticRenderFns:_},b=g,y=r("VU/8"),F=a,j=y(h,b,!1,F,null,null);t.default=j.exports},WofG:function(e,t,r){var a=r("ctrw");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("19f96ace",a,!0)},ctrw:function(e,t,r){t=e.exports=r("FZ+f")(!1),t.push([e.i,"",""])}});