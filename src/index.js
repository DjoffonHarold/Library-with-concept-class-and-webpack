import './style.css'
import BookManager from './bookManager.js'







document.getElementById('open-dialog').addEventListener('click',()=>{
    document.getElementById('task-dialog').showModal()
})

document.getElementById('close-dialog').addEventListener('click',()=>{
    document.getElementById('task-dialog').close()
})

const bookManager = new BookManager()

bookManager.displayBook()

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
