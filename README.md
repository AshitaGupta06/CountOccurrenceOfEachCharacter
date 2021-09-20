# Project setup
    1. ** npm install ** - install all dependency
    2. ** npm run build ** - build project
    3. ** npm run start ** - start project on port 4021

# Command to Run unit test case 
    1. npm run test

# API detail - count how many duplicate letters has a string input
 ## Request - 
            { method: 'GET',
                url: 'http://localhost:4021/str/findDuplicate?input=addcws',
                headers: 
                   { 
                        'content-type': 'application/json',
                         accept: 'application/json'
                    } 
            };

