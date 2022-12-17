import Book from "../models/Book";

function BookDetail(props: Book) {

  return (
    <div className="element">
      <p><b>
      <div>Title : {props.title}</div> 
      <div>Price : {props.price}</div>
      <div>Stock Amout : {props.stockAmount}</div>
      <div>Category : {props.category?.title}</div>
      </b></p>
    </div>
  )
}

export default BookDetail;