# About this Project
    This project demonstrate the basic project architecture for node js using typescript . 
    Here using express server for server creation and for unit testing using  mocha and chai framework.
    Contains a simple Get API to find the occurrence of character in a string to show how to add routes with basic validations.

# Project setup
    1. ** npm install ** - install all dependency
    2. ** npm run build ** - build project
    3. ** npm run start ** - start project on port 4021

# Command to Run unit test case 
    1. npm run test

# API detail - count occurrences of each character in a string input
 ## Request - 
            { method: 'GET',
                url: 'http://localhost:4021/str/findDuplicate?input=addcws',
                headers: 
                   { 
                        'content-type': 'application/json',
                         accept: 'application/json'
                    } 
            };
 ## Response - 
            {"a":1,"d":2,"c":1,"w":1,"s":1}
