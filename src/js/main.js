"use strict";

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0 || entry.isIntersecting) {
      const target = entry.target;
      observer.unobserve(target);
      if (target.getAttribute("data-loaded") !== "true") {
        if (target.getAttribute("data-src")) {
          target.src = target.getAttribute("data-src");
        }
        if (target.getAttribute("data-background-image")) {
          target.style.backgroundImage = `url('${target.getAttribute("data-background-image")}')`;
        }
        target.setAttribute("data-loaded", true);
      }
    }
  });
});

document.querySelectorAll("img[data-src], div.critical-cam").forEach((x) => observer.observe(x));

const confirmPurchaseButton = document.querySelector(".buttons-wrap .button_yellow");
confirmPurchaseButton.onclick = () => {
  const buttonsContainer = document.querySelector(".buttons-wrap");
  const fridgeInfoContainer = document.querySelector(".card_size_m:nth-child(8) .card-description");
  const purchaseListContainer = document.createElement("div");
  const purchaseListTitle = document.createElement("p");
  const purchaseList = document.createElement("ol");
  const purchaseListItemOne = document.createElement("li");
  const purchaseListItemTwo = document.createElement("li");
  purchaseListContainer.setAttribute("class", "purchase-list-wrap");
  purchaseListTitle.setAttribute("class", "card-description card-description_big description_critical");
  purchaseListTitle.textContent = "Список покупок:";
  purchaseList.setAttribute("class", "purchase-list");
  purchaseListItemOne.setAttribute("class", "purchase-list__item");
  purchaseListItemOne.textContent = "Хлеб";
  purchaseListItemTwo.setAttribute("class", "purchase-list__item");
  purchaseListItemTwo.textContent = "Молоко";
  purchaseListContainer.appendChild(purchaseListTitle);
  purchaseListContainer.appendChild(purchaseList);
  purchaseList.appendChild(purchaseListItemOne);
  purchaseList.appendChild(purchaseListItemTwo);
  fridgeInfoContainer.replaceWith(purchaseListContainer);
  buttonsContainer.style.display = "none";
};

document.getElementsByClassName("header-menu__switcher")[0].addEventListener("click", function () {
  document.getElementsByClassName("header-menu")[0].classList.toggle("header-menu_active");
});
