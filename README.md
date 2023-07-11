<br/>

## Table Of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [API Docs](#api-docs)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [License](#license)

## About The Project

The Contact Management System is a small project that allows users to effectively manage and organize their contacts. It provides RESTful endpoints for adding, viewing, editing, and deleting contacts.

## Features
- User registration and login functionality for secure access to the system.
- User authentication and authorization to ensure each user can only view, manage, and edit their own contacts.
- Create and store contacts with information such as name, phone number, and email address.
- View a list of all contacts.
- Edit contact details to keep information up-to-date and accurate.
- Delete unwanted or outdated contacts from the system.

## API Docs
<a href="https://documenter.getpostman.com/view/17672386/2s946cetUG#7662bf0b-1604-4233-a0a7-b8cb03fdb816" target="_blank"> Link to api docs </a>

## Built With

* Node.js
* Express.js
* MongoDB | Mongoose

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* Node.js
* Express.js
* MongoDB

### Installation

1. Clone the repo

```sh
    git clone https://github.com/MUSTAFA-Hamzawy/contact-management-app-Node.js.git
```

2. Make your own copy of the .env file
```sh
    cp .env.example .env
 
    PORT= 5000
    CONNECTION_STRING= your db connection string
    JWT_SECRET_KEY= generate it (run node in terminal --> require('crypto').randomBytes(60).toString('hex')
```

3. Install dependecies

```sh
    npm install
```
4. Start Running
```sh
    npm start
```


## License
See [LICENSE](https://github.com/MUSTAFA-Hamzawy/contact-management-app-Node.js/blob/main/LICENSE) for more information.
