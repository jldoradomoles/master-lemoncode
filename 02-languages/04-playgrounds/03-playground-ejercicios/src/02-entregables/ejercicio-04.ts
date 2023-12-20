console.log("************** DELIVERABLE 04 *********************");

type book = {
    title: string,
    isRead: boolean,
};


const books: book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];

function isBookRead(books: book[], titleToSearch: string) {
   let readed: boolean;
    books.forEach(book => {
       readed = book.title === titleToSearch ? true : false;
    });
    return readed
};



console.log(isBookRead(books, 'Devastación'));
console.log(isBookRead(books, 'Canción de hielo y fuego'));
console.log(isBookRead(books, 'Harry Potter y la piedra filosofal'));
