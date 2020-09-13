import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Pitch from './Pitch';

describe('<Pitch />', () => {
  test('it should mount', () => {
    render(<Pitch />);
    
    const pitch = screen.getByTestId('Pitch');

    expect(pitch).toBeInTheDocument();
  });
});