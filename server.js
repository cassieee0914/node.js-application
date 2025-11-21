const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write("Ma. Cassandra E. Matosinos");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});