import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FormationSelect from './FormationSelect';

describe('<FormationSelect />', () => {
  test('it should mount', () => {
    render(<FormationSelect />);
    
    const formationSelect = screen.getByTestId('FormationSelect');

    expect(formationSelect).toBeInTheDocument();
  });
});