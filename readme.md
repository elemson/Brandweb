# Brandweb Backend API specification

> Brandweb back end Authentication. The stack used include Node, express, and mongo DB

# Usage

Rename " Create "config/config.env" in the root folder and update the values/settings to your own

## Install Dependencies

```
npm install
```

## Run App

```

# Run in dev mode
npm run dev

# Run in pro mode
npm start
```

- Version: 1.0.0

## User & Authentication

- Authentication uses JWT/cookies
  JWT and cookies should expire in 30 days
- User registration
  Once users registers, a token is generated and sent along with a cookie
  Password is be hashed

- User login
  users can login with email and password
  Plain text password will compare with stored hashed password
  Once logged in, token is sent along with cookies

- User Logout
  Cookie is sent along with token

- Password reset( lost password)
  Users can request a reset password
  A hashed token will be emailed to the users regitered email address
  A put request can be made to the generated url to reset password
  The token will expire after 10 minutes

- Update user info
  Authenticated user only
  Seperate route to update password

## Security

- Encrypt passwords and reset tokens
- Prevent NoSQL injections
- Add headers for security (helmet)
- Protect against http param pollutin
- Use cors to make API public (for now)
- Prevent cross site scripting - XSS
- Add a rate limit for requests of 100 requests per 10 minutes

## Documentation

- Use postman to create documentation

## Deployment

- Push to Github
- Deployed to heroku

# Front-end

## Frame work

- React
- Css framework is Bootstrap and React-bootstrap

## State management

- Redux
- Thunk middleware

## Client side Authentication

- Jwt Token
