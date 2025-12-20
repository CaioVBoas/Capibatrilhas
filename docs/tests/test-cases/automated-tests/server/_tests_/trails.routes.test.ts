import request from "supertest";
import app from "server/src/app";

describe("TRAIL ROUTES", () => {
  
  it("GET /trails → deve listar trilhas", async () => {
    const response = await request(app).get("/trails");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("POST /trails → deve criar uma trilha", async () => {
    const newTrail = {
      title: "Nova Trilha Teste",
      description: "descrição teste",
      startDate: "2025-01-01",
      endDate: "2025-02-01"
    };

    const response = await request(app).post("/trails").send(newTrail);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.title).toBe("Nova Trilha Teste");
  });

  it("GET /trails/:id → deve retornar uma trilha", async () => {
    const response = await request(app).get("/trails/1");

    expect([200, 404]).toContain(response.status);
  });

  it("GET /trails/relations/user/:userId → deve listar trilhas do usuário", async () => {
    const response = await request(app).get("/trails/relations/user/1");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

});