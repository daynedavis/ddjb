# ddjb
React frontend, hapi.js server, mongodb, running in docker containers.

## Starting the App
* Start for development with `npm start`. 
    * This enables hot reloading for the both the react app and the node server so when you make a change it will automatically restart.

* Start for production with `npm run prod`

* Both allow you to access the app at http://localhost:8080

* You can stop the processes with ctrl+c. After it quits run `docker ps` too make sure all of the containers stopped correctly. 
    * If some are still running run `npm run stopall` to kill all the running containers.


## Package.json Scripts
The commands to do things like starting the hapi.js server, build the webpack bundle, and run docker-compose are saved as scripts in the package.json file. This allows you to run these long commands with a short alias. You can run the start script with `npm start`, but all other scripts require you to enter run before the name e.g. `npm run prod`.

## Hapi.js Server
[Hapi.js](https://hapijs.com/tutorials) is a node library that allows you to build clean and modular node servers. The main file is called server.js and it controls creating the server, connecting to the db, and starting the server. It uses the register function to add plugins. Inert is a plugin that allows you to send static files like the index.html file and the javascript bundle. The next two plugins are two modules that split the server code into two sections. This allows you to divide the server code into clean sections. The core plugin creates the necessary routes to serve the static files, and the user plugin creates the routes to add and remove users to the database, creates a user model to interact with the db, and creates a controller to house the logic.

## Docker and docker-compose
Docker allows us to run our application in containers and handles all of the necessary dependencies. 

The Dockerfile pulls a node image that runs on linux, runs npm insall to get the necessary dependencies, copies in all of our app files, exposes port 8080, and starts the app.

Docker-compose.yml allows us to run multiple containers at once. It uses the Dockerfile but also overrides some of the stuff in it to provide functionality needed for running the app in a development setting e.g. it overrides the CMD, PORT, and EXPOSE values. 
* It creates a mongodb container called db from the official mongo image on dockerhub that runs on port 27017. It also creates a volume (directory to hold db data) in the container at /data/db and stores it on your machine at /tmp/hrdb so the data persists even when the container restarts.
* It creates a container to run mongoclient (an app that allows you to inspect the contents of your db at http://localhost:3001). To use click connect, create new, and enter mongodb://db:27017/hrdb as the Connection Url.
* It creates a container for our React application running on webpack-dev-server to allow hot reloading at port 8080.
* And it creates a container for our node hapi.js server that runs with nodemon to allow for hot reloading at port 3000.

Docker-compose-production.yml also creates containers but it only starts the db and serves our react application straight from the hapi.js node server without hot reloading and it minifies all of the js code.


## CSS Modules
All styles come from app.css and are loaded into the app as [CSS Modules](https://css-tricks.com/css-modules-part-1-need/). To use just import the css file into the component you want to style e.g ```import styles from '../style/app.css'``` and then add the class in the component as `className={styles.class}`. Check out Home.jsx for an example of how to do this.



