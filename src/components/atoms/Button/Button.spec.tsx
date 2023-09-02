import '@testing-library/jest-dom';

import App from '@APP/App';
import { setupStore } from '@APP/app/store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, test } from 'vitest';

import { Button } from '.';

describe('App', () => {
  const store = setupStore();

  it('renders App correctly', () => {
    render(
      <Provider store={store}>
        <Button />
      </Provider>,
    );
    expect(screen.getByText('Buscar')).toBeInTheDocument();
  });
});
