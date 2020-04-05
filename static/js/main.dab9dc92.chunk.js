(this.webpackJsonplistening_app=this.webpackJsonplistening_app||[]).push([[0],{18:function(e,t,n){e.exports=n(36)},23:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(16),s=n.n(i),l=(n(23),n(3)),c=n(4),o=n(6),u=n(5),m=n(2),d=n(7),h=n(1),v=n.n(h),p=n(10),C=n.n(p),b=(n(32),n(33),n(17));function f(e){var t=e.text,n=e.onClick,a=e.value,i=e.color,s=e.layoutClassName;return r.a.createElement("button",{value:a,onClick:n,className:"answer-button ".concat(i," ").concat(s)},t)}function y(e){var t=e.onClick;return r.a.createElement("button",{onClick:t,className:"play-button"},r.a.createElement(b.a,{className:"play-button-sound-icon"}),"PLAY INTERVAL")}var N={m2:{friendlyName:"Minor 2nd",layoutClassName:"minor2"},M2:{friendlyName:"Major 2nd",layoutClassName:"major2"},m3:{friendlyName:"Minor 3rd",layoutClassName:"minor3"},M3:{friendlyName:"Major 3rd",layoutClassName:"major3"},P4:{friendlyName:"Perfect 4th",layoutClassName:"perfect4"},d5:{friendlyName:"Diminished 5th",layoutClassName:"diminished5"},P5:{friendlyName:"Perfect 5th",layoutClassName:"perfect5"},m6:{friendlyName:"Minor 6th",layoutClassName:"minor6"},M6:{friendlyName:"Major 6th",layoutClassName:"major6"},m7:{friendlyName:"Minor 7th",layoutClassName:"minor7"},M7:{friendlyName:"Major 7th",layoutClassName:"major7"}},k=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).playInterval=e.playInterval.bind(Object(m.a)(e)),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"playInterval",value:function(){var e=(new C.a.Synth).toMaster(),t=v.a.interval(v.a.note("C4"),this.props.interval),n=t.name()+t.accidental()+t.octave();e.triggerAttackRelease("C4","4n"),e.triggerAttackRelease(n,"4n",C.a.now()+C.a.Time("4n"))}},{key:"render",value:function(){var e=this.props,t=e.interval,n=e.possibleAnswers,a=e.submittedAnswers,i=e.onAnswerClick;return r.a.createElement("div",null,r.a.createElement(y,{onClick:this.playInterval}),r.a.createElement("p",{className:"instructions-text"},"Identify the interval"),r.a.createElement("div",{className:"answer-buttons-container"},n.map((function(e){var n=e.toString(),s=N[n].friendlyName,l="white";return a.includes(e.toString())&&(l=n===t.toString()?"green":"red"),r.a.createElement(f,{key:n,text:s,value:n,color:l,onClick:i,layoutClassName:N[n].layoutClassName})}))))}}]),t}(a.Component);n(34),n(35);function w(e){var t=e.onClick;return r.a.createElement("button",{onClick:t,className:"continue-button"},"CONTINUE")}var E=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.submittedAnswers.includes(this.props.interval.toString())&&this.props.currentExercise<this.props.numExercises-1;return r.a.createElement("div",{className:"quiz"},r.a.createElement(k,{interval:this.props.interval,possibleAnswers:this.props.possibleAnswers,submittedAnswers:this.props.submittedAnswers,onAnswerClick:this.props.onAnswerClick}),e&&r.a.createElement(w,{onClick:this.props.onContinueClick}))}}]),t}(a.Component),A=[v.a.interval("m2"),v.a.interval("M2"),v.a.interval("m3"),v.a.interval("M3"),v.a.interval("P4"),v.a.interval("d5"),v.a.interval("P5"),v.a.interval("m6"),v.a.interval("M6"),v.a.interval("m7"),v.a.interval("M7")];function j(e){return Math.floor(Math.random()*Math.floor(e))}var M=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={numExercises:10,currentExercise:0,interval:A[j(A.length)],submittedAnswers:[]},e.handleAnswerClick=e.handleAnswerClick.bind(Object(m.a)(e)),e.handleContinueClick=e.handleContinueClick.bind(Object(m.a)(e)),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleAnswerClick",value:function(e){this.setState({submittedAnswers:this.state.submittedAnswers.concat([e.currentTarget.value])})}},{key:"handleContinueClick",value:function(){this.setState({submittedAnswers:[],interval:A[j(A.length)],currentExercise:this.state.currentExercise+1})}},{key:"render",value:function(){return r.a.createElement(E,{interval:this.state.interval,possibleAnswers:A,submittedAnswers:this.state.submittedAnswers,onAnswerClick:this.handleAnswerClick,numExercises:this.state.numExercises,currentExercise:this.state.currentExercise,onContinueClick:this.handleContinueClick})}}]),t}(a.Component);var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(M,null))};s.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.dab9dc92.chunk.js.map