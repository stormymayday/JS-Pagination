const displayButtons = (container, pages, activeIndex) => {

    // console.log(container, pages, activeIndex);

    let btns = pages.map((_, pageIndex) => {

        return `<button class="page-btn">${pageIndex + 1}</button>`;

    });

    container.innerHTML = btns;

};

export default displayButtons;