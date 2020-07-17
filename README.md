# RandOrder

RandOrder is a web application that randomly orders team presentations. A user creates a new session and shares the session URL with each team. Using the URL, each team adds its relevant information, and the data is saved for that session to the database randomly while always keeping its relative order. Then the user can easily access the random order of the teams by using the session ID.

RandOrder is a single-page application (SPA) written in [ReactJS](https://reactjs.org/) and styled with [Material Design](https://material.io/) using [Material-UI components](https://material-ui.com/). The backend is [Node.js](https://nodejs.org/) server and the database is [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cloud service.

## Libraries and Frameworks Used

### Frontend

* [ReactJS](https://reactjs.org) - (see [`Client source`](./client/src))

  - A JavaScript library for building user interfaces

  - This project closely follows [*React Hooks*](https://reactjs.org/docs/hooks-intro.html)
  
* [Material-UI](http://material-ui.com/)

  - React components that follow [Material Design](https://material.io/) guidelines
  
* [React Router](https://reactrouter.com/) - (see [`App.js`](./client/src/components/App.js))

  - Used for client-side routing
  
* [Axios](https://github.com/axios/axios) - (see [`Main.js`](./client/src/components/Main.js))

  -  HTTP client for the browser and node.js platforms
  
### Backend

* [Node.js](https://nodejs.org/) - (see [`Server source`](./index.js))

  - A JavaScript runtime envrionment that executes JavaScript code on a server instead of a browser. 

* [Express.js](https://expressjs.com/) - (see [`Server source`](./index.js))

  - A [Node.js](https://nodejs.org/) web application framework

* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - (see [`Server source`](./index.js))

  - A cloud database service for hosting and managing data in the cloud

* [Mongoose](https://mongoosejs.com/) - (see [`Server source`](./index.js))

  - An Object Data Modeling (ODM) library for MongoDB
  
### Deployment

* [Heroku](https://devcenter.heroku.com/)

  - Builds and deploys through GitHub


## License

```
MIT License

Copyright (c) 2020 Natig Tofigzade

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```
