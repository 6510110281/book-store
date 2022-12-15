import Category from "../models/Category";
import { IRepository } from "./IRepository";

export class CategoryRepository implements IRepository<Category> {
  async getAll(): Promise<Category[] | null>{
    return [
        {id: 1,title: 'Computer'},
        {id: 2,title: 'Engineer'},
        {id: 3,title: 'Fantasy'}
    ]
  }
}