import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Test } from '@nestjs/testing';

describe('CatsController', () => {
  let catsController: CatsController;
  let catsService: CatsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    catsController = moduleRef.get(CatsController);
    catsService = moduleRef.get(CatsService);
  })

  describe('findAll', () => {
    it('Should return an array of cats', async () => {
      const result = ['test'];
      jest.spyOn(catsService, 'findAll').mockImplementationOnce(async () => result);
      expect(await catsService.findAll()).toBeInstanceOf(Array);
      expect(await catsController.findAll()).toEqual({ cats: ['test']});
    })
  })
})