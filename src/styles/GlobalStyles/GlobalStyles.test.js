import React from 'react';
import { render } from '../../test-utils';

import GlobalStyle from './index';

test('match snapshot', () => {
  render(<GlobalStyle />);

  expect(document.head).toMatchSnapshot();
});
