"use strict";const t=new IntersectionObserver((t,e)=>{t.forEach(t=>{if(t.intersectionRatio>0||t.isIntersecting){const c=t.target;e.unobserve(c),"true"!==c.getAttribute("data-loaded")&&(c.getAttribute("data-src")&&(c.src=c.getAttribute("data-src")),c.getAttribute("data-background-image")&&(c.style.backgroundImage=`url('${c.getAttribute("data-background-image")}')`),c.setAttribute("data-loaded",!0))}})});document.querySelectorAll("img[data-src], div.critical-cam").forEach(e=>t.observe(e));const e=document.querySelector(".buttons-wrap .button_yellow");e.onclick=()=>{const t=document.querySelector(".buttons-wrap"),e=document.querySelector(".card_size_m:nth-child(8) .card-description"),c=document.createElement("div"),r=document.createElement("p"),a=document.createElement("ol"),s=document.createElement("li"),n=document.createElement("li");c.setAttribute("class","purchase-list-wrap"),r.setAttribute("class","card-description card-description_big description_critical"),r.textContent="Список покупок:",a.setAttribute("class","purchase-list"),s.setAttribute("class","purchase-list__item"),s.textContent="Хлеб",n.setAttribute("class","purchase-list__item"),n.textContent="Молоко",c.appendChild(r),c.appendChild(a),a.appendChild(s),a.appendChild(n),e.replaceWith(c),t.style.display="none"},document.getElementsByClassName("header-menu__switcher")[0].addEventListener("click",(function(){document.getElementsByClassName("header-menu")[0].classList.toggle("header-menu_active")}));