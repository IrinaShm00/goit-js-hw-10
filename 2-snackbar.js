import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{i}from"./assets/vendor-BbbuE1sJ.js";const s=document.querySelector(".form");s.addEventListener("submit",function(o){o.preventDefault();const t=parseInt(s.elements.delay.value),l=s.elements.state.value;new Promise((e,m)=>{setTimeout(()=>{l==="fulfilled"?e(t):m(t)},t)}).then(e=>{i.success({title:"Fulfilled",message:`✅ Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{i.error({title:"Rejected",message:`❌ Rejected promise in ${e}ms`,position:"topRight"})})});
//# sourceMappingURL=2-snackbar.js.map