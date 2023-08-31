import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, test } from 'vitest';

import App from './App';
import { store } from './app/store';

describe('App', () => {
  it('renders App component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText('Ready to code!')).toBeInTheDocument();
  });

  it('renders App component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText('Lista de Usuários')).toHaveTextContent(
      'Lista de Usuários',
    );
  });
});
