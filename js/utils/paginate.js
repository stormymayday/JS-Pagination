const paginate = (followers) => {

    const itemsPerPage = 9;

    // Calculating the number of pages
    const numberOfPages = Math.ceil(followers.length / itemsPerPage);

};

export default paginate;