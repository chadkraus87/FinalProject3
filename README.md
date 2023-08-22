# FinalProject3
Final Group Collab Project using React, MongoDB, and JWT for authentication.

# Overview:

## Frontend:
- **User Experience using React & ThreeJS**
- **Management dashboard using React, Tailwind, and Material UI**
- **React Router and React Router Dom** for navigation
- **JWTokens** for handling authentication on the frontend

## Backend:
- **ExpressJS** as the server
- **Apollo Server** for GraphQL
- **Mongoose** to interact with MongoDB
- **Authentication** using Bcrypt and JWTokens
- **GraphQL** for database queries and mutations


# Build Notes:

## User Experience (UX) with React & ThreeJS:
1. Use `create-react-app` for boilerplate
2. Integrate **ThreeJS** for any 3D elements you plan to use in the UI
3. Use React state and props to manage data flow
4. React hooks might be very useful for managing state and effects

## Admin Dashboard:
1. Use **Material UI components** for rapid development of the dashboard
2. Integrate **Tailwind** for utility-based styling
3. Use React hooks like `useState`, `useEffect`, and possibly `useReducer` for state management

## Database with Mongoose:
1. Define Mongoose schemas for your data (products, users, orders, etc.)
2. Set up connection to **MongoDB**, possibly using Atlas for cloud storage

## GraphQL Queries & Mutations:
1. Define **GraphQL schema** for queries, mutations, and subscriptions if needed
2. Use **Apollo Server's resolvers** to interact with MongoDB via Mongoose

## Authentication & Security:
1. Use **Bcrypt** to hash passwords before storing them in MongoDB
2. Use **JWTokens** for authentication (issuing tokens on successful login and verifying them on protected routes/mutations)
3. Ensure secure HTTP headers, **CORS settings**, and implement rate limiting for added security


## 14-Day Timeline:

#### Day 1-2: Initial Setup, Planning, and Division of Tasks

1. Set up individual development environments.
1. Divide and define more granular tasks within roles.
1. Set up version control with Git & GitHub (or a similar platform).
1. Define the data model and required database schemas.
1. Start skeleton designs for UX and Admin dashboard views.

#### Day 3-4: Core Development Begins

- UX: Begin integrating ThreeJS with React. Work on basic layouts and static views.
- Admin: Start the basic dashboard layout with Material UI and Tailwind.
- Database: Set up MongoDB and finalize Mongoose schemas.
- GraphQL: Start defining necessary GraphQL types, queries, and mutations.
- Auth: Implement Bcrypt, JWT, and basic login/logout functionalities.

#### Day 5-6: Integration & Development

- UX: Finalize views, add product listings and cart functionality.
- Admin: Finalize CRUD functionalities for products, view orders, and manage users.
- Database: Refinement based on feedback from frontend teams.
- GraphQL: Integrate with frontend, ensuring all queries and mutations are functioning.
- Auth: Test and refine authentication, and add any necessary security layers.

#### Day 7-8: Testing, Debugging, and Refinements

- Conduct initial tests to identify any major issues.
- Debug based on these tests.
- Make refinements based on feedback.
- Ensure collaboration between team members to identify dependencies or blockers.

#### Day 9-10: Additional Features & Enhanced Testing

- UX: Add any additional interactivity or final touches.
- Admin: Implement any additional dashboard features or enhancements.
- GraphQL: Test and finalize all GraphQL endpoints.
- Auth: Refine and test security features.
- Database: Make final refinements.

#### Day 11-12: Deployment Preparations & Initial Deployment

- Set up Heroku deployment pipeline.
- Deploy a staging version to Heroku.
- Test the staging version thoroughly.
- Make necessary adjustments based on deployment tests.

#### Day 13: Final Review & Debugging

- Comprehensive review of the entire application.
- Debug any lingering issues.
- Test on various devices and browsers to ensure responsiveness and compatibility.

#### Day 14: Final Deployment & Launch

- Make any last-minute adjustments.
- Deploy the final version to Heroku.
- Announce the official launch.
