import Book from "./book.js";

class BookManager{
    constructor() {
        this.library = this.loadLibrary(0) || []
    }

    addBook(title , author,numberOfPage,  isRead){
        const book = new Book(title , author,numberOfPage,  isRead)
        this.library.push(book)
        this.saveLibrary()
        this.displayBook()
    }

    changeStatusBook(index){
        this.library[index].switchStatusBook()
        this.saveLibrary()
        this.displayBook()
    }

    removeBook(index){
        this.library.splice(index, 1)
        this.saveLibrary()
        this.displayBook()
    }

    editBook(index, newTitle, newAuthor, newNumberOfPage, newIsRead){
        const book = this.library[index]
        book.title = newTitle;
        book.author = newAuthor;
        book.numberOfPage = newNumberOfPage;
        book.isRead = newIsRead;
        this.saveLibrary()
        this.displayBook()

    }
    saveLibrary(){
        localStorage.setItem('bookManager', JSON.stringify(this.library))
    }
    loadLibrary(){
        const library = localStorage.getItem('bookManager')
        return library? JSON.parse(library): null
    }


    displayBook(){
        const bookContainer = document.querySelector('.space-book')
        bookContainer.innerHTML = " "

        this.library.forEach((book, index)=>{
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
            bookPages.textContent = `Number of page: ${book.numberOfPage}`
          
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
            changeStatus.classList.add("changeStatus")
            changeStatus.textContent = 'change status'
            changeStatus.style.cursor = 'pointer'
            changeStatus.style.marginLeft = '10px'
            changeStatus.addEventListener('click', ()=>{
                this.changeStatusBook(index)
            })

            const editNewBook = document.createElement('button')
            editNewBook.textContent = 'edit'
            editNewBook.classList.add('editNewBook')
            editNewBook.style.cursor = 'pointer'
            editNewBook.style.marginLeft = '10px'
            editNewBook.addEventListener('click', ()=>{
                const newTitle = prompt('newTitle', `${book.title}`)
                const newAuthor = prompt('newAuthor', `${book.author}`)
                const newNumberOfPage = prompt('newNumberOfPage', `${book.numberOfPage}`)
                const newIsRead = prompt('newIsRead', `${book.isRead}`)
                this.editBook(index, newTitle, newAuthor, newNumberOfPage, newIsRead)
            })


            containerDiv.appendChild(remove)
            containerDiv.appendChild(changeStatus)
            containerDiv.appendChild(editNewBook)
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