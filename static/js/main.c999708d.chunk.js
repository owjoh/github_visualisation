(this.webpackJsonpgithub_vis=this.webpackJsonpgithub_vis||[]).push([[0],{204:function(e,t,a){e.exports=a.p+"static/media/desktop-icon.32fc033c.svg"},226:function(e,t,a){e.exports=a(407)},231:function(e,t,a){},232:function(e,t,a){},407:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),i=a.n(o),l=(a(231),a(28)),c=(a(232),a(450)),s=a(453),d=a(454),m=a(455),u=a(456),h=a(207),p=a.n(h),g=a(458),b=a(457),f=a(460),x=a(452),y=a(204),E=a.n(y),v=a(205),w=a(464),k=a(470),S=a(471),A=a(463),C=a(469),j=a(468),N=a(467),O=(a(233),Object(v.a)((function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1)},form:{width:"100%",marginTop:e.spacing(1)},button:{margin:e.spacing(3,0,2),background:"linear-gradient(45deg, #834d9b 30%,#d04ed6 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(208, 78, 214, .3)",color:"white",height:48,padding:"0 30px"},card:{border:0,borderRadius:10,boxShadow:"0 3px 5px 2px rgba(0,0,0, .3)",color:"white",width:"400px",height:"400px",minWidth:"400px"},barCard:{border:0,borderRadius:10,boxShadow:"0 3px 5px 2px rgba(0,0,0, .3)",color:"white"},mediaCard:{border:0,borderRadius:10,boxShadow:"0 3px 5px 2px rgba(0,0,0, .3)",color:"white",width:"400px"},searchCard:{border:0,borderRadius:10,boxShadow:"0 3px 5px 2px rgba(0,0,0, .3)",color:"white",width:"400px",height:"400px"},flexCard:{border:0,borderRadius:10,boxShadow:"0 3px 5px 2px rgba(0,0,0, .3)",color:"white",width:"100%",height:"400px"}}})));var L=function(){var e=r.a.useState(""),t=Object(l.a)(e,2),a=t[0],o=t[1],i=r.a.useState(""),h=Object(l.a)(i,2),y=h[0],v=h[1],L=r.a.useState(""),D=Object(l.a)(L,2),W=D[0],z=D[1],R=r.a.useState(""),B=Object(l.a)(R,2),T=B[0],F=B[1],I=r.a.useState("flutter/cocoon"),_=Object(l.a)(I,2),q=_[0],H=_[1],J=r.a.useState(""),P=Object(l.a)(J,2),V=P[0],G=P[1],K=r.a.useState(""),M=Object(l.a)(K,2),U=M[0],$=M[1],Q=r.a.useState(""),X=Object(l.a)(Q,2),Y=X[0],Z=X[1];Object(n.useEffect)((function(){fetch("https://api.github.com/search/repositories?q="+q).then((function(e){return e.json()})).then((function(e){return ee(e,q)}))}),[q]);var ee=function(e,t){var a=-1;0===e.total_count&&(a=-2);for(var n=0;n<e.items.length;n++)t===e.items[n].name&&(a=n);-1===a?te(e.items[0]):a>-1&&te(e.items[a])},te=function(e){var t=e.name,a=e.owner,n=e.description,r=e.stargazers_count;o(t),z(a.login),v(n),F(r),console.log(a.login+t),fetch("https://api.github.com/repos/"+a.login+"/"+t+"/stats/contributors").then((function(e){return e.json()})).then((function(e){return ae(e)}))},ae=function(e){var t,a,n=e,r=0,o=0;if(Array.isArray(n))var i=n[n.length-1].total;for(var l=0;l<n.length;l++){t=0,a=0;for(var c=0;c<n[l].weeks.length;c++)t+=n[l].weeks[c].a,a+=n[l].weeks[c].d;n[l].totalAdd=t,n[l].totalDel=a,a>o&&(o=a),t>r&&(r=t)}n.highestTotalCom=i,n.highestTotalAdd=r,n.highestTotalDel=o,console.log(n),G(n)},ne=O();return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"navbar"},r.a.createElement("font",{color:"white"},"GitHub Visualisation")),r.a.createElement("div",{className:ne.paper},r.a.createElement(c.a,{className:ne.searchCard},function(e){var t=Object(l.a)(e,2),a=(t[0],t[1]),n=O(),o=r.a.useState(""),i=Object(l.a)(o,2),c=i[0],s=i[1];return r.a.createElement(x.a,{component:"main",maxWidth:"xs"},r.a.createElement(b.a,null),r.a.createElement("div",{className:n.paper},r.a.createElement("img",{src:E.a,alt:"Logo"}),r.a.createElement(m.a,{component:"h1",variant:"h5"},"Enter Repository Name"),r.a.createElement("form",{className:n.form,noValidate:!0,onSubmit:function(e){a(c),e.preventDefault()}},r.a.createElement(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"repository-inputs",label:"Repository",name:"repository",className:n.textField,autoComplete:"repository",onChange:function(e){s(e.target.value)},autoFocus:!0}),r.a.createElement(g.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:n.button},"Search"))))}([q,H]))),r.a.createElement(x.a,null,r.a.createElement("div",{className:"repoCard",style:{display:"flex",alignItems:"center",justifyContent:"center"}},function(e,t,a,n){O();return r.a.createElement(c.a,{style:{maxWidth:400,minWidth:400,border:0,borderRadius:10,boxShadow:"0 3px 5px 2px rgba(0,0,0, .3)"}},r.a.createElement(s.a,null,r.a.createElement(d.a,null,r.a.createElement(m.a,{gutterBottom:!0,variant:"h5",component:"h2"},e),r.a.createElement(m.a,{variant:"h6",color:"textSecondary",component:"h2"},t),r.a.createElement(m.a,{variant:"body2",color:"textSecondary",component:"p"},a))),r.a.createElement(u.a,null,r.a.createElement(p.a,null),n))}(a,W,y,T)),r.a.createElement("div",{style:{flexDirection:"row"}},r.a.createElement("div",{className:"barChart"},r.a.createElement(c.a,{className:ne.barCard},function(e,t,a){var n=Object(l.a)(t,2),o=(n[0],n[1]),i=Object(l.a)(a,2),c=(i[0],i[1]);return Array.isArray(e)?r.a.createElement(w.a,{domainPadding:20,theme:k.a.material,height:200,animate:{duration:1e3,onLoad:{duration:500}}},r.a.createElement(S.a,{label:"Users",style:{axisLabel:{fontSize:5,padding:30},tickLabels:{fontSize:2.5,angle:-90},grid:{strokeWidth:0}}}),r.a.createElement(S.a,{dependentAxis:!0,label:"Commits",style:{axisLabel:{fontSize:5,padding:30},tickLabels:{fontSize:5}}}),r.a.createElement(A.a,{data:e,x:"author.login",y:"total",style:{data:{fill:"#9D50BB"}},events:[{target:"data",eventHandlers:{onMouseOver:function(t,a){return o([{y:e[a.index].total/e.highestTotalCom,login:e[a.index].author.login},{y:e[a.index].totalAdd/e.highestTotalAdd},{y:e[a.index].totalDel/e.highestTotalDel}]),c(e[a.index]),[{target:"data",eventKey:"all",mutation:function(){return{style:{fill:"#9D50BB",strokeWidth:-5}}}},{target:"data",mutation:function(){return{style:{fill:"#873ffb",strokeWidth:-15}}}}]}}}]})):r.a.createElement("h3",null,"Loading graph...")}(V,[U,$],[Y,Z]))),r.a.createElement("div",{style:{paddingBottom:20,display:"flex",flexDirection:"row",alignItems:"center"}},r.a.createElement(c.a,{className:ne.card},function(e){if(!Array.isArray(e))return null;return r.a.createElement("div",{className:"graphLabel"},e[0].login)}(U),function(e){if(!Array.isArray(e))return null;return r.a.createElement(w.a,{polar:!0,theme:k.a.material,maxDomain:{y:1}},r.a.createElement(j.a,{dependentAxis:!0,style:{axis:{stroke:"none"}},tickFormat:function(e){return null}}),r.a.createElement(j.a,{labelPlacement:"perpendicular",tickCount:3,tickFormat:["Additions","Deletions","Commits"]}),r.a.createElement(N.a,{data:e,style:{data:{fill:"#873ffb",fillOpacity:.7,strokeWidth:2,stroke:"#873ffb"}},animate:{duration:300,onLoad:{duration:300}}}))}(U)),r.a.createElement("div",{style:{width:25}}),r.a.createElement(c.a,{className:ne.flexCard},function(e){if(console.log(e.weeks),!Array.isArray(e.weeks))return console.log("sake"),null;for(var t=0;t<e.weeks.length;t++)e.weeks[t].weekNo=t;return r.a.createElement(x.a,null,r.a.createElement(x.a,null,r.a.createElement(w.a,{height:200,width:300,theme:k.a.material,animate:{duration:300,onLoad:{duration:300}}},r.a.createElement(C.a,{style:{data:{stroke:"#873ffb"},parent:{border:"1px solid #ccc"}},data:e.weeks,x:"weekNo",y:"c",tickFormat:e.weeks.length}),r.a.createElement(S.a,{dependentAxis:!0,label:"Commits",style:{axisLabel:{fontSize:10,padding:30},tickLabels:{fontSize:10,angle:0}}}),r.a.createElement(S.a,{label:"Week",style:{axisLabel:{fontSize:10,padding:30},tickLabels:{fontSize:10,angle:0}},tickFormat:function(e){return"Day "+7*e}}))))}(Y))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[226,1,2]]]);
//# sourceMappingURL=main.c999708d.chunk.js.map