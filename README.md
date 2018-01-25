# Char Sortinator Part Deux
### By Justin Cruz

### Live Link: https://damp-falls-31971.herokuapp.com/
There are several components involved in the creation of this full stack application, which are:

1) Server
2) Client
3) Testing Suite

Following commands can be used after cloning this repo:
1) npm install
2) npm test
3) npm start

## Server
### Modules used: Express, Cors, Body Parser

Aside from express, the two other middleware-used modules were respectively utilized to allow cross-origin and to allow parameters to be used during get requests.

Middlewares aside, the server utilizes two endpoints which are '/api/:string' to send a get request to the server to return the sorted string. The second endpoint created was for '\*', which I designed to simply redirect to '/' which just re-renders app itself in the event of typing some arbitrary endpoint that would just give a 404 error.

## Client
### Modules used: Axios, Bootstrap

The client is built using an html and a css file. The lack of a js file is because there was only one function needed to handle form inputs, and making an http request. The interesting part to note was the use of async and await to make this function work.

## Testing Suite
### Modules used: Axios

Given the nature of the program, minimal testing will suffice. Axios is used to make http requests.