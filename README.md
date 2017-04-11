<h1><img src="https://jenkins.cd.go.com/buildStatus/icon?job=dtss.permissionscenter.ui.pr" align="right" style="float: right" /><span>Permissions Center UI</span></h1>

## Quick Start 

After cloning the repo, run the following from within the `/app` directory:

```
$ npm i
$ npm run dev
```

You will now have the application running at `http://localhost:4118`.  In addition to the application running, all server file changes are being watched by `nodemon` which will restart your Hapi server if changes are made.

Your SASS files are also being watched and auto-built into the bundled CSS assets, and your `*.js` and `*.jsx` files are also be watched and live-built into the bundled JavaScript assets.

## Docker Support
If you want to test the Docker image, navigate to the project root and run the following:

```
$ docker build -t 'epc-ui-1.0.0' .
$ docker run -it --rm -p 4118:4118 epc-ui-1.0.0
```

At this point, you will be able to navigate to the same URL (`http://localhost:4118`), now hosted via Docker.

## Unit Testing
Unit tests are configured to run on both client and server code using mocha. The following commands are all supported:

```bash
# client
$ npm run test:client

# server
$ npm run test:server

# both client & server
$ npm test

# code coverage report (client)
$ npm run coverage
```

If you execute code coverage, the results will be placed in `/app/coverage` in the form of a consumable JSON file and a viewable HTML page.
