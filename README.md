#Welcome to Flight Service

##Project setup

-clone the project in your local

-Execute `npm install` on the same path as of your root directory of the download project

-create a `.env` file in the root directory and add the following enviroment variable

-Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
    {
  "development": {
    "username": <Your_DB_Login_Name>,
    "password": <Your_DataB_Password>,
    "database": "Flight_search_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
    }

```

Once you've added your db config as listed above ,go to the src folder from your terminal and execute `npx sequelize db :create`


`npx sequelize db:migrate`

##DB DESIGN

-Airplane Table
-Flight
-Airport
-City

About Flight
-A flight belongs to an airplane , but one airplane can be used in multiple flights.

-A city has many airports but one airports belongs to a city.

-One airport can have many flights,but a flights belongs to one airport.