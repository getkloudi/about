import React from 'react';
import HomepagePresenter from '../presenters/HomepagePresenter';
import Homepage from '../page-layout/Homepage';

export default function route(props) {
  return (
    <HomepagePresenter {...props}>
      <Homepage />
    </HomepagePresenter>
  );
}
