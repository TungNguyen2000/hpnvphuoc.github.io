(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(58)},33:function(e,t,n){},34:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"toggleForm",function(){return w}),n.d(r,"set_filter_mode",function(){return v}),n.d(r,"getAllWord",function(){return E}),n.d(r,"removeWord",function(){return O}),n.d(r,"toggleWord",function(){return g}),n.d(r,"addWord",function(){return _});var o=n(0),a=n.n(o),i=n(13),c=n.n(i),u=(n(33),n(2)),l=n(3),s=n(6),d=n(4),m=n(7),h=(n(34),n(5)),f=n(12),p=n.n(f),b="https://testservernode0104.herokuapp.com/word/";function w(){return{type:"TOGGLE_FORM"}}function v(e){return{type:"SET_FILTER_MODE",filterMode:e}}function E(){return function(e){p.a.get("https://testservernode0104.herokuapp.com/words").then(function(t){return e({type:"SET_ALL_WORDS",words:t.data.words})})}}function O(e){return function(t){p.a.delete(b+e).then(function(e){if(!e.data.word)throw new Error("Can not remove word");t({type:"REMOVE_WORD",_id:e.data.word._id})}).catch(function(e){return alert(e.message)})}}function g(e,t){return function(n){p.a.put(b+e,{isMemorized:t}).then(function(e){if(!e.data.word)throw new Error("Can not toggle word");n({type:"TOGGLE_WORD",_id:e.data.word._id})}).catch(function(e){return alert(e.message)})}}function _(e,t){return function(n){p.a.post(b,{en:e,vn:t}).then(function(e){if(!e.data.word)throw new Error("Can not add word");n({type:"ADD_WORD",word:e.data.word})}).catch(function(e){return alert(e.message)})}}var j=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.word;return a.a.createElement("div",{className:"word"},a.a.createElement("div",{className:"word-container"},a.a.createElement("h3",{className:"text-success"},t.en),a.a.createElement("h3",{className:"text-danger"},t.isMemorized?"----":t.vn)),a.a.createElement("div",{className:"btn-container"},a.a.createElement("button",{onClick:function(){return e.props.toggleWord(t._id,!t.isMemorized)},className:t.isMemorized?"btn btn-success":"btn btn-danger"},t.isMemorized?"Forgot":"Memorized"),a.a.createElement("button",{onClick:function(){return e.props.removeWord(t._id)},className:"btn btn-warning"},"Remove")))}}]),t}(o.Component),M=Object(h.b)(null,r)(j),y=n(10),W=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={txtEn:"",txtVn:""},n.addWord=n.addWord.bind(Object(y.a)(n)),n.toggleForm=n.toggleForm.bind(Object(y.a)(n)),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"addWord",value:function(){this.props.addWord(this.state.txtEn,this.state.txtVn),this.setState({txtEn:"",txtVn:""})}},{key:"toggleForm",value:function(){this.props.toggleForm()}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,this.props.shouldShowForm?a.a.createElement("div",{className:"form-group word-from"},a.a.createElement("input",{placeholder:"English",className:"form-control",value:this.state.txtEn,onChange:function(t){return e.setState({txtEn:t.target.value})}}),a.a.createElement("br",null),a.a.createElement("input",{placeholder:"Vietnamese",className:"form-control",value:this.state.txtVn,onChange:function(t){return e.setState({txtVn:t.target.value})}}),a.a.createElement("br",null),a.a.createElement("div",{className:"btn-container"},a.a.createElement("button",{onClick:this.addWord,className:"btn btn-success"},"Add word"),a.a.createElement("button",{onClick:this.toggleForm,className:"btn btn-danger"},"Cancel"))):a.a.createElement("div",null,a.a.createElement("button",{onClick:this.toggleForm,className:"btn btn-success",style:{width:200,margin:10,borderRadius:10}},"+")))}}]),t}(o.Component),S=Object(h.b)(function(e){return{shouldShowForm:e.shouldShowForm}},r)(W),k=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.filterMode;return a.a.createElement("div",null,a.a.createElement("select",{className:"word",value:t,onChange:function(t){return e.props.set_filter_mode(t.target.value)}},a.a.createElement("option",{value:"Show_All"},"Show_All"),a.a.createElement("option",{value:"Show_Forgot"},"Show_Forgot"),a.a.createElement("option",{value:"Show_Memorized"},"Show_Memorized")))}}]),t}(o.Component),F=Object(h.b)(function(e){return{filterMode:e.filterMode}},r)(k),C=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.props.getAllWord()}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,a.a.createElement(S,null),a.a.createElement("br",null),a.a.createElement(F,null),this.props.words.filter(function(t){return!("Show_Forgot"===e.props.filterMode&&!t.isMemorized)&&("Show_Memorized"!==e.props.filterMode||!t.isMemorized)}).map(function(e){return a.a.createElement(M,{word:e,key:e._id})}))}}]),t}(o.Component),D=Object(h.b)(function(e){return{words:e.words,filterMode:e.filterMode}},r)(C),R=n(9),N=n(27);var x=n(26),z=Object(R.c)({words:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if("SET_ALL_WORDS"===t.type)return t.words;if("REMOVE_WORD"===t.type)return e.filter(function(e){return e._id!==t._id});if("TOGGLE_WORD"===t.type)return e.map(function(e){return e._id!==t._id?e:Object(N.a)({},e,{isMemorized:!e.isMemorized})});if("ADD_WORD"===t.type){var n=Object.assign([],e);return n.unshift(t.word),n}return e},shouldShowForm:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return"ADD_WORD"!==t.type&&("TOGGLE_FORM"===t.type?!e:e)},filterMode:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Show_ALL",t=arguments.length>1?arguments[1]:void 0;return"SET_FILTER_MODE"===t.type?t.filterMode:e}}),A=Object(R.d)(z,Object(R.a)(x.a)),L=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(h.a,{store:A},a.a.createElement(D,null)))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.0e6861c7.chunk.js.map