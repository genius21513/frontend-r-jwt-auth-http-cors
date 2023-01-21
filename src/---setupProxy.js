const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      // target: "http://localhost:8080",
      // target: "http://10.10.13.227:8080",
      // target: "http://127.0.0.1:8080",
      target: "http://13.53.64.138:8080",
      changeOrigin: true,
    })
  );
};
