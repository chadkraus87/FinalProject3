const express = require('express');

require('dotenv').config();
const cookieParser = require('cookie-parser');

const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/generateToken');
const {  errorHandler } = require('./middleware/errorMiddleware');

const { typeDefs, resolvers } = require('./schemas');
// const userRoutes = require('./routes/userRoutes');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());

// app.use('/api/users', userRoutes);



if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


app.use(errorHandler); // middleware for error handling
// app.use(notFound); // middleware for 404 errors

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  
  db.once('open', () => {
    app.listen(PORT, () => {
      
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer();
