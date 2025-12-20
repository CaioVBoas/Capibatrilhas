import { render, screen } from "@testing-library/react";
import {BoroughCard} from "client/src/components/featuredBoroughCards";

describe("BoroughCard Component", () => {
  const mockBorough = {
    id: "1",
    name: "Bairro Central",
    location: "Centro - Florianópolis",
    bonusScore: "150",
    description: "Uma área com grande diversidade cultural e muitas atividades.",
    tags: ["Turismo", "Cultura", "Eventos"]
  };

  test("deve renderizar o nome do bairro", () => {
    render(<BoroughCard borough={mockBorough} />);
    expect(screen.getByText("Bairro Central")).toBeInTheDocument();
  });

  test("deve exibir o bônus corretamente", () => {
    render(<BoroughCard borough={mockBorough} />);
    expect(screen.getByText(/150 Bônus/i)).toBeInTheDocument();
  });

  test("deve mostrar a localização", () => {
    render(<BoroughCard borough={mockBorough} />);
    expect(screen.getByText("Centro - Florianópolis")).toBeInTheDocument();
  });

  test("deve renderizar a descrição", () => {
    render(<BoroughCard borough={mockBorough} />);
    expect(
      screen.getByText(
        "Uma área com grande diversidade cultural e muitas atividades."
      )
    ).toBeInTheDocument();
  });

  test("deve renderizar todas as tags", () => {
    render(<BoroughCard borough={mockBorough} />);

    mockBorough.tags.forEach(tag => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });
});