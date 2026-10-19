export function requestLogger(request, response, next) {
  const startedAt = Date.now();

  response.on("finish", () => {
    console.info(
      `${request.method} ${response.statusCode} ${Date.now() - startedAt}ms`,
    );
  });

  next();
}
