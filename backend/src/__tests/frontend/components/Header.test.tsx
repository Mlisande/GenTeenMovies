import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../../components/Header';
import '@testing-library/jest-dom';

describe('Header Component', () => {
  test('renders header component', () => {
    render(<Header />);

    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });
});
