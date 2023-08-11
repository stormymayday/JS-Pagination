import getElement from "../js/utils/getElement.js";
import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./utils/paginate.js";

const title = getElement('.section-title h1');
const btnContainer = getElement('.btn-container');

let index = 0;
let pages = [];

const setupUI = () => {

};

const init = async () => {

    const followers = await fetchFollowers();
    // console.log(followers);

    title.textContent = 'pagination';

    // Pagination
    pages = paginate(followers);
    console.log(pages);

};

window.addEventListener('load', init);