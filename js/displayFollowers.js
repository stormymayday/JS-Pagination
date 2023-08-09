aimport getElement from "./utils/getElement.js";

const container = getElement('.container');

const displayFollowers = (followers) => {

    // console.log(followers);

    const newFollowers = followers.map((follower) => {

        const { avatar_url, login, html_url } = followers;

        return `<article class="card">
        <img src="${avatar_url}" alt="${login}">
        <h4>${login}</h4>
        <a href="${html_url} class="btn" target="_blank">view profile</a>
        </article>`

    });

};

export default displayFollowers;