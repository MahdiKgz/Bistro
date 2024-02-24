import { getAndShowArticles, searchInArticles } from "./funcs/shared.js";
import { addParamToUrl } from "./funcs/utils.js";

window.addParamToUrl = addParamToUrl 

window.addEventListener('load' , () => {
    getAndShowArticles();
    searchInArticles();

})