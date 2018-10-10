var express = require('express'),
   app = express(),
   port = process.env.PORT || 1935;

app.listen(1935, () => {
  console.log('JSON Server is running');
});
app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');

    next();
});
app.get('/summary', (req, res) => {
    const queries = req.query;
    res.jsonp(queries);
    console.log("JJJ:",queries);
});
