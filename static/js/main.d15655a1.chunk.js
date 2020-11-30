(this["webpackJsonpreact-polluted-cities-app"]=this["webpackJsonpreact-polluted-cities-app"]||[]).push([[0],{27:function(e,n,t){e.exports=t(51)},51:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(21),i=t.n(o),c=(t(32),t(1)),l=t(2);function u(){var e=Object(c.a)(['\n  *, *::before, *::after {\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  body {\n    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";\n  }\n\n  .sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border: 0;\n  }\n']);return u=function(){return e},e}var s=Object(l.a)(u());function m(){var e=Object(c.a)(["\n  margin: 0 auto;\n  padding: 0 30px;\n  text-align: center;\n\n  @media (min-width: 576px) {\n    max-width: 600px;\n  }\n"]);return m=function(){return e},e}var d=l.b.main(m()),p=function(e){var n=e.children;return a.a.createElement(d,null,a.a.createElement("h1",null,"The most polluted cities"),a.a.createElement("p",null,"Check 10 the most polluted cities in Poland, Germany, Spain or France."),a.a.createElement(s,null),n)};p.displayName="MainTemplate";var f=p,b=t(9),v=t.n(b),g=t(25),h=t(5),y=t(4),x=t(7),E=t.n(x),j=["Poland","Germany","Spain","France"],O=["PL","DE","ES","FR"];function w(e){return Object.keys(e).map((function(n){return"".concat(n,"=").concat(e[n])})).join("&")}var k={limit:500,order_by:"value",sort:"desc",parameter:"pm25",date_from:function(e){var n=e.getUTCFullYear(),t="0".concat(e.getUTCMonth()+1).slice(-2),r="0".concat(e.getUTCDate()).slice(-2);return"".concat(n,"-").concat(t,"-").concat(r)}(new Date)},N=function(e){var n=w(Object(y.a)(Object(y.a)({},k),{},{country:e}));return E()("".concat("https://api.openaq.org/v1").concat("/measurements","?").concat(n))},C={action:"query",format:"json",explaintext:"",redirects:1,prop:"extracts",exintro:"",exsentences:2},S=function(e){var n=w(Object(y.a)(Object(y.a)({},C),{},{titles:e}));return E()("".concat("https://en.wikipedia.org/w/api.php?origin=*","&").concat(n))},L=a.a.createContext(void 0),F=t(26),I=a.a.memo((function(e){var n=e.country;return a.a.createElement("option",{value:n})}));I.displayName="Option";var U=I,T=a.a.memo((function(e){var n=e.countries,t=Object(F.a)(e,["countries"]);return a.a.createElement("datalist",t,n.map((function(e){return a.a.createElement(U,{key:e,country:e})})))}));T.displayName="Datalist";var D=T;function M(){var e=Object(c.a)(["\n  display: inline-block;\n  font-weight: 400;\n  color: #fff;\n  text-align: center;\n  vertical-align: middle;\n  user-select: none;\n  background-color: ",";\n  border: 1px solid #007bff;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  transition: color 0.15s;\n\n  &:disabled {\n    opacity: 0.65;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return M=function(){return e},e}var q=l.b.button(M(),(function(e){return e.backgroundColor?e.backgroundColor:"green"})),z=a.a.memo((function(e){var n=Object.assign({},e);return a.a.createElement(q,n)}));z.displayName="Button";var P=z;function B(){var e=Object(c.a)(["\n  width: 100%;\n  display: inline-block;\n"]);return B=function(){return e},e}var R=l.b.label(B()),A=a.a.memo((function(e){var n=e.children,t=e.labelName,r=e.srOnly,o=void 0!==r&&r;return a.a.createElement(R,null,o?a.a.createElement("span",{className:"sr-only"},t):a.a.createElement(a.a.Fragment,null,t),n)}));A.displayName="Label";var G=A;function J(){var e=Object(c.a)(["\n  display: block;\n  width: 100%;\n  height: calc(1.5em + 0.75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n"]);return J=function(){return e},e}var _=l.b.input(J()),H=a.a.memo((function(e){var n=Object.assign({},e);return a.a.createElement(_,n)}));H.displayName="Input";var W=H;function Y(){var e=Object(c.a)(["\n  position: relative;\n  flex: 0 0 70%;\n\n  @media (min-width: 400px) {\n    margin-right: 4px;\n  }\n"]);return Y=function(){return e},e}function K(){var e=Object(c.a)(["\n  margin-top: 20px;\n  margin-bottom: 15px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n\n  @media (min-width: 400px) {\n    flex-direction: row;\n    justify-content: center;\n    align-items: flex-start;\n  }\n"]);return K=function(){return e},e}var Q=l.b.form(K()),V=l.b.div(Y()),X=a.a.memo((function(e){var n=Object.assign({},e),t=Object(r.useContext)(L);return a.a.createElement(Q,Object.assign({},n,{onSubmit:function(e){e.preventDefault();var n=e.target.querySelector("input[name='country']").value;t.doFetch(n)}}),a.a.createElement(V,null,a.a.createElement(G,{labelName:"Country name:",srOnly:!0},a.a.createElement(W,{type:"text",autoComplete:"off",name:"country",list:"countries"}),a.a.createElement(D,{id:"countries",countries:j}))),a.a.createElement(P,{type:"submit",disabled:t.isLoading,backgroundColor:"#007bff"},"Search"))}));X.displayName="SearchForm";var Z=X;function $(){var e=Object(c.a)(["\n  width: 100%;\n  height: 18px;\n  font-weight: 700;\n  color: red;\n"]);return $=function(){return e},e}var ee=l.b.p($());ee.displayName="ErrorMessage";var ne=ee;function te(){var e=Object(c.a)(["\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  vertical-align: text-bottom;\n  border: 0.25em solid currentColor;\n  border-right-color: transparent;\n  border-radius: 50%;\n  animation: spinner-border 0.75s linear infinite;\n\n  @keyframes spinner-border {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"]);return te=function(){return e},e}var re=l.b.div(te()),ae=function(){return a.a.createElement(re,{"aria-busy":"true",role:"progressbar"},a.a.createElement("span",{className:"sr-only"},"Loading content..."))};ae.displayName="Spinner";var oe=ae,ie=a.a.memo((function(e){var n=e.children,t=e.isError,r=e.isLoading;return a.a.createElement(a.a.Fragment,null,a.a.createElement(ne,null,t),a.a.createElement(Z,{role:"search"}),r&&a.a.createElement(oe,null),n)}));ie.displayName="CitiesTemplate";var ce=ie;function le(){var e=Object(c.a)(["\n  margin-bottom: -1px;\n  padding: 0.75rem 1.25rem;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n\n  :first-child {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem;\n  }\n\n  :last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n  }\n"]);return le=function(){return e},e}var ue=l.b.li(le());ue.displayName="ListItem";var se=ue,me=a.a.memo((function(e){var n=e.title,t=e.description;return a.a.createElement(se,null,a.a.createElement("h2",null,n),a.a.createElement("p",null,t))}));me.displayName="CityItem";var de=me;function pe(){var e=Object(c.a)(["\n  padding: 0;\n  list-style: none;\n"]);return pe=function(){return e},e}var fe=l.b.ul(pe());fe.displayName="List";var be=fe;function ve(){var e=Object(c.a)(["\n  margin-top: 40px;\n"]);return ve=function(){return e},e}var ge=Object(l.b)(be)(ve()),he=a.a.memo((function(e){var n=e.cities;return a.a.createElement(a.a.Fragment,null,n.length>0&&a.a.createElement(ge,null,n.map((function(e){return a.a.createElement(de,{key:e.pageid,title:e.title,description:e.extract})}))))}));he.displayName="CityList";var ye=he;function xe(e,n){var t=e.filter((function(e,t,r){return t===r.findIndex((function(t){return t[n]===e[n]}))}));return t.splice(10),t}var Ee=function(e){var n=e.map((function(e){return e.city.split("/")[0]}));return encodeURIComponent(n.join("|"))},je=function(e){var n=e.toLowerCase(),t=j.findIndex((function(e){return e.toLowerCase()===n}));return O[t]},Oe=function(){var e=function(){var e=Object(r.useState)([]),n=Object(h.a)(e,2),t=n[0],a=n[1],o=Object(r.useState)(!1),i=Object(h.a)(o,2),c=i[0],l=i[1],u=Object(r.useState)(""),s=Object(h.a)(u,2),m=s[0],d=s[1];return[t,c,m,function(){var e=Object(g.a)(v.a.mark((function e(n){var t,r,o,i,c,u;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===(t=je(n))){e.next=25;break}return a([]),d(""),l(!0),e.prev=5,e.next=8,N(t);case 8:return r=e.sent,o=xe(r.data.results,"city"),i=Ee(o),e.next=13,S(i);case 13:c=e.sent,u=c.data.query.pages,l(!1),a(Object.values(u)),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(5),d("Something went wrong, try again..."),l(!1);case 23:e.next=26;break;case 25:d("Wrong country provided");case 26:case"end":return e.stop()}}),e,null,[[5,19]])})));return function(n){return e.apply(this,arguments)}}()]}(),n=Object(h.a)(e,4),t=n[0],o=n[1],i=n[2],c=n[3];return a.a.createElement(L.Provider,{value:{doFetch:c,isLoading:o}},a.a.createElement(ce,{isError:i,isLoading:o},a.a.createElement(ye,{cities:t})))},we=function(){return a.a.createElement(f,null,a.a.createElement(Oe,null))};i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(we,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.d15655a1.chunk.js.map