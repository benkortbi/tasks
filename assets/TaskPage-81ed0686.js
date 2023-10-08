import{c as y,j as e,L as v,u as p,r,e as S,f as B,h as M}from"./index-09d378ac.js";import{G as f,u as b,P as c}from"./iconBase-9cfc633b.js";import{f as z}from"./formatteDate-c212038f.js";function U(t){return f({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z"}}]})(t)}function q(t){return f({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z"}},{tag:"path",attr:{d:"M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z"}}]})(t)}function C(){const t=y();return e.jsx("header",{className:"w-full h-20 bg-neutral",children:e.jsxs("nav",{className:"container flex items-center justify-between h-full px-6 mx-auto",children:[e.jsx("div",{className:"mr-3 ",children:e.jsx("button",{className:"btn btn-square btn-primary",onClick:()=>t(-1),children:e.jsx(U,{size:"1.1rem"})})}),e.jsx(v,{to:"/",className:"btn btn-ghost normal-case text-xl",children:"NOTEM"}),e.jsx("div",{className:"pr-0",children:e.jsxs("label",{htmlFor:"my_modal_6",className:"btn gap-2 btn-outline btn-warning",children:["Edite",e.jsx(q,{})]})})]})})}function E({singleTask:t}){return e.jsx(e.Fragment,{children:e.jsxs("article",{className:"container flex flex-col px-6 py-24 mx-auto md:px-12",children:[e.jsxs("span",{className:"ml-auto text-sm font-medium text-gray-400 md:text-md",children:["Created at: ",z(t==null?void 0:t.createdAt)]}),e.jsxs("h1",{className:"text-3xl font-bold text-start",children:[t==null?void 0:t.title," "]}),e.jsx("p",{className:"py-12 text-lg font-normal leading-loose text-gray-400 text-start",children:t==null?void 0:t.body})]})})}function F(){return e.jsxs("button",{className:"btn btn-outline btn-warning",children:[e.jsx("span",{className:"loading loading-spinner"}),"loading"]})}function j({id:t,prevTitle:n,prevBody:i,onSuccess:d}){const{loading:s}=p(l=>l.todoSlice.updateTask),o=r.useRef(),m=b(),[a,g]=r.useState({newTitle:n,newBody:i});function h(l){const{name:u,value:x}=l.target;g({...a,[u]:x})}function N(){o.current.checked=!1}async function w(l){if(l.preventDefault(),a.newTitle===n&&a.newBody===i)return;const u={id:t,title:a.newTitle,body:a.newBody};try{await m(S(u)),d()}catch(x){throw new Error(x)}}return r.useEffect(()=>{s||N()},[s]),e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"checkbox",id:"my_modal_6",className:"modal-toggle",ref:o}),e.jsx("div",{className:"modal ",children:e.jsxs("div",{className:"w-11/12 max-w-5xl modal-box",children:[e.jsx("h3",{className:"mb-12 text-lg font-bold",children:"Update Note!"}),e.jsxs("form",{onSubmit:w,className:"flex flex-col w-11/12 max-w-5xl gap-10 mx-auto",children:[e.jsxs("div",{className:"w-full form-control",children:[e.jsx("label",{className:"label",children:e.jsx("span",{className:"capitalize label-text",children:"Update note title"})}),e.jsx("input",{onChange:h,value:a.newTitle,type:"text",required:!0,name:"newTitle",className:"w-full mt-1 input input-bordered input-warning input-md"})]}),e.jsxs("div",{className:"w-full form-control",children:[e.jsx("label",{className:"label",children:e.jsx("span",{className:"capitalize label-text",children:"Update Note body"})}),e.jsx("textarea",{onChange:h,value:a.newBody,name:"newBody",className:"w-full h-24 mt-1 textarea textarea-warning textarea-bordered"})]}),e.jsxs("div",{className:"flex gap-5 modal-action",children:[e.jsx("label",{htmlFor:"my_modal_6",className:"btn btn-info btn-outline",children:"Close!"}),s?e.jsx(F,{}):e.jsx("button",{className:"btn btn-warning btn-outline",children:"Update"})]})]})]})})]})}j.propTypes={id:c.string.isRequired,prevTitle:c.string.isRequired,prevBody:c.string.isRequired,onSuccess:c.func.isRequired};function R(){const{data:t}=p(m=>m.todoSlice.singleTask),{id:n}=B(),i=b(),[d,s]=r.useState(!1);r.useEffect(()=>{i(M(n))},[n,d]);const o=()=>{s(!0)};return e.jsxs(e.Fragment,{children:[e.jsx(C,{}),t?e.jsxs(e.Fragment,{children:[e.jsx(E,{singleTask:t}),e.jsx(j,{id:t==null?void 0:t._id,prevTitle:t==null?void 0:t.title,prevBody:t==null?void 0:t.body,onSuccess:o})]}):"loading..."]})}export{R as default};
