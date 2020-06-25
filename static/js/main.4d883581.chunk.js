(this["webpackJsonpreact-tic-tac-toe"]=this["webpackJsonpreact-tic-tac-toe"]||[]).push([[0],{13:function(n,e,t){n.exports=t(21)},18:function(n,e,t){},21:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(8),i=t.n(o),c=(t(18),t(3)),l=t(1),u=t(2),s=t(9),f=t.n(s);function m(){var n=Object(l.a)(["\n  background-color: #282c34;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 0 10px 1px;\n  height: 50px;\n  padding: 10px;\n  .header-logo {\n    height: 50px;\n    width: 50px;\n  }\n  .header-title {\n    color: white;\n    font-size: 1.1em;\n    margin: 0;\n  }\n  @media (prefers-reduced-motion: no-preference) {\n    .header-logo {\n      animation: header-logo-spin infinite 20s linear;\n    }\n  }\n  @keyframes header-logo-spin {\n    from {transform: rotate(0deg);}\n    to {transform: rotate(360deg);}\n  }\n"]);return m=function(){return n},n}var d=u.a.header(m());var g=function(){return a.a.createElement(d,null,a.a.createElement("img",{src:f.a,className:"header-logo",alt:"logo"}),a.a.createElement("h1",{className:"header-title"},"React Tic Tac Toe challenge"))};function h(){var n=Object(l.a)(["\n  background: ",";\n  border: 2px solid #282c34;\n  color: ",";\n  font-size: 1.8em;\n  font-weight: bold;\n  line-height: 50px;\n  height: 50px;\n  margin-right: -2px;\n  margin-top: -2px;\n  padding: 0;\n  text-align: center;\n  width: 50px;\n  :focus {\n    outline: none;\n  }\n"]);return h=function(){return n},n}var v=u.a.button(h(),(function(n){return n.win?"#282c34":"white"}),(function(n){return n.win?"white":"#282c34"}));var p=function(n){return a.a.createElement(v,{onClick:n.onClick,win:n.win},n.value)};function w(){var n=Object(l.a)(["\n  display: grid;\n  grid-template-columns: auto auto auto;\n  margin: 0 auto;\n  width: 144px;\n"]);return w=function(){return n},n}var x=u.a.div(w());var b=function(n){var e=n.squaresList,t=n.onClick,r=n.winner,o=e.map((function(n,e){for(var o=!1,i=0;i<r.length;i++)r&&r[i]===e&&(o=!0);return a.a.createElement(p,{key:e,value:n,win:o,onClick:function(){return t(e)}})}));return a.a.createElement(x,null,o)};function E(){var n=Object(l.a)(["\n  font-size: 1.5em;\n  margin: 1.5em auto;\n  text-align: center;\n"]);return E=function(){return n},n}var O=u.a.div(E());var j=function(n){return a.a.createElement(O,null,n.statusText)};function k(){var n=Object(l.a)(["\n  text-align: center;\n  margin: 1.5em auto;\n"]);return k=function(){return n},n}var y=u.a.div(k());var S=function(n){return a.a.createElement(y,null,"Show history")};var C=function(){var n=Object(r.useState)(Array(9).fill(null)),e=Object(c.a)(n,2),t=e[0],o=e[1],i=Object(r.useState)(!0),l=Object(c.a)(i,2),u=l[0],s=l[1],f=Object(r.useState)(!1),m=Object(c.a)(f,2),d=m[0],h=m[1],v=Object(r.useState)("Next Player: X"),p=Object(c.a)(v,2),w=p[0],x=p[1];function E(n){if(!d&&!t[n]){var e=t;e[n]=u?"X":"O",o(e);var r=function(n){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<e.length;t++){var r=Object(c.a)(e[t],3),a=r[0],o=r[1],i=r[2];if(n[a]&&n[a]===n[o]&&n[a]===n[i])return{winner:n[a],lines:e[t]}}return null}(t);r?(h(r.lines),x("Winner: "+r.winner)):x("Next Player: "+(u?"O":"X")),s(!u)}}return a.a.createElement(a.a.Fragment,null,a.a.createElement(g,null),a.a.createElement(j,{statusText:w}),a.a.createElement(b,{squaresList:t,onClick:function(n){return E(n)},winner:d}),a.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},9:function(n,e,t){n.exports=t.p+"static/media/logo.5d5d9eef.svg"}},[[13,1,2]]]);
//# sourceMappingURL=main.4d883581.chunk.js.map