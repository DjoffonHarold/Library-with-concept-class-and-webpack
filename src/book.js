class Book {
    constructor(title , numberOfPage, author, isRead ){
        this.title = title;
        this.numberOfPage = numberOfPage;
        this.author = author;
        this.isRead = isRead;
    }

    switchStatusBook(){
        this.isRead = !this.isRead
    }

}
export default Book