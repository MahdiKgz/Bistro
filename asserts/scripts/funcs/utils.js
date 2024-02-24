const getUrlParam = (key) => {
  let param = new URLSearchParams(window.location.search);
  return param.get(key);
};

const addParamToUrl = (param, value) => {
  let url = new URL(location.href);
  let searchParams = url.searchParams;

  searchParams.set(param, value);
  url.search = searchParams.toString();
  location.href = url.toString();
};

const paginateItems = (
  array,
  itemsPerPage,
  paginateParentElem,
  currentPage
) => {
  paginateParentElem.innerHTML = "";
  let endIndex = itemsPerPage * currentPage;
  let startIndex = endIndex - itemsPerPage;
  let paginatedItems = array.slice(startIndex, endIndex);
  let paginatedCount = Math.ceil(array.length / itemsPerPage);

  for (let i = 1; i <= paginatedCount; i++) {
    paginateParentElem.insertAdjacentHTML(
      "beforeend",
      `
        
            ${
              i === Number(currentPage)
                ? `
            
            <li onclick="addParamToUrl('page',${i})" class="pagination__list-item flex items-center justify-center w-10 h-10 p-3 rounded-md activeItem">${i}</li>
            
            `
                : `
            
            <li onclick="addParamToUrl('page',${i})" class="pagination__list-item flex items-center justify-center w-10 h-10 p-3 rounded-md">${i}</li>
            `
            }
        
        
        `
    );
  }

  return paginatedItems;
};

export { getUrlParam, addParamToUrl, paginateItems };
