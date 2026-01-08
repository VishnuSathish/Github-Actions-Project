import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  it("renders greeting text", () => {
    render(<Greeting />);

    const greetingElement = screen.getByTestId("greeting");
    expect(greetingElement).toBeInTheDocument();
    expect(greetingElement).toHaveTextContent(
      "Hello you, welcome to the Github Actions Project"
    );
  });
});
