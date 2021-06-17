const port: string = "3000";

const URLS = {
  registr: `http://127.0.0.1:${port}/api/v1/users/`,
  login: `http://127.0.0.1:${port}/api/v1/users/login/`,
  math: {
    directCode: {
      leftShift: `http://127.0.0.1:${port}/api/v1/calculations/direct_code/left_shift/`,
    },
  },
};

export default URLS;
