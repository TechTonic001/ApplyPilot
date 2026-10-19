export function getHealth(_request, response) {
  response.status(200).json({
    status: "ok",
    message: "ApplyPilot API is healthy",
  });
}
