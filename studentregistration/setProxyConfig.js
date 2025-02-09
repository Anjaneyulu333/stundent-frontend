const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/students', // Requests starting with /api will be proxied
    createProxyMiddleware({
      target: 'http://localhost:8080', // Your backend server
      changeOrigin: true,
      pathRewrite: { '^/api/students': '' }, // Removes "/api" prefix when forwarding
    })
  );
};
