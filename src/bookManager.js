import Book from "./book";

class BookManager{
    constructor(){
        this.myLibrary = []
    }

    addBook(title, numberOfPage, author, isRead){
        const book = new Book(title, numberOfPage, author, isRead)
        this.myLibrary.push(book)
        this.displayBook()
    }

    changeStatusBook(index){
        this.myLibrary[index].switchStatusBook()
    }

    removeBook(index){
        this.myLibrary.splice(index, 1)
    }


    displayBook(){
        const bookContainer = document.getElementById('bookContainer')
        bookContainer.innerHTML = " "

        this.myLibrary.forEach((book, index)=>{
            const bookCard = document.createElement("div")
            bookCard.classList.add("book-card")
           
            const bookTitle = document.createElement("div")
            bookTitle.classList.add("book-title")
            bookTitle.textContent = `${book.title}`
            
            const bookAuthor = document.createElement("div")
            bookAuthor.classList.add("book-author")
            bookAuthor.textContent = `Write by ${book.author}`
          
            const bookPages = document.createElement("div")
            bookPages.classList.add("book-pages")
            bookPages.textContent = `Number of page: ${book.pages}`
          
            const bookIsRead = document.createElement("div")
            bookIsRead.classList.add("book-info")
            bookIsRead.textContent = `${book.isRead ? "Read" : "Not Read Yet"}`

            const containerDiv = document.createElement("div")
            containerDiv.classList.add("containerDiv")

            const remove = document.createElement('button')
            remove.classList.add("removeButton")
            remove.textContent = 'remove book'
            remove.style.cursor = 'pointer'
            remove.style.marginLeft = '10px'
            remove.addEventListener('click', ()=>{
                this.removeBook(index)
            })
            const changeStatus = document.createElement('button')
            classList.add("changeStatus")
            changeStatus.textContent = 'change status'
            changeStatus.style.cursor = 'pointer'
            changeStatus.style.marginLeft = '10px'
            changeStatus.addEventListener('click', ()=>{
                this.changeStatusBook(index)
            })
            containerDiv.appendChild(remove)
            containerDiv.appendChild(changeStatus)
            bookCard.appendChild(bookTitle)
            bookCard.appendChild(bookAuthor)
            bookCard.appendChild(bookPages)
            bookCard.appendChild(bookIsRead)
            bookCard.appendChild(containerDiv)
            
            
            bookContainer.appendChild(bookCard)
        })

    }
}

export default BookManager