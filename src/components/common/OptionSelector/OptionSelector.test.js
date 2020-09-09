import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OptionSelector from './OptionSelector';

describe('<OptionSelector />', () => {
  test('it should mount', () => {
    render(<OptionSelector />);
    
    const optionSelector = screen.getByTestId('OptionSelector');

    expect(optionSelector).toBeInTheDocument();
  });
});