import React from 'react';
import HomePresenter from '../presenters/HomePresenter';
import HomePage from '../page-layout/HomePage';

export default function route(props) {
  return (
    <HomePresenter {...props}>
      <HomePage />
    </HomePresenter>
  );
}
