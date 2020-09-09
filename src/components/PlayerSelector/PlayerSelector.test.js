import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayerSelector from './PlayerSelector';

describe('<PlayerSelector />', () => {
  test('it should mount', () => {
    render(<PlayerSelector />);
    
    const playerSelector = screen.getByTestId('PlayerSelector');

    expect(playerSelector).toBeInTheDocument();
  });
});