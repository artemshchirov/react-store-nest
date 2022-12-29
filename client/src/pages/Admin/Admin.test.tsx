import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Admin } from './Admin';

describe('<Admin />', () => {
  test('it should mount', () => {
    render(<Admin />);

    const admin = screen.getByTestId('Admin');

    expect(admin).toBeInTheDocument();
  });
});
