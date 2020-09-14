## Front-end 

* [x] Create client folder 

* [x] Setup index.html 

* [x] Bring in Skeleton CSS

    [.] http://getskeleton.com/
    
    [.] http://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css

* [x] Create Header 

* [x] Create form
    [x] Name
    [x] Content
    [x] u-full-width to both imputs

* [x] Listen for form subit 

* [x] Hide the form

* [x] Show loading spinner

* [x] get data from form and log it 
    get user input on the Client 
    hide/Show elements on client 

## Back-end part

* [x] Create a server folder 
* [x] npm init -y
* [x] npm install express morgan 
* [x] npm i --save-dev nodemon
* [x] Setup index.js 
* [x] Add Get/route
* [x] App POST /twitter route 
    * [x] log out req.body


## Front-end 

* [x] fetch POST /twitter form data 
* [x] See the CORS error and revel in this moment 

## Back-end 

* [x] npm install cors 
* [x] make sure the server is receiving the data
* [x] add JSON body parser middleware
* [x] validate name and content 
    * [x] Must be a string 
    * [x] Cannot be null or Empty
* [x] if not valid
    * [x] Error code 422
    * [x] invalid twitte, must respect the contraints 
* [x] Setup the mongoDb connection 
    * [x] npm install monk
    * [x] connect to the DB 
    * [x] Create documents collections (twitte)
* [x] If valid 
    * [x] Create a new object with
    * [x] name, content, created date 
    * [x] insert into the DB
    * [x] Respond with create new object 
* [x] store the data into the database 

## Front end

* [x] Log out Twitte after POST request 
* [x] Show form 
* [x] Hide loading spinner 

## Back end 

* [x] Get /twittes
    * [x] Respond with twittes from DB 
* [x] Retrieve data from a database on the server

## Front-end 

* [x] Fetch GET /twitte
    * [x] Iterate over array
    * [x] Append each to page 
    * [x] Reverse before appending 
    * [x] show the form 
    * [x] hide loading spinner
* [x] fetch GET /twittes  after creating a new 
* [x] retrieve data from a server on the client using fetch 
* [x] hide/Show elements on client 
* [x] Add elements to the page on client 
* [x] Adding package for security purposes
    * [x] bad-words
    * [x] express-rate-limit 

## Deployement 

* [x] deploy the server with now 
