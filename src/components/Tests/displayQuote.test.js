import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import DisplayQuote from '../displayQuote';

describe('test page rendering', () => {
  it('test page rendering Quote Title', () => {
    render(
      <DisplayQuote />,
    );

    const quoteTitle = screen.queryByText('Quote');
    expect(quoteTitle).toBeInTheDocument();
  });

  it('test page rendering Quote existence', () => {
    render(
      <DisplayQuote />,
    );

    const quoteTitle = screen.queryByText('Quote');
    expect(quoteTitle.parentElement.querySelector('p')).toBeInTheDocument();
  });
});

describe('snapshot testing', () => {
  test('should persist', () => {
    const quoteTree = renderer.create(
      <DisplayQuote />,
    );
    expect(quoteTree).toMatchSnapshot();
  });
});
