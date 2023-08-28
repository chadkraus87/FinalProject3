const { createApi, fetchBaseQuery } = require('@reduxjs/toolkit/query/react');
const { BASE_URL } = require('../constants');

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Product', 'Order', 'User'],
  endpoints: (builder) => ({}),
});

module.exports = {
  apiSlice,
};
