import dotenv from "dotenv";
import { WebApplication } from "@webtypen/webframez-core";
// import { DBDrivers } from "@webtypen/webframez-core";
// import { MongoDBDriver } from "@webtypen/webframez-dbdriver-mongodb";
import { Kernel } from "./app/Kernel";
import application from "./config/application";
import database from "./config/database";

// DBDrivers.register("mongodb", MongoDBDriver);

const app = new WebApplication();
app.boot({
    kernel: Kernel,
    config: {
        application: application,
        database: database,
    },
    port: process.env.PORT ? process.env.PORT : 3000,
    basename: process.env.BASENAME ? process.env.BASENAME : null,
});
