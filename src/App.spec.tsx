import '@testing-library/jest-dom';

import App from '@APP/App';
import { renderWithProviders } from '@APP/utils/test-utils';
import { screen } from '@testing-library/react';
import { describe, expect } from 'vitest';

describe('App', () => {
  it('renders App correctly', () => {
    renderWithProviders(<App />);
    expect(screen.getByText('Buscar')).toBeInTheDocument();
    expect(screen.getByText('Agile Content')).toBeInTheDocument();
  });
});
