import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../../../components/Footer';
import '@testing-library/jest-dom';

describe('Footer Component', () => {
  test('renders Footer component', () => {
    render(<Footer />);

    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
    //On déclare la variable footerElement, qui doit contenir un élément ayant le rôle contentinfo, qui est sémantiquement associé à un pied de page.
  });
});
