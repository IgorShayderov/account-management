/* eslint-disable import/prefer-default-export */
import api from '.';

export const logIn = (params = {}) => {
  api('/login', {
    method: 'GET',
    body: params,
  });
};
