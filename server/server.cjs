const jsonServer = require("json-server");
const auth = require("json-server-auth");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

server.db = router.db

server.use(middlewares);
server.use(auth);
server.use(router);

server.listen(4001, () => {
  console.log("JSON Server is running");
});
