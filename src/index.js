import './style.css'
import BookManager from './bookManager.js'

const bookManager = new BookManager()
bookManager.addBook("The Hobbit", "J.R.R. Tolkien", 254, false)
bookManager.addBook("Dune", "Frank Herbert", 300, true)
bookManager.addBook("Harry Potter ", "J.K. Rowling", 150, true)
bookManager.addBook("Atomic Habbit", "Jame", 150, true)




document.getElementById('open-dialog').addEventListener('click',()=>{
    document.getElementById('task-dialog').showModal()
})

document.getElementById('close-dialog').addEventListener('click',()=>{
    document.getElementById('task-dialog').close()
})

document.getElementById('task-form').addEventListener('submit', (event)=>{
    event.preventDefault()
    
   const title = document.getElementById('title').value
   const numberOfPage =  document.getElementById('pages').value
   const author = document.getElementById('author').value
   const isRead =  document.getElementById('isRead').checked

    bookManager.addBook(title, numberOfPage, author, isRead)
    

    document.getElementById('bookContainer').appendChild(bookCard)
    
    document.querySelector('.form').reset()
    document.getElementById('task-dialog').close()
})
