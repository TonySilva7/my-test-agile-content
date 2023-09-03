import '@testing-library/jest-dom';

import App from '@APP/App';
import { ORG } from '@APP/components';
import { renderWithProviders } from '@APP/utils/test-utils';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { describe, expect } from 'vitest';

describe('<Button />', () => {
  beforeEach(() => {
    renderWithProviders(<App />);
  });

  it('should show button in screen', () => {
    expect(screen.getByText('Buscar')).toBeInTheDocument();
  });

  it('should show button disabled', () => {
    expect(screen.getByText('Buscar')).toBeDisabled();
  });

  test('should show button active', () => {
    const inputElement: HTMLInputElement = screen.getByTestId('search-home');

    fireEvent.change(inputElement, { target: { value: 'dog' } });

    expect(screen.getByText('Buscar')).not.toBeDisabled();
  });

  test('should show button active', async () => {
    const inputElement: HTMLInputElement = screen.getByTestId('search-home');

    fireEvent.change(inputElement, { target: { value: 'dog' } });
    fireEvent.click(screen.getByText('Buscar'));

    await waitFor(() => {
      expect(screen.queryByText(/Buscar/i)).not.toBeInTheDocument();
    });
  });
});
