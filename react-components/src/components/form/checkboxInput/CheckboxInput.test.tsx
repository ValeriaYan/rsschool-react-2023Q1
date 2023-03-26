import { render } from '@testing-library/react';
import React from 'react';

import { CheckboxInput } from './CheckboxInput';

describe('AboutPage', () => {
  const testRef = React.createRef() as React.RefObject<HTMLInputElement>;
  it('render test for AboutPage', () => {
    render(<CheckboxInput checkboxRef={testRef} labelText="text" />);
  });
});
