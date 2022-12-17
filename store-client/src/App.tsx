import Repo from './repositories'
import Category from './models/Category';
import { useEffect, useState } from 'react'
import Book from './models/Book';
import BookDetail from './components/BookDetail';
import BookForm from './components/BookForm';

function App() {
  const [categoryList, setCategoryList] = useState<Category[]>([])
  const [bookList, setbookList] = useState<Book[]>([])
  const [filter, setFilter] = useState<string>('')

  const fetchCategoryList = async () => {
    const result = await Repo.categories.getAll()
    if (result) {
      setCategoryList(result)
    }
  }

  const fetchbookList = async () => {
    const result = await Repo.book.getAll({categoryId: filter})
    if(result){
      setbookList(result)
    }
  }

  const onCreateBook = async (book: Partial<Book>) => {
    await Repo.book.create(book)
    fetchbookList()
  }

  const onUpdateBook = async (book: Partial<Book>) => {
    await Repo.book.update(book)
    fetchbookList()
  }

  const onDeleteBook = async (id: number) => {
    await Repo.book.delete(id)
    fetchbookList()
  }

  useEffect(() => {
    fetchCategoryList()
    fetchbookList()
  },[filter])

  return (
    <div>
      <div>
        <BookForm book={{}} categoryList={categoryList} callbackFn={onCreateBook} />
        <hr />
      </div>
      <div>
        <select onChange={e => setFilter(e.target.value)}>
          <option value="">All</option>
          {categoryList.map(category => <option key={category.id} value={category.id}>{category.title}</option>)}
        </select>
        <hr />
      </div>
      {bookList.map(book =>
        <div key={book.id}>
          <p>
          <BookDetail {...book} />
          </p>
          <BookForm book={book} categoryList={categoryList} callbackFn={onUpdateBook} />
          <button onClick={e => onDeleteBook(book.id)}>Delete</button>
          <hr />
        </div>
      )}
    </div>
  )
}

export default App;
