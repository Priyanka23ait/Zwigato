const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(cors());

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://namastedev.com",
    changeOrigin: true,
    secure: true,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36",
      Accept: "application/json",
    },
  })
);

app.get("/", (req, res) => {
  res.send("Proxy running 🚀");
});

app.listen(5000, () => {
  console.log("Proxy running on http://localhost:5000");
});
