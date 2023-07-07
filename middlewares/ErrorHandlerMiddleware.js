const status = require("../config/statusCodes");

const ErrorHandlerMiddleware = (err, req, res, next) => {
    const statusCode = res.statusCode || status.SERVER_ERROR;
    let error = "Server Error";

    switch (statusCode) {

        case status.SERVER_ERROR:
            error = "Server Error.";
            break;
        
        case status.VALIDATION_ERROR:
            error = "Validation Error.";
            break;
                    
        case status.UNAUTHORIZED:
            error = "Not Authorized.";
            break;
                    
        case status.NOT_FOUND:
            error = "404 Not Found.";
            break;
                    
        case status.FORBIDDEN:
            error = "Forbiddend.";
            break;
    
        default:
            // No error
            break;
    }

    res.json(getErrorBody(error, err.message));
}


const getErrorBody = (err, msg) =>{
    return {
        error: err,
        message : msg
    }
}


module.exports = ErrorHandlerMiddleware;