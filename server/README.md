## Init

- The project was started with:

        npm init -y

## Dependencies

**Server (Node.js):**

The server dependencies used and the motivations for using them:

- express (for manage routers)

        npm install express

- celebrate (validator for express)

        npm install celebrate

- cors (for change permissions on API use)

        npm install cors

- knex (SQL query builder)

        npm install knex

- multer (to file uploads)

        npm install multer

- sqlite3 (for manage database)

        npm install sqlite3

- @types/express (for use express in typescript)

        npm install @types/express -D

- typescript (typescript modules)

       npm install typescript -D

- ts-node (to execute typescript applications)

       npm install ts-node -D

## Init TypeScript

        npx tsc --init

## How to Use

To run this server project, you'll need:

- [Node.js v12.18.0][nodejs] or higher - For run this project
- [Npm v6.14.5](https://www.npmjs.com/) or higher - For manage the project dependencies

[nodejs]: https://nodejs.org/

After, open the command line in your server folder and:

        npx ts-node src/server.ts

or,

to facilite the project execution, install `ts-node-dev`, for earn the hot reload function.

        npm install ts-node-dev -D

In `package.json` create the script:
```json
"scripts" : {
    "dev" : "ts-node-dev src/server.ts"
}
```
Done :) , now, you can execute, with all hot reload benefits, using:

    npm run dev

<br />
<h5 align="center">
Made with :heart: by Brandow Buenos

[Get in touch!](https://www.linkedin.com/in/brandowbuenos/)

Use things, love people. Not the other way around.</h5>