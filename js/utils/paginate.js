const paginate = (followers) => {

    // console.log(followers);

    const itemsPerPage = 10;

    // Calculating the number of pages
    const numberOfPages = followers.length / itemsPerPage;
    console.log(numberOfPages);

};

export default paginate;