export function errorHandler(error, _request, response, _next) {
  const status =
    Number.isInteger(error.status) && error.status >= 400 && error.status < 600
      ? error.status
      : 500;
  const message =
    status >= 500 ? "Internal server error" : error.message || "Request failed";

  response.status(status).json({
    error: {
      status,
      message,
    },
  });
}
