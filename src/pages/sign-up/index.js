import React from 'react';

import SignupPresenter from '../../presenters/SignupPresenter';
import Signup from '../../page-layout/Signup';

export default function SignupRoute(props) {
  return (
    <SignupPresenter {...props}>
      <Signup />
    </SignupPresenter>
  );
}
