import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../../src/pages/home/Home';

describe('Home tests', () => {
  it('should should render correctly', () => {
    const { queryByTestId } = render(<Home />)
    const component = queryByTestId('home')
    expect(component).toBeTruthy()
  })
})
