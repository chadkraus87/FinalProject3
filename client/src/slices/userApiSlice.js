const { USERS_URL } = require('../constants');
const { apiSlice } = require('./apiSlice');

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: 'POST',
        body: data,
      }),   
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
      }),
    }),
  }),
});

const useLoginMutation = userApiSlice.endpoints.login.useMutation;
const useRegisterMutation = userApiSlice.endpoints.register.useMutation;
const useLogoutMutation = userApiSlice.endpoints.logout.useMutation;

module.exports = {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
};
