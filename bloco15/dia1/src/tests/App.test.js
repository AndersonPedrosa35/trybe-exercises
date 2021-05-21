import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from '../App';

describe('Requisito 1', () => {
  it('There are a button and the text is "Adicionar"', () => {
    const { getByRole } = render( <App />);
    const button = getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveValue('Adicionar');
  });

  it('should render li in the DOM', async () => {
    const { getByRole, findByTestId } = render(<App />);
    const button = getByRole('button');

    fireEvent.click(button);
    expect(await findByTestId('li')).toBeInTheDocument();
  });

  it('should to save in DOM', async () => {
    const { getByRole, getByTestId, findByTestId } = render(<App />);
    const button = getByRole('button');
    const input = getByTestId('inputTodo');

    fireEvent.change(input, { target: { value: 'cuidar do' } })
    fireEvent.click(button);
    const item = await findByTestId('li');

    expect(item).toBeInTheDocument();
    expect(item).toHaveTextContent('cuidar do');
  });
})
