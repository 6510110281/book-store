import { CategoryRepository } from "./CategoryRepository";
import { BookRepository } from "./BookRepository";

const repositories = {
    categories: new CategoryRepository(),
    book: new BookRepository()
}

export default repositories
