## Install Instructions

- clone repository
- cd into project folder
- run `npm install`
- run `npm start`
- server running on port `4000`

## API Documentation

1. [POST] `/user/register` - Endpoint for user authentication (new users are created if they dont already exist)

   ##### Request body

   ```
   {
       "email":"syedfaizan2008@gmail.com",
       "password": "1234"
   }
   ```

   ##### Response

   ```
   {
    "email": "syedfaizan2008@gmail.com",
    "id": "609fcff4f608fa0eacf7124d",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MDlmY2ZmNGY2MDhmYTBlYWNmNzEyNGQiLCJpYXQiOjE2MjEwODYxOTYsImV4cCI6MTYyMTY5MDk5Nn0.NBNt1LzBEPDJ5JhgBAV-zALdmK3cXsdyp6Uvv6_qPCw"
   }
   ```

2. [POST] `/user/:userId/contact` - Creates a new contact in firebase (requires Auth token)

   ##### Request body

   ```
   {
       "firstName": "Syed",
       "lastName": "faizan",
       "phoneNumber": 7204194938,
       "address": "Hebbal,Bengaluru"
   }
   ```

   ##### Request Headers

   ```
   "Authorization": <Bearer Token>
   ```

   ##### Response

   ```
   {
       "dbPath": "strv-addressbook-faizan-syed"
   }
   ```
