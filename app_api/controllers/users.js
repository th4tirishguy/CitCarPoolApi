var data = [
		{
			"id": 1,
			"name": "Michael",
      "loc": {
        "x": -8.614616,
        "y": 51.923562
      }
		},
    {
			"id": 2,
			"name": "Sarah",
      "loc": {
        "x": -8.399520,
        "y": 51.920015
      }
		},
    {
			"id": 3,
			"name": "Jack",
      "loc": {
        "x": -8.531702,
        "y": 51.707459
      }
		},
    {
			"id": 4,
			"name": "Thomas",
      "loc": {
        "x": -8.962285,
        "y": 51.909404
      }
		}
	]

module.exports.index = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  res.json({"users": data});
}
