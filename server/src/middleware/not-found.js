export function notFoundHandler(_request, response) {
  response.status(404).json({
    error: {
      status: 404,
      message: "Route not found",
    },
  });
}
