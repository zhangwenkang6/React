(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{14:function(e,t,o){},15:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),r=o(8),c=o.n(r),l=(o(14),o(1)),i=o(2),d=o(3),s=o(5),u=o(4),p=o(6),v=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("section",{id:"section"},n.a.createElement("h1",{id:"h1"},"\u6b63\u5728\u8fdb\u884c  ",n.a.createElement("p",{id:"span1"},this.props.todo.length)),n.a.createElement("ul",null,this.props.todo.map((function(t,o){return n.a.createElement("li",{key:t},n.a.createElement("input",{type:"checkbox",onChange:function(){return e.props.chanTodo1(o)}}),t,"------------------------------------",n.a.createElement("button",{onClick:function(){return e.props.delTodo(o)}},"\u5220\u9664"))}))),n.a.createElement("h1",null,"\u5df2\u7ecf\u5b8c\u6210 ",n.a.createElement("p",{id:"span1"},this.props.over.length)),n.a.createElement("ul",null,this.props.over.map((function(t,o){return n.a.createElement("li",{key:t},n.a.createElement("input",{type:"checkbox",onChange:function(){return e.props.chanTodo2(o)},checked:!0}),t,"------------------------------------",n.a.createElement("button",{onClick:function(){return e.props.delOver(o)}},"\u5220\u9664"))}))))}}]),t}(a.Component),h=function(e){function t(){var e,o;Object(i.a)(this,t);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(o=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).handleInput=function(e){13===e.keyCode&&(o.props.addTodo(e.target.value),e.target.value="")},o}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{id:"black"},n.a.createElement("div",{id:"black1"},n.a.createElement("label",null,"ToDoList"),n.a.createElement("input",{id:"top",onKeyDown:function(t){return e.handleInput(t)},type:"text",placeholder:"\u6dfb\u52a0Todo"})))}}]),t}(a.Component),m=function(e){function t(){var e;Object(i.a)(this,t);var o=window.localStorage;return(e=Object(s.a)(this,Object(u.a)(t).call(this))).open=function(){if(!window.localStorage)return alert("\u6d4f\u89c8\u5668\u4e0d\u652f\u6301localstorage"),!1;var e=window.localStorage;e.todo="1,2,3",e.over="4,5,6"},e.addItem=function(t){var o=window.localStorage,a=o.todo.split(",")+o.over.split(",");""!==t&&!1===a.includes(t)?(e.setState({todo:[].concat(Object(l.a)(e.state.todo),[t]),msg:""}),o.todo=o.todo+","+t):""!==t&&!0===a.includes(t)&&alert("\u4e0d\u5141\u8bb8\u52a0\u5165\u76f8\u540c\u540d\u5b57\u7684\u4efb\u52a1")},e.delItem=function(t){var o=Object(l.a)(e.state.todo),a=o[t];o.splice(t,1),e.setState({todo:o});var n=window.localStorage;n.todo=n.todo.replace(a+",",""),n.todo=n.todo.replace(","+a,""),console.log(n.todo)},e.delItem1=function(t){var o=Object(l.a)(e.state.over),a=o[t];o.splice(t,1),e.setState({over:o});var n=window.localStorage;n.over=n.over.replace(a+",",""),n.over=n.over.replace(","+a,""),console.log(n.over)},e.change1=function(t){var o=Object(l.a)(e.state.todo),a=o.splice(t,1),n=Object(l.a)(e.state.over);n.push(a),e.setState({todo:o,over:n});var r=window.localStorage;r.todo=r.todo.replace(a+",",""),r.todo=r.todo.replace(","+a,""),r.over=r.over+","+a},e.change2=function(t){var o=Object(l.a)(e.state.over),a=o.splice(t,1),n=Object(l.a)(e.state.todo);n.push(a),e.setState({todo:n,over:o});var r=window.localStorage;r.over=r.over.replace(a+",",""),r.over=r.over.replace(","+a,""),r.todo=r.todo+","+a},e.state={todo:o.todo.split(","),over:o.over.split(",")},e}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(h,{addTodo:this.addItem}),n.a.createElement(v,{todo:this.state.todo,over:this.state.over,delTodo:this.delItem,delOver:this.delItem1,chanTodo1:this.change1,chanTodo2:this.change2}))}}]),t}(a.Component);c.a.render(n.a.createElement(m,null),document.getElementById("root"))},9:function(e,t,o){e.exports=o(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.d3ac69b4.chunk.js.map