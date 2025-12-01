import { Controller, Get, Req } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get('/list')
  async findAll() {
    const cats = await this.catsService.findAll();
    return { cats: cats }
  }
}