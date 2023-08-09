import getElement from "./utils/getElement.js";

const container = getElement('.container');

const displayFollowers = (followers) => {

    // console.log(followers);

    const newFollowers = followers.map((follower) => {

        const { avatar_url, login, html_url } = followers;

    });

};

export default displayFollowers;