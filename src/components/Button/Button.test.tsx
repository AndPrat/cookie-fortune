import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When is rendered with the text 'CIERRA GALLETA - Clicka para coger otra galleta de la fortuna'", () => {
    test("Then it should show a button with te text 'CIERRA GALLETA - Clicka para coger otra galleta de la fortuna'", () => {
      const mockFunction = vi.fn();
      const expectedButtonText =
        "CIERRA GALLETA - Clicka para coger otra galleta de la fortuna";

      render(
        <Button className="" actionOnClick={mockFunction}>
          {expectedButtonText}
        </Button>,
      );

      const button = screen.getByRole("button", { name: expectedButtonText });

      expect(button).toBeInTheDocument();
    });
  });
});
