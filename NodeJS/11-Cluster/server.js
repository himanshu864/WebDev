const cluster = require("cluster");
const os = require("os");
const process = require("process");
const app = require("express")();

const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  app.get("/", (req, res) => {
    res.writeHead(200);
    res.end("hello world\n");
  });

  app.listen(8000);
  console.log(`Worker ${process.pid} started`);
}
