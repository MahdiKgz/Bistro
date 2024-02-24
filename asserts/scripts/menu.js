import { showAllFoodsInMenu } from "./funcs/shared.js";
import { foodMenuCategory } from "./data/data.js";
import { getUrlParam } from "./funcs/utils.js";


const foodCategoryItemWrapper = document.querySelector("#cardContainer");

window.addEventListener("load", () => {
  showAllFoodsInMenu();
});

//categorization on Desktop Mode
const destkopCategoryBtns = document.querySelectorAll(".category-btn");

destkopCategoryBtns.forEach((destkopCategoryBtn) => {
  destkopCategoryBtn.addEventListener("click", (event) => {
    destkopCategoryBtns.forEach((otherBtns) =>
      otherBtns.classList.remove("activeItem")
    );

    event.target.classList.add("activeItem");

    let categoryIndex = event.target.dataset.key;
    
    foodCategoryItemWrapper.innerHTML = "";

    if (categoryIndex === "all") {
      showAllFoodsInMenu();
    } else {
      foodMenuCategory[categoryIndex].forEach((categorizedItem) => {
        foodCategoryItemWrapper.insertAdjacentHTML(
          "beforeend",
          `
        <div class="card w-[306px] h-[428px] border border-neutral-3 rounded-xl mx-auto sm:mx-0">
          <div class="card-image">
            <img class="rounded-t-xl" src=${
              categorizedItem.imagePath
            } loading="lazy" alt='${categorizedItem.id}'>
          </div>
          <div class="info flex flex-col justify-center items-center gap-y-3 sm:gap-y-3 lg:gap-y-4 p-6 sm:p-7 lg:p-8">
            <div class="price flex items-center gap-x-3 text-primary">
              <span class="font-DanaDemi text-2xl">${categorizedItem.price.toLocaleString()}</span>
              <svg class="w-6 h-6">
                <use href="#toman"></use>
              </svg>
            </div>
            <h2 class="font-DanaMedium text-lg sm:text-lg lg:text-xl">${
              categorizedItem.title
            }</h2>
            <span class="font-DanaMedium text-zinc-600 text-base sm:text-base lg:text-base text-center">تهیه شده با تخم مرغ، کاهو، نمک، روغن و مواد دیگر.</span>
          </div>
        </div>
        `
        );
      });
    }
  });
});

//categorization on Mobile Mode
const mobileCategoryBtns = document.querySelectorAll(
  ".moblie-category__list-item"
);
const mobileCategoryTitle = document.querySelector(".mobile-category__title");

mobileCategoryBtns.forEach((mobileCategoryBtn) => {
  mobileCategoryBtn.addEventListener("click", (event) => {
    mobileCategoryBtns.forEach((otherBtns) =>
      otherBtns.classList.remove("activeItem")
    );

    event.target.classList.add("activeItem");
    mobileCategoryTitle.innerHTML = "";
    mobileCategoryTitle.insertAdjacentHTML(
      "beforeend",
      `
    ${event.target.innerHTML}
    <svg class="mobile-category__title-icon w-4 h-4 group-hover:rotate-180 transition-all duration-200">
      <use href="#chevron-down"></use>
    </svg>
    
    `
    );
    let categoryIndex = event.target.dataset.key;
    foodCategoryItemWrapper.innerHTML = "";

    if (categoryIndex === "all") {
      showAllFoodsInMenu();
    } else {
      foodMenuCategory[categoryIndex].forEach((categorizedItem) => {
        foodCategoryItemWrapper.insertAdjacentHTML(
          "beforeend",
          `
        <div class="card w-[306px] h-[428px] border border-neutral-3 rounded-xl mx-auto sm:mx-0">
          <div class="card-image">
            <img class="rounded-t-xl" src=${
              categorizedItem.imagePath
            } loading="lazy" alt='${categorizedItem.id}'>
          </div>
          <div class="info flex flex-col justify-center items-center gap-y-3 sm:gap-y-3 lg:gap-y-4 p-6 sm:p-7 lg:p-8">
            <div class="price flex items-center gap-x-3 text-primary">
              <span class="font-DanaDemi text-2xl">${categorizedItem.price.toLocaleString()}</span>
              <svg class="w-6 h-6">
                <use href="#toman"></use>
              </svg>
            </div>
            <h2 class="font-DanaMedium text-lg sm:text-lg lg:text-xl">${
              categorizedItem.title
            }</h2>
            <span class="font-DanaMedium text-zinc-600 text-base sm:text-base lg:text-base text-center">تهیه شده با تخم مرغ، کاهو، نمک، روغن و مواد دیگر.</span>
          </div>
        </div>
        `
        );
      });
    }
  });
});
