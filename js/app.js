import fetchFollowers from "./fetchFollowers.js";
import getElement from "../js/utils/getElement.js";

const title = getElement('.section-title h1');
console.log(title);

const init = async () => {

    const followers = await fetchFollowers();

    console.log(followers);

};

window.addEventListener('load', init);