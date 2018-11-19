
var routes = require("../data/friends")


module.exports = (app) => {

    app.get('/api/friends',  function (req, res) {
        res.json(routes)
      });
    
    
    app.post('/api/friends', function (req, res) {
        res.json(req.body)
      });
      for()
}







  