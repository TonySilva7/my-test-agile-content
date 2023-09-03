import '@testing-library/jest-dom';

import App from '@APP/App';
import { renderWithProviders } from '@APP/utils/test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';

describe('<Input />', () => {
  test('should have value in input', () => {
    renderWithProviders(<App />);

    const inputElement: HTMLInputElement = screen.getByTestId('search-home');

    fireEvent.change(inputElement, { target: { value: 'Texto de teste' } });

    expect(inputElement.value).toBe('Texto de teste');
  });

  test('should clear input on clicked clear button', () => {
    renderWithProviders(<App />);

    const inputElement: HTMLInputElement = screen.getByTestId('search-home');

    fireEvent.change(inputElement, { target: { value: 'dog' } });
    expect(inputElement.value).toHaveLength(3);

    const clearButton = screen.getByTestId('clear-input-home');
    fireEvent.click(clearButton);
    expect(inputElement.value).toHaveLength(0);
  });
});
