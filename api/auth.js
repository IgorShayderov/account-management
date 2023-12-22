/* eslint-disable import/prefer-default-export */
import api from '.';

export const login = (params = {}) => {
  api('/login', {
    method: 'GET',
    body: params,
  });
};
