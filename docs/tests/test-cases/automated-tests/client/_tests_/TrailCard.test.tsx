import { render, screen, waitFor } from "@testing-library/react";
import TrailCard from "client/src/components/featuredTrailCards";
import React from "react";


jest.mock("services/api", () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: {
        data: [
          { challenge: { isActive: false } },
          { challenge: { isActive: true } }
        ]
      }
    })
  )
}));


jest.mock("next/link", () => {
  return ({ children }) => children;
});

describe("TrailCard Component", () => {
  const mockTrail = {
    id: 1,
    title: "Trilha Teste",
    subtitle: "Descrição da trilha",
    progress: 50,
    type: "Destaque",
    time: "2h",
    prize: 100,
    tag: "Aventura",
    buttonText: "Ver Detalhes",
    isPersonalized: true
  };

  it("deve renderizar título e informações básicas", () => {
    render(<TrailCard trail={mockTrail} />);

    expect(screen.getByText("Trilha Teste")).toBeInTheDocument();
    expect(screen.getByText("Descrição da trilha")).toBeInTheDocument();
    expect(screen.getByText("Aventura")).toBeInTheDocument();
    expect(screen.getByText("2h")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
  });

  it("deve exibir estatísticas de desafios após carregar API", async () => {
    render(<TrailCard trail={mockTrail} />);

    await waitFor(() => {
      expect(screen.getByText("1/2 desafios")).toBeInTheDocument();
    });

    expect(screen.getByText("2 desafios")).toBeInTheDocument();
  });
});