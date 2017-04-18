var data = [
		{
			"id": 1,
			"name": "Michael",
      "loc": {
        "x": -8.614616,
        "y": 51.923562
      },
      "campus": "CIT Bishopstown",
      "currentStatus": "Passenger"
		},
    {
			"id": 2,
			"name": "Sarah",
      "loc": {
        "x": -8.399520,
        "y": 51.920015
      },
      "campus": "CIT Bishopstown",
      "currentStatus": "Passenger"
		},
    {
			"id": 3,
			"name": "Jack",
      "loc": {
        "x": -8.531702,
        "y": 51.707459
      },
      "campus": "CIT Crawford",
      "currentStatus": "Passenger"
		},
    {
			"id": 4,
			"name": "Thomas",
      "loc": {
        "x": -8.962285,
        "y": 51.909404
      },
      "campus": "CIT School of Music",
      "currentStatus": "Driver"
		},
    {
      "id": 5,
      "name": "John",
      "loc": {
        "x": -8.286267,
        "y": 52.132275
      },
      "campus": "CIT School of Music",
      "currentStatus": "Driver"
    },
    {
      "id": 6,
      "name": "Hannah",
      "loc": {
        "x": -8.383161,
        "y": 51.815982
      },
      "campus": "CIT School of Music",
      "currentStatus": "Passenger"
    },
    {
      "id": 7,
      "name": "Ryan",
      "loc": {
        "x": -8.288213,
        "y": 51.805610
      },
      "campus": "CIT School of Music",
      "currentStatus": "Driver"
    },
    {
      "id": 8,
      "name": "Andrew",
      "loc": {
        "x": -8.961634,
        "y": 51.909912
      },
      "campus": "CIT School of Music",
      "currentStatus": "Passenger"
    }
	]

module.exports.index = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
  res.json({"users": data});
}
