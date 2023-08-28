const { configureStore } = require('@reduxjs/toolkit');
const { apiSlice } = require('./slices/apiSlice');
const cartSliceReducer = require('./slices/cartSlice');
const authSliceReducer = require('./slices/authSlice');

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
    auth: authSliceReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

module.exports = store;
