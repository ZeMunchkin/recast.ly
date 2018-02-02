var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      'q': options.query,
      'maxResults': options.max,
      'part': 'snippet',
      'videoEmbeddable': true,
      'type': 'video',
      'key': options.key,
    },
    success: function (data) {
      console.log('Success! Here is the data: ', data);
      callback(data.items);
    },
    error: function (data) {
      console.log('Error! ', data);
    }
  });
};

window.searchYouTube = searchYouTube;

var debouncedSYT = _.debounce(searchYouTube, 500);

window.debouncedSYT = debouncedSYT;