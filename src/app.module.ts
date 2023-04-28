import { Module } from '@nestjs/common';
import { BookController } from './Controllers/book.controllers';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [],
})
export class AppModule {}
