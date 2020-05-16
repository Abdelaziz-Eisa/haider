import request from 'supertest';
import app from '../src/app';

describe('GET /', () => {
  it('should return 200 OK', () => {
    return request(app).get('/').expect(200);
  });
});

describe('GET /random-url', () => {
  it('should return 404 Not Found', () => {
    return request(app).get('/random-url').expect(404);
  });
});
