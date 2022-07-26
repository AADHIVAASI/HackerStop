![header](https://capsule-render.vercel.app/api?type=wave&color=gradient&height=300&section=header&text=Hacker%20Stop&fontSize=40)

# Hack Ideas - Multi User Hackathon publisher App

## Description

- React application which lets employees of an organisation to add/manage challenges for internal hackathons
- App made responsive with Materialize UI to support Desktops, Laptops, Tablets & Phones.
- Link to GitHub repo linked at the end of App screen.

## Features

- Multi User Login
- Responsive UI
- Slay challenges from your colleagues
- Create a Challenge with just Title, Description and Tags
- View your created Challenges
- Like your favourite Challenge
- Sort Challenges by Date/Likes

## Screens

- Login Page
- Dashboard
- Create Challenge Form
- View your own Challenges

## Concepts Implemented

- Context API
- Session Storage
- Router
- React Hooks

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

```
npm
```

### Installing

A step by step series of examples that tell you how to get a development env running for this project

If you need a reference on how to install npm, you can go to:

- [How to Install Node and npm](http://treehouse.github.io/installation-guides/)

- Download the project files, [here is the link if you need it](https://github.com/AADHIVAASI/randomUserGen)
- Add .env file inside the project root folder and insert
- Open your terminal/console and make sure to be inside the project folder.
- Then type in your terminal/console

```
npm install
```

That will install all project's dependencies

- Start your server by typing:

```
npm start
```

- npm will open up a tab with the app running or simply go to your browser and type http://localhost:3000/

## State Schema

```
[Users]* -
  { User } - "First Name" | "Last Name" | "Employee ID" | [Likes]* -
                                                            "Challenge_ID"
[Challenges]* -
  { Challenge } - "Challenge ID" | "Title" | "Description" | "Creation Date" | "Employee ID" | "Likes" | [Tags]* -
                                                                                                              "Tag"
LoggedOut - Bool
```

## Built With

- [npm](https://www.npmjs.com/) - Dependency Management
- [Git](https://git-scm.com/) - Version Control System
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Materialize](https://materializecss.com/) - Utility library for styling React components
- [React-Router-Dom](https://www.npmjs.com/package/react-router-dom) - Enable Routing Mechanism in SPA
- [SweetAlert2](https://sweetalert2.github.io/) - Rich, customizable and responsive Alert boxes
- [superjson](https://www.npmjs.com/package/superjson) - Stringify and Parse Date objects
- [moment](https://www.npmjs.com/package/moment) - Extract customized date formats from Date objects

### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

## Author

- [**Vibheesha Velayudha**](https://github.com/AADHIVAASI)

## Acknowledgments

- [Materialize - Icons](https://materializecss.com/)
