const globalErrorHandler = (err, req, res, next) => {
  const stack = err.stack;
  const message = err.message;
  const status = err.status ? err.status : 'failed';
  const statusCode = err?.statusCode ? err.statusCode : 500;

  res.status(statusCode).json({
    message,
    stack,
    status,
  });
};

const notFoundHandler =
  ('*',
  (req, res) => {
    console.log(req.originalUrl);
    res.status(404).json({
      message: `${req.originalUrl} -  route not found`,
    });
  });

module.exports = { globalErrorHandler, notFoundHandler };
