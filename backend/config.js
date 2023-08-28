"use strict";

/** Shared config for application; can be required many places. */

require("dotenv").config();
require("colors");

const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

const PORT = +process.env.PORT || 8000;

const header = `postgresql:///`;
let name = "jobly";

// Use dev database, testing database, or via env var, production database
function getDatabaseUri() {
	return process.env.NODE_ENV === "test"
		? `${header}${name}_test`
		: `${header}${name}`;
}

const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

console.log("Jobly Config:".white);
console.log("SECRET_KEY:".grey, SECRET_KEY);
console.log("PORT:".grey, PORT.toString());
console.log("BCRYPT_WORK_FACTOR".grey, BCRYPT_WORK_FACTOR);
console.log("Database:".grey, getDatabaseUri());
console.log("---");

module.exports = {
	SECRET_KEY,
	PORT,
	BCRYPT_WORK_FACTOR,
	getDatabaseUri,
};
