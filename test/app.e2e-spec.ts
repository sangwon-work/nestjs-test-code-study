import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/app/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    /**
     * AppModule 전체를 import -> 실제 앱과 거의 동일한 환경으로 실행.
     * supertest로 HTTP 요청 보내서 응답 코드, body 구조 검증.
     * 이 테스트로 라우트, 가드, 필더, 인터셉터, 파이프, 전역 미들웨어까지 한 번에 확인 가능
     */
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/cats/list (GET)', () => {
    return request(app.getHttpServer())
      .get('/cats/list')
      .expect(200)
      .expect((res) => {
        expect(res.body).toBeDefined();
        // expect(Array.isArray(res.body)).toBeTruthy();
        expect(Array.isArray(res.body.cats)).toBe(true);
      });
  });
});
