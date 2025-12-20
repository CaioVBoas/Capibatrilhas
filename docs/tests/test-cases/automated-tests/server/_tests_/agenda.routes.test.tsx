import request from 'supertest';
import app from 'server/src/app';

describe('Agenda Routes', () => {

  it('GET /agenda → lista agendas', async () => {
    const res = await request(app).get('/agenda');

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /agenda → cria agenda', async () => {
    const newAgenda = {
      title: 'Agenda test',
      date: '2026-01-01'
    };

    const res = await request(app).post('/agenda').send(newAgenda);

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
  });

  it('GET /agenda/:id → busca agenda', async () => {
    const res = await request(app).get('/agenda/1');

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id');
  });

  it('PATCH /agenda/:id → atualiza agenda', async () => {
    const res = await request(app)
      .patch('/agenda/1')
      .send({ title: 'Updated agenda' });

    expect(res.status).toBe(200);
    expect(res.body.title).toBe('Updated agenda');
  });

  it('DELETE /agenda/:id → deleta agenda', async () => {
    const res = await request(app).delete('/agenda/1');

    expect(res.status).toBe(204);
  });

});