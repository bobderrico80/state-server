# State Server

Simple API for looking up location by state based on a point on earth.

State data is stored in `data/states.json`.

## Usage

```
$ curl  -d "longitude=-77.036133&latitude=40.513799" http://localhost:8080/
Pennsylvania
```

If coordinates are invalid, or are not mapped to any state, the endpoint will respond with:

```
Coordinate is not located in any defined state
```

## Local Development

### Installing dependencies

After cloing the repo, enter the repo folder and run `npm install` to install dependencies

### Starting the server

Ensure NodeJS version 10.* or later is installed. Start the server with `npm start`.

### Running Tests

Run unit tests with `npm test`

## Running with Docker

A `Dockerfile` is provided to easily run the server in Docker. Assuming Docker is installed, run:

```
docker build -t state-server . && docker run -d state-server
```

This will build and run the state server image in detached mode.
