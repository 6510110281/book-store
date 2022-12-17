import Repo from './repositories'
import Category from './models/Category';
import { useEffect, useState } from 'react'
import Book from './models/Book';
import BookDetail from './components/BookDetail';

function App() {
  const [categoryList, setCategoryList] = useState<Category[]>([])
  const [bookList, setbookList] = useState<Book[]>([])

  const fetchCategoryList = async () => {
    const result = await Repo.categories.getAll()
    if (result) {
      setCategoryList(result)
    }
  }

  const fetchbookList = async () => {
    const result = await Repo.book.getAll()
    if(result){
      setbookList(result)
    }
  }


  useEffect(() => {
    fetchCategoryList()
    fetchbookList()
  })

  return (
    <div>
      <div>
      {categoryList.map(category => <p key={category.id}> ID : {category.id} Title : {category.title}</p>)}
      </div>
      <hr />
      <div>
        {bookList.map(book => <div key={book.id}><BookDetail {...book}/> <hr /> </div> )}
      </div>
    </div>

  )
}

export default App;
