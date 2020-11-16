import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Small } from './Input.stories';

it('renders the input in the primary state', () => {
  render(<Small {...Small.args} />);
});