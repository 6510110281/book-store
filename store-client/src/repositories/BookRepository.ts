import Book from "../models/Book";
import { IRepository } from "./IRepository";

export class BookRepository implements IRepository<Book> {
  async getAll(): Promise<Book[] | null>{
    return [
        {
          id: 1 , title: 'Com1' , price: 500 , stockAmount: 99 ,
          category: {id : 1,title: 'Computer'}
        },
        {
          id: 2 , title: 'Com2' , price: 750 , stockAmount: 100 ,
          category: {id : 1,title: 'Computer'}
        }
    ]
  }
}
