import { Controller, Delete, Get, Injectable, Param, Post, Put } from "@nestjs/common";

export class BookServices {
    @Post()
    addBook(): string {
        return ' this will add book';
    }
    @Delete()
    delBook(): string {
        return 'this will delete book';

    }
    @Put()
    updateBook(): string {
        return 'this will update book';

    }
    @Get()
    findBook(): string{
        return ' this will find all book'
    }
    @Get(':id')
findOne(@Param() params: any): string {
  console.log(params.id);
  return `This action returns a #${params.id} cat`;
}
}