import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SelectableCard from './SelectableCard';

describe('<SelectableCard />', () => {
  test('it should mount', () => {
    render(<SelectableCard />);
    
    const selectableCard = screen.getByTestId('SelectableCard');

    expect(selectableCard).toBeInTheDocument();
  });
});