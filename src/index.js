import './style.css'
import BookManager from './bookManager'

const bookManager = new BookManager()
document.getElementById('open-dialog').addEventListener('click',()=>{
    document.getElementById('task-dialog').showModal()
})

document.getElementById('close-dialog').addEventListener('click',()=>{
    document.getElementById('task-dialog').close()
})

document.getElementById('Add-books').addEventListener('submit', (event)=>{
    event.preventDefault
    
   const title = document.getElementById('title').Value
   const numberOfPage =  document.getElementById('pages').Value
   const author = document.getElementById('author').Value
   const isRead =  document.getElementById('isRead').Value

   bookManager.addBook(title, numberOfPage, author, isRead)
    
    document.getElementById('bookContainer').appendChild(bookCard)
    document.querySelector('.form').reset()
    document.getElementById('task-dialog').close
})
