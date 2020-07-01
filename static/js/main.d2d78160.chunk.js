(this["webpackJsonpreact-tic-tac-toe"]=this["webpackJsonpreact-tic-tac-toe"]||[]).push([[0],{13:function(n,e,t){n.exports=t(21)},18:function(n,e,t){},21:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(8),o=t.n(i),c=(t(18),t(3)),l=t(1),u=t(2),s=t(9),f=t.n(s);function d(){var n=Object(l.a)(["\n  background-color: #282c34;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 0 10px 1px;\n  height: 50px;\n  padding: 10px;\n  .header-logo {\n    height: 50px;\n    width: 50px;\n  }\n  .header-title {\n    color: white;\n    font-size: 1.1em;\n    margin: 0;\n  }\n  @media (prefers-reduced-motion: no-preference) {\n    .header-logo {\n      animation: header-logo-spin infinite 20s linear;\n    }\n  }\n  @keyframes header-logo-spin {\n    from {transform: rotate(0deg);}\n    to {transform: rotate(360deg);}\n  }\n"]);return d=function(){return n},n}var m=u.a.header(d());var h=function(){return a.a.createElement(m,null,a.a.createElement("img",{src:f.a,className:"header-logo",alt:"logo"}),a.a.createElement("h1",{className:"header-title"},"React Tic Tac Toe challenge"))};function g(){var n=Object(l.a)(["\n  background: ",";\n  border: 2px solid #282c34;\n  color: ",";\n  font-size: 1.8em;\n  font-weight: bold;\n  line-height: 50px;\n  height: 50px;\n  margin-right: -2px;\n  margin-top: -2px;\n  padding: 0;\n  text-align: center;\n  width: 50px;\n  :focus {\n    outline: none;\n  }\n"]);return g=function(){return n},n}var v=u.a.button(g(),(function(n){return n.win?"#282c34":"white"}),(function(n){return n.win?"white":"#282c34"}));var p=function(n){return a.a.createElement(v,{onClick:n.onClick,win:n.win},n.value)};function w(){var n=Object(l.a)(["\n  display: grid;\n  grid-template-columns: auto auto auto;\n  margin: 0 auto;\n  width: 144px;\n"]);return w=function(){return n},n}var b=u.a.div(w());var x=function(n){var e=n.history,t=n.step,r=n.winner,i=n.onClick,o=e[t].squaresList.map((function(n,e){for(var t=!1,o=0;o<r.length;o++)r&&r[o]===e&&(t=!0);return a.a.createElement(p,{key:e,value:n,win:t,onClick:function(){return i(e)}})}));return a.a.createElement(b,null,o)};function O(){var n=Object(l.a)(["\n  font-size: 1.5em;\n  margin: 1.5em auto;\n  text-align: center;\n"]);return O=function(){return n},n}var E=u.a.div(O());var j=function(n){var e=n.status,t="";switch(e.winner){case"Dead heat":t=e.winner;break;default:t=e.winner?"Winner: "+e.winner:"Next player: "+e.turn}return a.a.createElement(E,null,t)};function k(){var n=Object(l.a)(["\n  text-align: center;\n  margin: 1.5em auto;\n  ul {\n    list-style: none;\n    padding: 0;\n    li {\n      padding: 0;\n      button {\n        margin: 0 0 .5em 0;\n      }\n    }\n  }\n"]);return k=function(){return n},n}var y=u.a.div(k());var q=function(n){var e=n.history,t=n.onClick,r=e.map((function(n,r){var i=Math.floor(e[r].squareSelected/3)+1,o=e[r].squareSelected%3+1,c=r?"Go to move #"+r+" (ROW: "+i+", COL: "+o+")":"Go to game start";return a.a.createElement("li",{key:r},a.a.createElement("button",{onClick:function(){return t(r)}},c))}));return a.a.createElement(y,null,a.a.createElement("ul",null,r))};var S=function(){var n=Object(r.useState)(!0),e=Object(c.a)(n,2),t=e[0],i=e[1],o=Object(r.useState)(!1),l=Object(c.a)(o,2),u=l[0],s=l[1],f=Object(r.useState)({turn:"X",winner:null}),d=Object(c.a)(f,2),m=d[0],g=d[1],v=Object(r.useState)(0),p=Object(c.a)(v,2),w=p[0],b=p[1],O=Object(r.useState)([{squaresList:Array(9).fill(null),squareSelected:null}]),E=Object(c.a)(O,2),k=E[0],y=E[1];return Object(r.useEffect)((function(){var n=function(n){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<e.length;t++){var r=Object(c.a)(e[t],3),a=r[0],i=r[1],o=r[2];if(n[a]&&n[a]===n[i]&&n[a]===n[o])return{winner:n[a],lines:e[t]}}return null}(k[w].squaresList);n?(s(n.lines),g({winner:n.winner})):(s(!1),g(w>8?{winner:"Dead heat"}:{turn:t?"X":"O"}))}),[k,w,t]),a.a.createElement(a.a.Fragment,null,a.a.createElement(h,null),a.a.createElement(j,{status:m}),a.a.createElement(x,{history:k,step:w,winner:u,onClick:function(n){return function(n){var e=k[w].squaresList[n];if(!u&&!e){var r=k.slice(0,w+1),a=r[r.length-1].squaresList.slice();a[n]=t?"X":"O",y(r.concat({squaresList:a,squareSelected:n})),b(r.length),i(!t)}}(n)}}),a.a.createElement(q,{history:k,onClick:function(n){return e=n,y(k.slice(0,e+1)),b(e),void i(e%2===0);var e}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},9:function(n,e,t){n.exports=t.p+"static/media/logo.5d5d9eef.svg"}},[[13,1,2]]]);
//# sourceMappingURL=main.d2d78160.chunk.js.map