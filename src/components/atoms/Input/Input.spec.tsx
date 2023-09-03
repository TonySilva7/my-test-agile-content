import '@testing-library/jest-dom';

import App from '@APP/App';
import { renderWithProviders } from '@APP/utils/test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { describe, expect } from 'vitest';

describe('<Input />', () => {
  test('inserir dados no input dinamicamente', () => {
    renderWithProviders(<App />);

    const inputElement: HTMLInputElement = screen.getByTestId('search-home');

    fireEvent.change(inputElement, { target: { value: 'Texto de teste' } });

    expect(inputElement.value).toBe('Texto de teste');
  });
});
