import{a as y,S as h,i as n}from"./assets/vendor--6n4cVRZ.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const g=async(e,s)=>{const a="54665781-1b012506ba8c9acb61074d03f",r="https://pixabay.com/api/";try{return(await y.get(r,{params:{key:a,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}})).data}catch(t){throw console.error("Error fetching images:",t),t}};let c=null;function p(e){const s=document.querySelector("ul.gallery"),a=e.map(r=>`<li class="gallery-item">
        <a class="gallery-link" href="${r.largeImageURL}">
          <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}"/>
          </a>

            <ul class="info-list">
              <li class="info-item">
                <span class="info-item-label">Likes ${r.likes}</span>
              </li>
              <li class="info-item">
                <span class="info-item-label">Views ${r.views}</span>
              </li>
              <li class="info-item">
                <span class="info-item-label">Comments  ${r.comments}</span>
              </li>
              <li class="info-item">
                <span class="info-item-label">Downloads ${r.downloads}</span>
              </li>

        </ul>
      </li>`).join("");s.insertAdjacentHTML("beforeend",a),c||(c=new h(".gallery a")),c.refresh()}function L(){const e=document.querySelector(".gallery");e&&(e.innerHTML="")}function b(){const e=document.querySelector(".loader");e&&e.classList.remove("is-hidden")}function w(){const e=document.querySelector(".loader");e&&e.classList.add("is-hidden")}function q(){const e=document.querySelector(".Load");e&&e.classList.remove("is-hidden")}function u(){const e=document.querySelector(".Load");e&&e.classList.add("is-hidden")}let d="",i=1,f=0;const S=document.querySelector(".form"),v=document.querySelector(".Load");S.addEventListener("submit",async e=>{if(e.preventDefault(),d=e.currentTarget.elements["search-text"].value.trim(),!d){n.warning({message:"Please enter a search query"});return}i=1,L(),u(),await m(),e.target.reset()});v.addEventListener("click",async()=>{i+=1,u(),await m()});async function m(){b();try{const e=await g(d,i);if(f=e.totalHits,e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query.",position:"topRight"});return}if(p(e.hits),i*15<f?q():(u(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),i>1){const s=document.querySelector(".gallery-item");if(s){const a=s.getBoundingClientRect().height;window.scrollBy({top:a*2,behavior:"smooth"})}}}catch(e){n.error({message:"Error fetching data. Try again!"}),console.error(e)}finally{w()}}
//# sourceMappingURL=index.js.map
