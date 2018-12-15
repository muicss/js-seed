/**
 * JS Seed test react button
 * @module test/react-tests/test-button
 */

import assert from 'assert';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactUtils from 'react-dom/test-utils';

import Button from '../../src/react/button';

import { getShallowRendererOutput } from '../lib/react-helpers';


describe('react/button', function() {

  it('renders properly', function() {
    let result = getShallowRendererOutput(<Button>test</Button>);
    assert.equal(result.type, 'button');
    assert.equal(result.props.className, 'seed-button ');
  });
});
