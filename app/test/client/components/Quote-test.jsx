import React from 'react';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';
import Quote from '../../../client/src/components/Quote';

describe('A suite', function () {
  it('tests shallow rendering', function () {
    expect(shallow(<Quote quote="foo" by="bar" />).contains(
      <header className="quote">
        <h1>foo</h1>
        <h2>bar</h2>
      </header>
    )).to.equal(true);
  });
});
