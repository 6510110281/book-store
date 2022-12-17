import Book from "../models/Book";

function BookDetail(props: Book) {

  return (
    <div className="element">
      <p><b>
      <div>{props.title}</div> 
      <div>{props.price}</div>
      <div>{props.stockAmount}</div>
      <div>{props.category?.title}</div>
      </b></p>
    </div>
  )
}

export default BookDetail;