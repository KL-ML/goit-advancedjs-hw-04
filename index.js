var E=Object.defineProperty;var q=(e,t,o)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;var p=(e,t,o)=>q(e,typeof t!="symbol"?t+"":t,o);import{i as D,a as F,S as $}from"./assets/vendor-B-D547pe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();function u(e){D.error({timeout:3e3,message:`${e}`,position:"topRight",backgroundColor:"rgba(239, 64, 64, 0.99)",messageColor:"#FFFFFF",icon:"",close:!1})}const f="search-form-state";function A(e){const t=e.target.form.elements.searchQuery.value.trim();localStorage.setItem(f,JSON.stringify(t))}function C(e){const t=JSON.parse(localStorage.getItem(f));t&&(e.elements.searchQuery.value=t)}function I(){localStorage.removeItem(f)}const O="30636701-b7bfaf1719dc5d89c8acde7b5",P="https://pixabay.com/api/",i={key:O,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,q:"",page:1};async function y(){const{data:e}=await F.get(P,{params:i});return e}const b=document.querySelector(".gallery"),S=document.querySelector(".loader-wraper");function L(e){const t=e.hits.map(({webformatURL:o,largeImageURL:l,tags:r,likes:s,views:n,comments:v,downloads:w})=>`
            <div class="photo-card">
              <a href="${l}" class="img-link">
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
                      <b>Comments </b>${v}
                  </p>
                  <p class="info-item">
                      <b>Downloads </b>${w}
                  </p>
              </div>
            </div>
        `).join("");b.insertAdjacentHTML("beforeend",t),new $("ul.gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function g(){b.innerHTML=""}function H(){S.classList.add("active")}function d(){S.classList.remove("active")}function N(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}const c=class c{constructor(t){this.button=t}disable(){this.button.disabled=!0}enable(){this.button.disabled=!1}hide(){this.button.classList.add(c.HIDDEN_CLASS)}show(){this.button.classList.remove(c.HIDDEN_CLASS)}};p(c,"HIDDEN_CLASS","hidden");let m=c;const T=document.querySelector(".form"),a=new m(document.querySelector(".load-more"));async function M(e){e.preventDefault();const t=e.currentTarget.elements.searchQuery.value.trim();if(t===""){u("Enter your search request");return}a.disable(),a.hide(),g(),H(),i.q=t;try{const o=await y();if(o.total===0){u("Sorry, there are no images matching your search query. Please try again!"),a.hide(),d(),g();return}d(),L(o),i.page===Math.ceil(o.totalHits/15)?a.hide():(a.enable(),a.show(),a.button.addEventListener("click",_))}catch(o){u(`Error ${o}`),d()}finally{T.reset()}e.target.reset(),I()}async function _(){a.disable(),i.page+=1;try{const e=await y(i);a.hide(),L(e),N(),i.page===Math.ceil(e.totalHits/15)?a.hide():(a.enable(),a.show())}catch(e){u(`Error ${e}`),a.hide()}}const h=document.querySelector(".form");C(h);h.addEventListener("input",A);h.addEventListener("submit",M);
//# sourceMappingURL=index.js.map
