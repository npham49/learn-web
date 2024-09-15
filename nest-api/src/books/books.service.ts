import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  create(createBookDto: CreateBookDto) {
    return {
      message: 'Book created',
    };
  }

  findAll() {
    return {
      message: 'Books fetched',
    };
  }

  findOne(id: number) {
    return {
      message: `Book with id ${id} fetched`,
    };
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return {
      message: `Book with id ${id} updated`,
    };
  }

  remove(id: number) {
    return {
      message: `Book with id ${id} removed`,
    };
  }
}
