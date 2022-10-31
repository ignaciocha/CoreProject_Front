const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware(["/api", "/socket"], {
      target: "http://localhost:8090/gameus",
      changeOrigin: true,
      ws: true,
      router: {
        "/socket": "ws://localhost:8090/gameus"
      }
    })
  )
}