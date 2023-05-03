import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

describe('click Event test', () => {
  it('render test click on Home link', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const header = screen.queryByTestId('header');
    const homeLink = screen.getByText('Home');
    fireEvent.click(homeLink);
    const headerAfterClock = screen.queryByTestId('header');
    expect(header.outerHTML).toBe(headerAfterClock.outerHTML);
  });

  it('render test click on Calculator link', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const header = screen.queryByTestId('header');
    const homeLink = screen.getByText('Calculator');
    fireEvent.click(homeLink);
    const headerAfterClock = screen.queryByTestId('header');
    expect(header.outerHTML).toBe(headerAfterClock.outerHTML);
  });

  it('render test click on Quote link', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const header = screen.queryByTestId('header');
    const homeLink = screen.getByText('Quote');
    fireEvent.click(homeLink);
    const headerAfterClock = screen.queryByTestId('header');
    expect(header.outerHTML).toBe(headerAfterClock.outerHTML);
  });
});

describe('snapshot test', () => {
  it('snapshot test for header', () => {
    const headerTree = renderer.create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    ).toJSON();
    expect(headerTree).toMatchSnapshot();
  });
});