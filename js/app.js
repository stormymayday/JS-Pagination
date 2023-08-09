import fetchFollowers from "./fetchFollowers.js";
import getElement from "../js/utils/getElement.js";

const title = getElement('.section-title h1');


const init = async () => {

    const followers = await fetchFollowers();
    // console.log(followers);

    title.textContent = 'pagination';

};

window.addEventListener('load', init);