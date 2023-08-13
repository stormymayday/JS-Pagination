import getElement from "../js/utils/getElement.js";
import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import displayButtons from "./displayButtons.js";
import paginate from "./utils/paginate.js";

const title = getElement('.section-title h1');
const btnContainer = getElement('.btn-container');

let index = 0;
let pages = [];

const setupUI = () => {

    displayFollowers(pages[index]);

    displayButtons(btnContainer, pages, index);

};

const init = async () => {

    const followers = await fetchFollowers();
    // console.log(followers);

    title.textContent = 'pagination';

    // Pagination
    pages = paginate(followers);
    // console.log(pages);

    setupUI();

};

window.addEventListener('load', init);

btnContainer.addEventListener('click', (e) => {

    if (e.target.classList.contains('page-btn')) {
        console.log(e.target.dataset.index);
    }

});