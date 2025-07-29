import {Injectable} from "@nestjs/common";

@Injectable()
export class CatsService {
  async findAll(): Promise<string[]> {
    return ['1', '2', '3'];
  }
}
