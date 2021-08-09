//1903f6bd0aa548db8b8a771e1bc02d6d

var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2021-07-18&' +
          'sortBy=popularity&' +
          'apiKey=1903f6bd0aa548db8b8a771e1bc02d6d';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })