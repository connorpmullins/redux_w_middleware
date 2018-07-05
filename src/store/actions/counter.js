import * as aT from './actionTypes';

export const increment = () => {
  return {
    type: aT.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: aT.DECREMENT
  };
};

export const add = (value) => {
  return {
    type: aT.ADD,
    val: value
  };
};

export const subtract = (value) => {
  return {
    type: aT.SUBTRACT,
    val: value
  };
};