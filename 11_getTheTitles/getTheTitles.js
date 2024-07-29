const getTheTitles = function(books) {
    let titles = [];
    books.forEach((b) => {
        titles.push(b.title);
    });
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
