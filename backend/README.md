# SBA

## Description

I created a server application using Mongoose ODM library.

## API Entities / Collections

1. Users
2. Products
3. Reviews

## Usage / Limits
## Routes

Path: / Method: GET Description: Returns welcome message: "Welcome tot the API"!

## API Routes - CRUD

Users

Path: /api/users Method: GET Description: Returns all users

Path: /api/users/:id Method: GET Description: Returns a single users selected by id

Path: /api/users Method: POST Body: {username: String, password: String} Description: Creates a new User

Path: /api/users/:id Method: PUT Description: Update an existing user selected by the id

Path: /api/users/:id Method: DELETE Description: Delete a user selected by the id

