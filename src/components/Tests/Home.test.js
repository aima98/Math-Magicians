import { render, screen } from "@testing-library/react";
import renderer from 'react-test-renderer';
import Home from "../Home";

describe('render tests', () => {
  test('render test header', () => {
    render(<Home />);
    const welcomeHeader = screen.getByRole("heading");
    expect(welcomeHeader.innerHTML).toBe('Welcome to our page!');
  });

  test('render test paragraph', () => {
    render(<Home />);
    const paragraph = screen.queryByText(/This is Math Magician./i);
    expect(paragraph).toHaveTextContent("Here, we offer a variety of tools and collection of random quotes to keep you entertained.");
  });
});

describe('snapshot test for Home', () => {
  test('snapshot test', () => {
    const homeTree = renderer.create(<Home />).toJSON();
    expect(homeTree).toMatchSnapshot();
  });
});