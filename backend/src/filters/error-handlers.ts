import { Response } from 'express';
import { CustomError } from 'src/utils/CustomError';


export const devErrors = (res: Response, error: CustomError) => {
    res.status(error.statusCode).json({
        status: error.status,
        message: error.message,
        stackTrace: error.stack,
        error: error
    });
};

export const castErrorHandler = (err: any) => {
    // console.log("castErrorHandler");

    const msg = `Invalid value for ${err.path}: ${err.value}!`;
    return new CustomError(msg, 400);
};

export const duplicateKeyErrorHandler = (err: any) => {
    // console.log("duplicateKeyErrorHandler");
    // console.log(err);
    
    const field = Object.keys(err.keyPattern)[0];
    const value = err?.keyValue[field];
    const msg = `${value} is already used. Please use a different value for the ${field} field.`;
    return new CustomError(msg, 400);
};

export const validationErrorHandler = (err: any) => {

    const msg = `Invalid input data: ${err?.message}`;
    return new CustomError(msg, 400);
};

export const prodErrors = (res: Response, error: CustomError) => {
    // console.log("prodErrors");

    if (error.isOperational) {
        res.status(error.statusCode).json({
            status: error.status,
            message: error.message
        });
    } else {
        res.status(500).json({
            status: 'error',
            message: 'Something went wrong! Please try again later.'
        });
    }
};
