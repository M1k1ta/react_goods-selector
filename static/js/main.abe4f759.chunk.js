(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),a=c(4),o=c(5),l=c(7),d=c(6),r=c(1),i=c.n(r),u=(c(12),c(13),c(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(a.a)(this,c);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={selectedGood:"Jam"},e.handleClick=function(t){t===e.state.selectedGood?e.setState({selectedGood:""}):e.setState({selectedGood:t})},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("main",{className:"section container",children:[this.state.selectedGood?Object(u.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(this.state.selectedGood," is selected"),Object(u.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){return e.handleClick(e.state.selectedGood)}})]}):Object(u.jsx)("h1",{className:"title",children:"No goods selected"}),Object(u.jsx)("table",{className:"table",children:Object(u.jsx)("tbody",{children:b.map((function(t){return Object(u.jsxs)("tr",{"data-cy":"Good",className:t===e.state.selectedGood?"has-background-success-light":"",children:[Object(u.jsx)("td",{children:t===e.state.selectedGood?Object(u.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:function(){return e.handleClick(t)},children:"-"}):Object(u.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return e.handleClick(t)},children:"+"})}),Object(u.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:t})]},t)}))})})]})}}]),c}(i.a.Component);n.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.abe4f759.chunk.js.map