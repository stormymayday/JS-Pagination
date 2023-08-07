const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

const fetchFollowers = async () => {

    try {

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.error(error);

    }

};

export default fetchFollowers;