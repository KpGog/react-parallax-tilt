import React from 'react';

import Tilt from '../../src';
import { DefaultComponent } from '../_DefaultComponent/DefaultComponent';

const ReverseTilt = () => (
  <Tilt tiltReverse={true}>
    <DefaultComponent />
  </Tilt>
);

export default ReverseTilt;
