const Joi = require("joi");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiException");

class ToDoValidator {
  constructor() {
    this.options = {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true,
    };
  }

  operationsById = async (req, res, next) => {
    const schema = Joi.object({
      id: Joi.string().id().required(),
    });

    const { error, value } = schema.validate(req.params, this.options);

    if (error) {
      const errorMessage = error.details
        .map((details) => {
          return details.message;
        })
        .join(", ");

      next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
    } else {
      req.body = value;
      return next();
    }
  };

  createTodo = async (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().required(),
      description: Joi.string(),
      status: Joi.string().valid("complete", "uncomplete"),
    });

    const { error, value } = schema.validate(req.body, this.options);

    if (error) {
      const errorMessage = error.details
        .map((details) => {
          return details.message;
        })
        .join(", ");

      res
        .status(httpStatus.BAD_REQUEST)
        .send(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
    } else {
      req.body = value;
      return next();
    }
  };
}

module.exports = ToDoValidator;
