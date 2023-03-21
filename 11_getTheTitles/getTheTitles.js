const getTheTitles = function() {
    let result = books.map(a => a.title);
    return result
};

const books = [
    {
        title: 'Book',
        author: 'Name'
        },
        {
        title: 'Book2',
        author: 'Name2'
    }
]

// getTheTitles(books);
// console.log(books.title);



// Do not edit below this line
module.exports = getTheTitles;
