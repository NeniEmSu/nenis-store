# Full Stack JavaScript

> Build a full stack application that allows users to view products, add products, update products and delete products.

## Deployed

- Client: <https://nenis-store.vercel.app/>
- Server: <https://nenis-store.herokuapp.com/>

I'll be using:

- Client:
  - Vanilla JavaScript for DOM Manipulation and fetch for AJAX requests
  - Bootstrap for style and layout
- Server:

  - Postgre for the database
  - knex.js for the database migrations, seeds and queries.
  - express.js for the JSON routes

- Prerequisites (Mac OS Commands)
  - Latest version of Node.js
    - `brew install node || choco install nodejs`
  - lite-server
    - `npm install -g lite-server || npx lite-server`
  - Postgre
    - `brew install postgre || choco install postgresql`
    - `brew services start postgre || psql`
    - `createdb [database_name] || CREATE DATABASE [database_name]`
  - Express Generator
    - `npm install -g express-generator or use npx express-generator`
  - Knex installed globally or via npx
    - npm install -g knex
    - Make migration `npx knex migrate:make migration_name`
    - Run migration `npx knex migrate:latest`
    - Make seed `npx knex seed:make seed_name`
    - Run seed `npx knex seed:run`

## Check List

- [x] Setup client folder
  - [x] index.html
  - [x] Add bootswatch CDN
  - [x] Create index.js
  - [x] git init
- [x] Create a server folder
  - [x] Generate Express App
- [x] Convert Express App to JSON API
  - [x] Remove view rendering/views folder
  - [x] Remove routes folder
  - [x] Remove static serve and public folder
  - [x] Update error handler
  - [x] Add GET `/` endpoint
- [x] Client: Try to make a request
  - [x] See the CORS error and remember this moment
  - [x] Add CORS to the API
- [x] Create database
- [x] Initialize knex project
  - [x] Install knex and pg
  - [x] Create knexfile.js
- [x] Create product table migration
- [x] Seed product table with sample data
- [x] Add api folder and create/mount router
- [x] Connect to the database
  - [x] Create database connection file
  - [x] Create a queries file
- [x] List all records with GET /api/v1/products
  - [x] Create query
  - [x] Create route
- [x] List all records in /index.html
  - [x] AJAX Request to GET /products
  - [x] Append to DOM
  - [x] Each product links to /product.html?id=:id
  - [x] Display a link to /create.html
- [x] Show one record with GET /api/v1/products/:id
  - [x] Validate id
  - [x] Create query
  - [x] Create route
- [x] Show one record in /product.html?id=:id
  - [x] Parse query string to get id
  - [x] AJAX Request to GET /products/:id
  - [x] Append to DOM
  - [x] Display link to /edit.html?id=:id
- [x] Create a record with POST /api/v1/products
  - [x] Create route
  - [x] Validate product!
  - [x] Create query
- [x] Create a record in /new.html
  - [x] Display a form with input boxes for all fields
  - [x] Display a button to submit the creation of the resthece
    - [x] Validate all inputs
    - [x] POST /products
    - [x] Successful creation should redirect to /product.html?id=:id
- [x] Update a record with PUT /api/v1/products/:id
  - [x] Create route
  - [x] Validate id
  - [x] Validate updates
  - [x] Create query
- [x] Update one record in /product.html?id=:id
  - [x] Display a form with input boxes for all fields
  - [x] Display a button to submit the update of the resthece
    - [x] Validate all inputs
    - [x] PUT /products/:id
    - [x] Successful update should redirect to /product.html?id=:id
- [x] Delete a record with DELETE /api/v1/products/:id
  - [x] Create route
  - [x] Validate id
  - [x] Create query
- [x] Delete a record
  - [x] Add a delete button to the /product.html page
    - [x] DELETE /products/:id
    - [x] Successful deletion should redirect to index.html
- [x] Deploy server to Heroku
  - [x] Sign up and login to heroku
  - [x] Install the heroku CLI
  - [x] Create a heroku app
  - [x] Push to heroku
  - [x] View heroku logs
- [x] Add Postgres DB to Heroku
  - [x] Add postgres addon
  - [x] Add production connection to knex
  - [x] Run migrations on production DB
  - [x] Run seeds on production DB
- [x] Deploy client to now/vercel
  - [x] Sign up and login to now/vercel
  - [x] Install the now CLI
  - [x] Create a now app
  - [x] Push to now

### API endpoints

```json
  "routes": {
      "get-products": "/api/v1/products",
      "get-single-product": "/api/v1/products/1",
      "add-product": "/api/v1/products",
      "update-product": "/api/v1/products/:id",
      "delete-product": "/api/v1/products/:id",
    },
```

## Deployment

- Server

  ```sh
  cd /server
  heroku login # login once
  heroku create [project-name] # Initializes heroku app and adds remote.
  heroku addons:create heroku-postgresql:[plane-name] -app [project-name] # add a postgres db addon to your heroku app where plane-name = hobby-dev
  git init # initialize app
  heroku git:remote -a nenis-store # setup remote
  git commit -am "deploy to heroku" # commit
  git push heroku master # deploy latest code to heroku
  heroku run knex migrate:latest # run migrations on production db
  heroku run knex seed:run  # run seeds on production db
  heroku open # open heroku url in browser
  ```

= Testing

```sh
  cd /server
  npm run test # test with jest
```

- Client

  - Login to now/varcel
  - Click create new project
  - Link to ripository dispecific folder <https://github.com/NeniEmSu/nenis-store/tree/main/client>
  - Click deploy

## Development

Run server

```sh
  cd /server
  npm install nodemon -g # to use nodemon as it is not installed locally
  npm run dev #nodemon run server and watches for changes
```

Run client

```sh
  cd /client
  # for non global installs
  npx lite-server

  #For global install
  npm install --global lite-server

    # To run:
    lite-server
```
