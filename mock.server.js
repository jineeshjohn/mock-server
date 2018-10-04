const path = require('path');
const jsonServer = require('json-server');


const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get('/summary', (req, res) => {
    const queries = req.query;
    console.log("Query: ", queries)
  res.jsonp(queries);
});
 
server.use(router);




// Use default router
server.listen(1935, () => {
  console.log('JSON Server is running');
});
