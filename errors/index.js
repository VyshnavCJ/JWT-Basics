const UnauthenticatedError = require("../errors/unauthenticated");
const BadRequest = require("../errors/bad-request");
const CustomAPIError = require("../errors/custom-error");

module.exports = { CustomAPIError, BadRequest, UnauthenticatedError };
