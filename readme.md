<div align="center">

<img src="assets/logobar.png" alt="NutriCare Logo" width="95%">

<br/>

# NutriCare – Healthy Recipe Generator

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Azure](https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

NutriCare is a web app that gives AI-based healthy recipes and connects users with doctors.

</div>

# About the Backend

The backend handles API requests, user data, recipe generation, and doctor directory management. It connects with OpenAI to generate personalized recipes and Azure services for secure hosting and AI interactions. MongoDB stores users, recipes, doctors, and articles.

## Features

- **User Authentication**: Sign up, login, and role-based access
- **Recipe Generation**: Uses OpenAI to suggest healthy meals
- **Doctor Management**: View and manage doctor/nutritionist profiles
- **Article Management**: Add and update health articles
- **Admin Access**: Control users, recipes, and content (future)
- **Health Filters**: Filter recipes by illness and allergen
- **Secure API**: JWT-based authentication and request validation

## Live Demo

Full demo video: [https://nutricareweb.vercel.app](https://nutricareweb.vercel.app)

## Technology Stack

- **Backend**: Node.js & Express.js
- **Database**: MongoDB
- **AI Integration**: Azure OpenAI
- **Hosting**: Azure Web App, Docker
- **CI/CD**: Azure Container Registry, Azure DevOps

## Frontend Repository

<a href="https://github.com/chaminipalliyaguru/NutriCare-Frontend" target="_blank">
  <img width="95%" alt="Frontend Repo" src="https://i.ibb.co/7xRJpGDF/Group-2.png"/>
</a>
<div align="center">
  <strong>Click here to go to the backend repository</strong>
</div>

## Local Development

### Prerequisites

- Node.js, npm and Docker installed

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/abhixsh/NutriCare_backend
cd NutriCare_be
npm install
```

To run the application using nodemon, use the following command:

```bash
npm install -g nodemon
nodemon index.js
```

To run the application using Docker, follow these steps:

1. Build the Docker image:

    ```bash
    docker build -t nutricare-backend .
    ```

2. Run the Docker container:

    ```bash
    docker run -p 3000:3000 nutricare-backend
    ```

## Contributing

A win-win cooperation! We invite you to participate in this project. Let's work together to create the most useful tool for developers on the web today.

### How to Contribute

- Issues: ask questions and submit your features
- Pull requests: send your improvements to the current codebase

Together, we can make this project **better** every day!

## License

This project is licensed under the **MIT License**.
