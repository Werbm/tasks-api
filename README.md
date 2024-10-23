# Task Management Api Restful

This is a simple Task Management API based on NodeJs, Express, Typescript, Sequelize and for the database i used Postgresql. Not complex, easily running with docker container.

It was developed for a job interview test where it was asked me to create this API Restful with the methods **GET**, **POST**, **DELETE** and **PUT** 

## Functionalities:

- Create, Read, Delete and Update operations
- JWT Authentication
- Login Validation

## How to run?

1. Clone the repository: 


    ```bash
    git clone https://github.com/Werbm/tasks-api.git  

    cd backend
    ```

2. Initiate Docker Container: 

    ```bash
    docker-compose up -d --build
    ```

3. After running docker, you can look at the API documentation:

-  [Api Documentation](http://localhost:3001/api-doc)

## Usage:

To run the API Methods, you can use Postman or Insomnia

- [Postman](https://www.postman.com/downloads/)
- [Insomnia](https://insomnia.rest/download)

## routes: 

**Authentication:** 
    
    auth/register

        Method: POST
        should create an account to user

    auth/login
        
        Method: POST
        should generate a JWT token to authenticate

**Tasks:**

    /task

        Method: GET
        should fetch all tasks in the database

    /task

        Method: POST
        should create a task in the database
    
    /task/:id

        Method: DELETE
        should delete a task based on the id
    
    /task/:id

        Method: GET
        should fetch a task based on the id
        
    /task/:id

        Method: PUT
        should update an information in the task based on the id

**Contribute**

This is an Open API, you can fork or open issues, or create pull requests. I'd love to get your feedback on this.
