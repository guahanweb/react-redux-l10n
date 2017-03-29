# Permissions Center UI

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