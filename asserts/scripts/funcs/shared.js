import {
  menuItemDetail,
  cardsDetail,
  customersComments,
  foodMenuCategory,
  articleCardDetails,
} from "../data/data.js";
import { getUrlParam, paginateItems } from "./utils.js";

const getAndShowMenuCard = () => {
  const menuItemContainer = document.querySelector("#menu-item-container");
  menuItemDetail.forEach((menuItem) => {
    menuItemContainer.insertAdjacentHTML(
      "beforeend",
      `
              <div class="flex flex-col justify-center items-center gap-y-5 sm:gap-y-6 mx-auto w-[273px] lg:gap-y-[30px] pt-8 sm:pt-9 lg:pt-10 pb-6 sm:pb-7 lg:pb-8 px-3 sm:px-6 lg:px-9 border border-neutral-3 rounded-xl h-[375px] hover:shadow-shadowNormal transition-all duration-300">
                  <div class="flex justify-center items-center">
                      <svg class="w-25 h-25">
                          <use href="#${menuItem.logoId}"></use>
                      </svg>
                  </div>
                  <div class="flex flex-col gap-y-2 sm:gap-y-3  lg:gap-y-4 text-center">
                      <h4 class="font-MorabaBold text-lg sm:text-xl lg:text-2xl">${menuItem.title}</h4>
                      <span class="font-DanaMedium text-center text-base">در عصر جدید فناوری، ما با اطمینان و افتخار به آینده نگاه می کنیم.</span>
                  </div>
                  <div>
                  <a href="menu.html?name=${menuItem.shortName}" class="font-DanaMedium text-base text-primary">مشاهده منو </a>
              </div>
          </div>
              `
    );
  });
};

const getAndShowServices = () => {
  const cardServiceContainer = document.querySelector(
    "#card-service-container"
  );
  cardsDetail.forEach((cardDetail) => {
    cardServiceContainer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="flex flex-col gap-y-5 sm:gap-y-7 lg:gap-y-8 mx-auto w-[253px] h-[250px] lg:h-[500px] lg:w-[306px] hover:translate-y-2 transition-all duration-300 rounded-xl">
            <img src="${cardDetail.imagePath}" class="rounded-xl" alt='${cardDetail.id}'>
            <div class="flex flex-col gap-y-2 px-2 sm:px-4 lg:px-6 sm:gap-y-3 lg:gap-y-4">
                <h5 class="font-MorabaMedium text-xl sm:text-xl lg:text-2xl">${cardDetail.title}</h5>
                <p class="font-DanaMedium text-zinc-500 text-base sm:text-base lg:text-lg">${cardDetail.description}</p>
            </div>
        </div>
       `
    );
  });
};

const getAndShowComments = () => {
  const commentContainer = document.querySelector(".commentContainer");
  customersComments.forEach((comment) => {
    commentContainer.insertAdjacentHTML(
      "beforeend",
      `
              <div class="bg-neutral-2 w-[340px] sm:w-auto mx-auto sm:mx-0 rounded-xl pb-7 pt-9 px-7 sm:pb-8 sm:pt-10 sm:px-8 lg:pb-9 lg:pt-11 lg:px-9">
                  <div class="card-title flex flex-col gap-y-4 sm:gap-y-5 lg:gap-y-6 pb-6 sm:pb-7 lg:pb-8 border-b border-b-neutral-3">
                      <h2 class="font-MorabaMedium text-primary text-lg/9 sm:text-xl/9 lg:text-2xl/9">"${comment.title}"</h2>
                      <span class="font-Dana text-base sm:text-base lg:text-[18px]/7">${comment.comment}</span>        
                  </div>
              <div class="card-footer flex items-center gap-x-3 sm:gap-x-4 lg:gap-x-5 pt-6 sm:pt-7 lg:pt-8">
                  <img src="asserts/images/userAvatar${comment.id}.png" alt="user-avatar" class="w-16 h-16 lg:w-[70px] lg:h-[70px]">
                  <div class="flex flex-col lg:gap-0.5">
                      <h5 class="font-DanaDemi text-sm sm:text-lg lg:text-base font-bold">${comment.name}</h5>
                      <span class="font-Dana text-sm sm:text-lg lg:text-base font-light">${comment.location}</span>
                  </div>
              </div>
          </div>
              `
    );
  });
};

const showAllFoodsInMenu = () => {
  const foodCategoryItemWrapper = document.querySelector("#cardContainer");
  const indexes = ["breakfast", "main-dish", "drinks", "deserts"];
  let urlParam = getUrlParam("name");

  foodCategoryItemWrapper.innerHTML = "";
  if (urlParam) {
    foodMenuCategory[urlParam].forEach((foodItem) => {
      foodCategoryItemWrapper.insertAdjacentHTML(
        "beforeend",
        `
      <div class="card w-[306px] h-[428px] border border-neutral-3 rounded-xl mx-auto sm:mx-0">
        <div class="card-image">
          <img class="rounded-t-xl" src=${
            foodItem.imagePath
          } loading="lazy" alt='${foodItem.id}'>
        </div>
        <div class="info flex flex-col justify-center items-center gap-y-3 sm:gap-y-3 lg:gap-y-4 p-6 sm:p-7 lg:p-8">
          <div class="price flex items-center gap-x-3 text-primary">
            <span class="font-DanaDemi text-2xl">${foodItem.price.toLocaleString()}</span>
            <svg class="w-6 h-6">
              <use href="#toman"></use>
            </svg>
          </div>
          <h2 class="font-DanaMedium text-lg sm:text-lg lg:text-xl">${
            foodItem.title
          }</h2>
          <span class="font-DanaMedium text-zinc-600 text-base sm:text-base lg:text-base text-center">تهیه شده با تخم مرغ، کاهو، نمک، روغن و مواد دیگر.</span>
        </div>
      </div>
      `
      );
    });
  } else {
    indexes.forEach((index) => {
      foodMenuCategory[index].forEach((foodItem) => {
        foodCategoryItemWrapper.insertAdjacentHTML(
          "beforeend",
          `
        <div class="card w-[306px] h-[428px] border border-neutral-3 rounded-xl mx-auto sm:mx-0">
          <div class="card-image">
            <img class="rounded-t-xl" src=${
              foodItem.imagePath
            } loading="lazy" alt='${foodItem.id}'>
          </div>
          <div class="info flex flex-col justify-center items-center gap-y-3 sm:gap-y-3 lg:gap-y-4 p-6 sm:p-7 lg:p-8">
            <div class="price flex items-center gap-x-3 text-primary">
              <span class="font-DanaDemi text-2xl">${foodItem.price.toLocaleString()}</span>
              <svg class="w-6 h-6">
                <use href="#toman"></use>
              </svg>
            </div>
            <h2 class="font-DanaMedium text-lg sm:text-lg lg:text-xl">${
              foodItem.title
            }</h2>
            <span class="font-DanaMedium text-zinc-600 text-base sm:text-base lg:text-base text-center">تهیه شده با تخم مرغ، کاهو، نمک، روغن و مواد دیگر.</span>
          </div>
        </div>
        `
        );
      });
    });
  }
};

const sendCustomerMessage = () => {
  const customerName = document.querySelector("#name");
  const customerPhone = document.querySelector("#phone-number");
  const messageTitle = document.querySelector("#title");
  const messageBody = document.querySelector("#message");
  const submitButton = document.querySelector("#submitBtn");

  submitButton.addEventListener("click", async (event) => {
    const customerMessage = {
      customerName: customerName.value,
      customerPhone: customerPhone.value,
      messageTitle: messageTitle.value,
      messageBody: messageBody.value,
    };

    // const res = await fetch(
    // "https://bistro-fa3f0-default-rtdb.asia-southeast1.firebasedatabase.app/messages.json",
    // {
    // method: "POST",
    // headers: {
    // "Content-type": "application/json",
    // },
    // body: JSON.stringify(customerMessage),
    // }
    // );
    // const result = await res.json();

    iziToast.show({
      class: "sumbit__toast",
      title: "پیام شما ثبت شد",
      message: "منتظر تماس ما باشید",
      color: "green",
      position: "topLeft",
      rtl: true,
    });
  });
};

const getAndShowArticles = () => {
  const articleCardContainer = document.querySelector("#article-container");
  const paginationElem = document.querySelector(".pagination__list");
  const currentPage = getUrlParam("page");
  const paginatedArticles = paginateItems(
    articleCardDetails,
    4,
    paginationElem,
    currentPage
  );

  articleCardContainer.innerHTML = "";
  paginatedArticles.forEach((article) => {
    articleCardContainer.insertAdjacentHTML(
      "beforeend",
      `
        <div class="border-2 border-neutral-2 bg-white lg:w-[306px] lg:h-[340px] rounded-xl group">
        <div class="relative">
            <img class="rounded-t-xl w-full" src=${article.imageDir} loading="lazy" alt='${article.id}'>
            <div class='absolute inset-0 flex-center group-hover:bg-primary/70 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 delay-100 rounded-t-xl'>
                <div class='flex items-center gap-x-2'>
                    <svg class="w-10 h-10">
                        <use href="#bistro-white"></use>
                    </svg>
                    <span class="font-MorabaMedium text-white text-xl">بیسترو بلاگ</span>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-start gap-y-2 lg:gap-y-3 px-5 py-6 lg:px-6 lg:py-7 rounded-b-xl ">
            <span class="text-sm text-zinc-600">۱۸ دی ۱۴۰۲</span>
            <a href="#" class="font-DanaMedium line-clamp-2 text-xl transition-colors duration-300 group-hover:text-primary">${article.title}</a>
        </div>
    </div>
        `
    );
  });
};

const sendReservationRequest = () => {};

const searchInArticles = async () => {
  const articleCardContainer = document.querySelector("#article-container");
  const paginationElem = document.querySelector(".pagination__list");
  
  const searchBar = document.querySelector(".search-bar__input");
  const searchBarButton = document.querySelector(".search-bar__button");

  searchBarButton.addEventListener("click", () => {
    let filteredArticles = articleCardDetails.filter((article) => {
      return article.title.includes(searchBar.value.trim());
    });
    const paginatedArticles = paginateItems(
      filteredArticles,
      4,
      paginationElem,
      1
    );
    articleCardContainer.innerHTML = "";

    if (searchBar.value) {
      paginatedArticles.forEach((article) => {
        articleCardContainer.insertAdjacentHTML(
          "beforeend",
          `
          <div class="border-2 border-neutral-2 bg-white lg:w-[306px] lg:h-[340px] rounded-xl group">
          <div class="relative">
              <img class="rounded-t-xl w-full" src=${article.imageDir} loading="lazy" alt='${article.id}'>
              <div class='absolute inset-0 flex-center group-hover:bg-primary/70 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 delay-100 rounded-t-xl'>
                  <div class='flex items-center gap-x-2'>
                      <svg class="w-10 h-10">
                          <use href="#bistro-white"></use>
                      </svg>
                      <span class="font-MorabaMedium text-white text-xl">بیسترو بلاگ</span>
                  </div>
              </div>
          </div>
          <div class="flex flex-col items-start gap-y-2 lg:gap-y-3 px-5 py-6 lg:px-6 lg:py-7 rounded-b-xl ">
              <span class="text-sm text-zinc-600">۱۸ دی ۱۴۰۲</span>
              <a href="#" class="font-DanaMedium line-clamp-2 text-xl transition-colors duration-300 group-hover:text-primary">${article.title}</a>
          </div>
      </div>
          `
        );
      });
    }
    else {
      getAndShowArticles();
    }
  });
};

export {
  getAndShowMenuCard,
  getAndShowServices,
  getAndShowComments,
  showAllFoodsInMenu,
  sendCustomerMessage,
  getAndShowArticles,
  searchInArticles,
};
