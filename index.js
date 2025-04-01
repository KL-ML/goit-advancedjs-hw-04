var q=Object.defineProperty;var D=(e,t,o)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var p=(e,t,o)=>D(e,typeof t!="symbol"?t+"":t,o);import{i as F,a as $,S as A}from"./assets/vendor-B-D547pe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();function d(e){F.error({timeout:3e3,message:`${e}`,position:"topRight",backgroundColor:"rgba(239, 64, 64, 0.99)",messageColor:"#FFFFFF",icon:"",close:!1})}const f="search-form-state";function C(e){const t=e.target.form.elements.searchQuery.value.trim();localStorage.setItem(f,JSON.stringify(t))}function I(e){const t=JSON.parse(localStorage.getItem(f));t&&(e.elements.searchQuery.value=t)}function O(){localStorage.removeItem(f)}const P="30636701-b7bfaf1719dc5d89c8acde7b5",H="https://pixabay.com/api/",i={key:P,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,q:"",page:1};async function y(){const{data:e}=await $.get(H,{params:i});return e}const b=document.querySelector(".gallery"),S=document.querySelector(".loader-wraper");function L(e){const t=e.hits.map(({webformatURL:o,largeImageURL:u,tags:r,likes:s,views:n,comments:w,downloads:E})=>`
            <div class="photo-card">
              <a href="${u}" class="img-link">
                  <img class="img" src="${o}" alt="${r}" width=360px; loading="lazy" />
              </a>
              <div class="info">
                  <p class="info-item">
                      <b>Likes </b>${s}
                  </p>
                  <p class="info-item">
                      <b>Views </b>${n}
                  </p>
                  <p class="info-item">
                      <b>Comments </b>${w}
                  </p>
                  <p class="info-item">
                      <b>Downloads </b>${E}
                  </p>
              </div>
            </div>
        `).join("");b.insertAdjacentHTML("beforeend",t),new A("ul.gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function g(){b.innerHTML=""}function v(){S.classList.add("active")}function c(){S.classList.remove("active")}function N(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}const l=class l{constructor(t){this.button=t}disable(){this.button.disabled=!0}enable(){this.button.disabled=!1}hide(){this.button.classList.add(l.HIDDEN_CLASS)}show(){this.button.classList.remove(l.HIDDEN_CLASS)}};p(l,"HIDDEN_CLASS","hidden");let m=l;const T=document.querySelector(".form"),a=new m(document.querySelector(".load-more"));async function M(e){e.preventDefault();const t=e.currentTarget.elements.searchQuery.value.trim();if(t===""){d("Enter your search request");return}a.disable(),a.hide(),g(),v(),i.q=t,i.page=1;try{const o=await y();if(o.total===0){d("Sorry, there are no images matching your search query. Please try again!"),a.hide(),c(),g();return}c(),L(o),i.page===Math.ceil(o.totalHits/15)?a.hide():(a.enable(),a.show(),a.button.addEventListener("click",_))}catch(o){d(`Error ${o}`),c()}finally{T.reset()}e.target.reset(),O()}async function _(){a.disable(),a.hide(),v(),i.page+=1;try{const e=await y(i);c(),L(e),N(),i.page===Math.ceil(e.totalHits/15)?a.hide():(c(),a.enable(),a.show())}catch(e){d(`Error ${e}`),a.hide()}}const h=document.querySelector(".form");I(h);h.addEventListener("input",C);h.addEventListener("submit",M);
//# sourceMappingURL=index.js.map
