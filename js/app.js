import fetchFollowers from "./fetchFollowers.js";

const init = async () => {

    const followers = await fetchFollowers();

    console.log(followers);

};

window.addEventListener('load', init);