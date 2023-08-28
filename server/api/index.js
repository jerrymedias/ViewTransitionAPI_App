const express = require("express");
const  bodyParser = require("body-parser");

const { getBreeds, getDogs, getDog } = require("./api");

const Api = express();

// Hide x-powered-by header
Api.set("x-powered-by", false);

const TIMEOUT = 1000;
// always send JSON headers
Api.use((req, res, next) => {
    req.setTimeout(TIMEOUT, () => {
        console.log("URL in 408: ", req.originalUrl);
        let err = new Error(`Request Timeout ${req.originalUrl}`);
        err.status = 408;
        next(err);
    });
    // Set the server response timeout for all HTTP requests
    res.setTimeout(TIMEOUT, () => {
        console.log("URL in 503: ", req.originalUrl);
        let err = new Error(
            `Service Unavailable due to response timeout ${req.originalUrl}`
        );
        err.status = 503;
        next(err);
    });
    res.contentType("application/json");
    next();
});

Api.use(bodyParser.json());

Api.use("/dog", getDog);
Api.use("/dogs", getDogs);
Api.get("/breeds", getBreeds);

Api.use("*", (req, res) => res.status(404).end());

module.exports = Api
