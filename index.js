import{a as f,S as m,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="50359405-06880261cab6b6c9083941b34",y="https://pixabay.com/api/";async function g(s){return(await f.get(y,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),d=document.querySelector(".loading-text"),h=new m(".gallery a");function b(s){const o=s.map(t=>`
    <li class="gallery-item">
      <a href="${t.largeImageURL}">
        <img src="${t.webformatURL}" alt="${t.tags}" />
      </a>
      <div class="info">
        <p><b>Likes:</b> ${t.likes}</p>
        <p><b>Views:</b> ${t.views}</p>
        <p><b>Comments:</b> ${t.comments}</p>
        <p><b>Downloads:</b> ${t.downloads}</p>
      </div>
    </li>`).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){c.innerHTML=""}function w(){l.classList.remove("is-hidden"),d.classList.remove("is-hidden")}function q(){l.classList.add("is-hidden"),d.classList.add("is-hidden")}const u=document.querySelector(".form"),v=u.querySelector('input[name="search-text"]');u.addEventListener("submit",async s=>{s.preventDefault();const o=v.value.trim();if(!o){n.warning({title:"Warning",message:"Please enter a search query!"});return}L(),w();try{const a=(await g(o)).hits;a.length===0?n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff",timeout:4e3}):b(a)}catch{n.error({title:"Error",message:"Failed to fetch images."})}finally{q()}});
//# sourceMappingURL=index.js.map
