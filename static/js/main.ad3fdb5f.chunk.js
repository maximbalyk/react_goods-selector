(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(3),o=n.n(c),s=n(7),a=n(4),r=n(5),d=n(9),l=n(8),i=n(1),u=n.n(i),h=(n(14),n(6)),p=n.n(h),j=n(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],g=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={selectedGoods:["Jam"]},e.addGood=function(t){e.setState((function(e){return{selectedGoods:[].concat(Object(s.a)(e.selectedGoods),[t])}}))},e.resetGood=function(){e.setState({selectedGoods:[]})},e.message=function(){var t=e.state.selectedGoods,n="";if(0===t.length&&(n="No selected goods"),1===t.length&&(n="".concat(t," is selected")),t.length>1){var c=t.slice(0,-1).join(", "),o=t[t.length-1];n="".concat(c," and ").concat(o," are selected")}return n},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selectedGoods;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("h1",{children:[this.message(),0!==t.length&&Object(j.jsx)("button",{type:"button",onClick:this.resetGood,children:"X"})]}),Object(j.jsx)("ul",{children:b.map((function(n){return Object(j.jsxs)("li",{className:p()(t.includes(n)?"App__good--active":"App__good"),children:[n,!t.includes(n)&&Object(j.jsx)("button",{type:"button",className:"App__button",onClick:function(){e.addGood(n)},children:"add"})]},n)}))})]})}}]),n}(u.a.Component);o.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ad3fdb5f.chunk.js.map