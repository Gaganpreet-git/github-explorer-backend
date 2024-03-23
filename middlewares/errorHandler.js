const errorHandler = (err, req, res, next) => {
  const code = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  const response = { code, message };
  res.status(code).json(response);
};

module.exports = errorHandler;
