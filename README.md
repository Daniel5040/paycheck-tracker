# Paycheck-Tracker

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)

## About <a name = "about"></a>

Paycheck-Tracker is a web application that allows the user to keep a record of the days they worked for their current paycheck. It was build to solve a personal problem of always having to guess and misremember how many hours I had worked and how much money in tips I had made for my paycheck.

The application allows a user to sign up, create a paycheck, create a workday, and change user information. It generates a report on the latest paycheck providing a summary of hours worked, number of days worked, and money made on tips.

[Link to application](https://paycheck-tracker.herokuapp.com)

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Git
- npm
- Node.js

You will also need to set up MongoDB, create a database, and store the database URI on a variable as MONGODB_URI well as to create a token secret and store on a variable as TOKEN_SECRET. Both of these variables are to be store in an .env file.

### Installing

A step by step series of examples that tell you how to get a development env running.

Clone the repository

```
git clone https://github.com/danydlo/paycheck-tracker.git
```

Move into project directory

```
cd paycheck-tracker
```

Install dependencies

```
npm install
```

Run dev script

```
npm run dev
```
