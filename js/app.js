import getElement from "../js/utils/getElement.js";
import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";

const title = getElement('.section-title h1');


const init = async () => {

    const followers = await fetchFollowers();
    // console.log(followers);

    displayFollowers(followers);

    title.textContent = 'pagination';

};

window.addEventListener('load', init);