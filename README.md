# express-template

Note to self on how to set upp an express-server fast:

1 npm init
2 add server.js to entry point (looks like this "entry point: (index.js) server.js)
3 npm install nodemon @babel/core @babel/preset-env @babel/node

4 add config-file named .babelrc (already did)
5 add server.js file

6 go to package.json and add: "start": "nodemon server.js --exec babel-node", to script (already did see package.json) -This means that nodemon will run when we press npm start.

7 npm install express
