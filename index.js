var w=Object.defineProperty;var A=(e,t,s)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var m=(e,t,s)=>A(e,typeof t!="symbol"?t+"":t,s);import{i as D,a as q,S as M}from"./assets/vendor-B-D547pe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function d(o){if(o.ep)return;o.ep=!0;const a=s(o);fetch(o.href,a)}})();function u(e){D.error({timeout:3e3,message:`${e}`,position:"topRight",backgroundColor:"rgba(239, 64, 64, 0.99)",messageColor:"#FFFFFF",icon:"",close:!1})}const h="search-form-state";function F(e){const t=e.target.form.elements.searchQuery.value.trim();localStorage.setItem(h,JSON.stringify(t))}function N(e){const t=JSON.parse(localStorage.getItem(h));t&&(e.elements.searchQuery.value=t)}function $(){localStorage.removeItem(h)}const I="30636701-b7bfaf1719dc5d89c8acde7b5",O="https://pixabay.com/api/",i={key:I,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,q:"",page:1};async function y(){const{data:e}=await q.get(O,{params:i});return e}const b=document.querySelector(".gallery"),S=document.querySelector(".loader-wraper");function E(e){const t=e.hits.map(({webformatURL:s,largeImageURL:d,tags:o,likes:a,views:c,comments:v,downloads:C})=>`
            <div class="photo-card">
              <a href="${d}" class="img-link">
                  <img class="img" src="${s}" alt="${o}" width=360px; loading="lazy" />
              </a>
              <div class="info">
                  <p class="info-item">
                      <b>Likes </b>${a}
                  </p>
                  <p class="info-item">
                      <b>Views </b>${c}
                  </p>
                  <p class="info-item">
                      <b>Comments </b>${v}
                  </p>
                  <p class="info-item">
                      <b>Downloads </b>${C}
                  </p>
              </div>
            </div>
        `).join("");b.insertAdjacentHTML("beforeend",t),new M("ul.gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function g(){b.innerHTML=""}function L(){S.classList.add("active")}function l(){S.classList.remove("active")}function P(){const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}const n=class n{constructor(t){this.button=t}disable(){this.button.disabled=!0}enable(){this.button.disabled=!1}hide(){this.button.classList.add(n.HIDDEN_CLASS)}show(){this.button.classList.remove(n.HIDDEN_CLASS)}addEndCollectionMessage(){this.button.classList.add(n.END_MESSAGE_CLASS),this.button.textContent="We're sorry, but you've reached the end of search results."}removeEndCollectionMessage(){this.button.classList.remove(n.END_MESSAGE_CLASS),this.button.textContent="Load more"}};m(n,"HIDDEN_CLASS","hidden"),m(n,"END_MESSAGE_CLASS","end-message");let f=n;const H=document.querySelector(".form"),r=new f(document.querySelector(".load-more"));async function _(e){e.preventDefault();const t=e.currentTarget.elements.searchQuery.value.trim();if(t===""){u("Enter your search request");return}r.disable(),r.hide(),g(),L(),i.q=t,i.page=1;try{const s=await y();if(s.total===0){u("Sorry, there are no images matching your search query. Please try again!"),r.hide(),l(),g();return}l(),E(s),i.page===Math.ceil(s.totalHits/15)?(r.show(),r.addEndCollectionMessage()):(r.removeEndCollectionMessage(),r.enable(),r.show(),r.button.addEventListener("click",x))}catch(s){u(`Error ${s}`),l()}finally{H.reset()}e.target.reset(),$()}async function x(){r.disable(),r.hide(),L(),i.page+=1;try{const e=await y(i);l(),E(e),P(),i.page===Math.ceil(e.totalHits/15)?(r.addEndCollectionMessage(),r.show()):(r.removeEndCollectionMessage(),l(),r.enable(),r.show())}catch(e){u(`Error ${e}`),r.hide()}}const p=document.querySelector(".form");N(p);p.addEventListener("input",F);p.addEventListener("submit",_);
//# sourceMappingURL=index.js.map
