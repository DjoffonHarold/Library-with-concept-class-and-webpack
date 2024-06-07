class Book {
    constructor(title , author,numberOfPage,  isRead ){
        this.title = title;
        this.author = author;
        this.numberOfPage = numberOfPage;
        this.isRead = isRead;
    }

    switchStatusBook(){
        this.isRead = !this.isRead
    }

}
export default Book