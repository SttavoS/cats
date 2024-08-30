export const BASE_URL = 'https://dogsapi.origamid.dev/json';

export const TOKEN_POST = body => {
  return {
    url: `${BASE_URL}/jwt-auth/v1/token`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
};

export const TOKEN_VALIDATE_POST = token => {
  return {
    url: `${BASE_URL}/jwt-auth/v1/token/validate`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

export const GET_USER = token => {
  return {
    url: `${BASE_URL}/api/user`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    },
  };
};
