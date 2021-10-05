import React, { Component } from 'react';
import {StackAction} from '@react-navigation/native';
export const navigationRef = React.createRef();

export const naviagte = (name, params, key) => {
  navigationRef.current?.naviagte({name, key, params});
};

export const pop = n => {
  navigationRef.current?.dispatch(StackAction.pop(n));
};
