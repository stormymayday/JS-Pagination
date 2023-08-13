const paginate = (followers) => {

    const itemsPerPage = 10;

    // Calculating the number of pages
    const numberOfPages = Math.ceil(followers.length / itemsPerPage);

    // Creating array of arrays
    const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {

        const start = index * itemsPerPage;

        return followers.slice(start, start + itemsPerPage);

    });

    return newFollowers;

};

export default paginate;