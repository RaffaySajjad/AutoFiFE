import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AuthImage } from "@/app/components";
describe("AuthImage", () => {
  it("renders background, logos, title, and description", () => {
    render(<AuthImage />);

    expect(screen.getByAltText("hero")).toBeInTheDocument();
    expect(screen.getByAltText("logo")).toBeInTheDocument();
    expect(screen.getByAltText("Boxcars")).toBeInTheDocument();

    expect(screen.getByTestId("textContainer")).toBeInTheDocument();
  });
});
