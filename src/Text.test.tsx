import React from 'react';
import { shallow } from 'enzyme';
import { Text, TextProps } from './Text';

describe('Text', () => {
  const makeComponent = (overrides?: TextProps) => {
    const props = {
      text: 'some text',
      ...overrides,
    };

    return shallow(<Text {...props} />);
  };
  it('should have a test hook ', () => {
    const wrapper = makeComponent();
    expect(wrapper).toHaveLength(1);
  });
});
