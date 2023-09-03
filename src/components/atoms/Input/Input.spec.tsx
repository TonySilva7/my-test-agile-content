import '@testing-library/jest-dom';

import App from '@APP/App';
import { ORG } from '@APP/components';
import { renderWithProviders } from '@APP/utils/test-utils';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect } from 'vitest';

describe('<Input />', () => {
  test('inserir dados no input dinamicamente', () => {
    renderWithProviders(<App />);

    const inputElement: HTMLInputElement = screen.getByTestId('search-home');

    fireEvent.change(inputElement, { target: { value: 'Texto de teste' } });

    // Verifique se o valor foi inserido corretamente
    expect(inputElement.value).toBe('Texto de teste');
  });
});
