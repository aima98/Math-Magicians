/* eslint-disable quotes */
import { render, screen } from "@testing-library/react";
import Calculator from "./components/calculator";

test("renders calculator", () => {
  render(<Calculator />);
  const linkElement = screen.getByText(/AC/i);
  expect(linkElement).toBeInTheDocument();
});
