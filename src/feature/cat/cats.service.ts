import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  constructor() {}

  async findAll(): Promise<string[]> {
    return ['test'];
  }
}