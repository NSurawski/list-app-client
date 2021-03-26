# Listy

## About

A full stack web application designed for users to create their own lists for productivity. Users can create list items,view their list and delete list items.

## Front End Repo & Deployed Links

[Front End Repository](https://github.com/NSurawski/list-app-client)

[Front End Deployed](https://nsurawski.github.io/list-app-client/#/)

## Back End Repo and Deployed Links

[Back End Repository](https://github.com/NSurawski/list-app-API)

[Back End Deployed](https://git.heroku.com/mighty-plains-75118.git)

## Set Up & Installation

1. Fork and clone this repository
2. Checkout to a new branch
3. Run npm install to install dependencies
4. Start server with npm start

## Wireframes

[Unauthenticated](https://imgur.com/b8y8ACb)  
[Authenticated](https://imgur.com/rmyV9UU)

## Screenshot of the App

[Listy](https://imgur.com/IMpVmBM)

## User Stories

1.  As a user, I want to be able to sign up
2.  As a user, I want to be able to sign in
3.  As a user, I want to be able to change my password
4.  As a user, I want to be able to sign out
5.  As a user, I want to be able to view my list
6.  As a user, I want to be able to add a list item
7. As a user, I want to be able to delete a list item
8. As a user, I want to be able to check off list items

## Technologies Used

- HTML/CSS
- Bootstrap
- Javascript
- React
- Axios
- Github Pages

## Routes

### Authentication

| Endpoint         | Component | `AuthenticatedRoute`? |
|------------------|-------------------|-------|
| `/sign-up`       | `SignUp`    | No |
| `/sign-in`       | `SignIn`    | No |
| `/change-password` | `ChangePassword`  | Yes |
| `/sign-out`        | `SignOut`   | Yes |

### CRUD Actions

| Endpoint         | Component | `AuthenticatedRoute`? |
|------------------|-------------------|-------|
| `/create-list-item`  | `CreateItem`    | Yes |
| `/index-user`       | `ShowUserList`    | Yes |
