import {CatsController} from "./cats.controller";
import {CatsService} from "./cats.service";
import {Test, TestingModule} from "@nestjs/testing";

describe('CatsController', () => {
  let catsController: CatsController;
  let catsService: CatsService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    catsService = moduleRef.get<CatsService>(CatsService);
    catsController = moduleRef.get<CatsController>(CatsController);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = ['1', '2'];

      /**
       * jest.spyOn(catsService, 'findAll') 설명
       * - Jest의 스파이 기능을 사용합니다.
       * - catsService 객체의 findAll 메소드를 감시(spy)하기 시작합니다.
       * - 이는 해당 메소드의 호출을 추적할 수 있게 해줍니다.
       *
       * .mockImplementation(async () => result)
       * - 감시 중인 메소드의 실제 구현을 새로운 구현으로 대체합니다.
       * - async () => result 는 새로운 구현 내용입니다.
       * - 이 새로운 구현은 result 값(여기서는['1', '2'])을 반환합니다.
       */
      jest.spyOn(catsService, 'findAll').mockImplementation(async () => result);

      // jest.spyOn().mockImplementation() 함수를 통해 실제 cats.Service.ts에 반환값을 변경해서
      // expect(await catsService.findAll()).toBe(result); 결과가 True 입니다.
      expect(await catsController.findAll()).toBe(result);
    })
  })
})
