import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, Req, ValidationPipe } from "@nestjs/common";
import { BookServices } from "./book.ser.controller";
import { Request } from 'express';
import { CreateUserDto } from "src/username.dto";

@Controller('/books')
export class BookController{
  public bookService : BookServices = new BookServices();
  //Adding a book
@Post('/add')
 addBook(): string{
    return this.bookService.addBook();
}
//Deleting a book
@Delete('/delete')
deleteBook(): string{
    return this.bookService.delBook();
}

@Delete(':id')
@HttpCode(302)
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
//Update a book
@Put('/update')
updateBook(): string {
    return this.bookService.updateBook();
}

@Get()
findAllBooks(): string {
  return 'hellowoeld';
  // return this.bookService.findBook();  
}

@Get('test')
  find(@Req() req: Request, @Query() query:any ) {
    console.log(query), 'hiiiii'
    return 'i am query'; 
  }
 
@Get(':ids')
 findAll(@Req() req: Request,@Param('ids') id: number, @Body(new ValidationPipe({transform: true})) CreateUserDto: CreateUserDto): string {
    console.log(req.params) ,'....';
    console.log(req.body) ,'....body';
    console.log(CreateUserDto, 'CreateUserDto')

    return 'This action returns all cats';
  }

}


