var presets = [ // for the drop down in options.html

  {name: "Amazon", url: "http://www.amazon.com/", image: "/tile_images/amazon.png", color: "#A85C19", search: "http://www.amazon.com/?field-keywords=%s"},
  {name: "Apple", url: "http://www.apple.com/", image: "/tile_images/apple.png", color: "#787878", search: "http://www.apple.com/search/?q=%s"},
  {name: "CNN", url: "http://www.cnn.com/", image: "/tile_images/cnn.png", color: "#CA0002", search: "http://www.cnn.com/search/?query=%s"},
  {name: "CNet", url: "http://www.cnet.com/", image: "/tile_images/cnet.png", color: "#CF0000", search: "http://www.cnet.com/1770-5_1-0.html?query=%s"},
  {name: "DeviantArt", url: "http://browse.deviantart.com/", image: "/tile_images/deviantart.png", color: "#5B6E60", search: "http://browse.deviantart.com/?q=%s"},
  {name: "Digg", url: "http://www.digg.com/", image: "/tile_images/digg.png", color: "#000000"},
  {name: "Dropbox", url: "http://www.dropbox.com/", image: "/tile_images/dropbox.png", color: "#82CFFA"},
  {name: "eBay", url: "http://www.ebay.com/", image: "/tile_images/ebay.png", color: "#0064D2", search: "http://www.ebay.com/sch/i.html?_nkw=%s"},
  {name: "ESPN", url: "http://www.espn.com/", image: "/tile_images/espn.png", color: "#058705", search: "http://search.espn.go.com/%s"},
  {name: "Engadget", url: "http://www.engadget.com/", image: "/tile_images/engadget.png", color: "#3FC0FA", search: "http://www.engadget.com/search/?q=%s"},
  {name: "Evernote", url: "http://www.evernote.com/", image: "/tile_images/evernote.png", color: "#6DB232"},
  {name: "Facebook", url: "http://www.facebook.com/", image: "/tile_images/facebook.png", color: "#3B5997", search: "http://www.facebook.com/search.php?q=%s"},
  {name: "Flickr", url: "http://www.flickr.com/", image: "/tile_images/flickr.png", color: "#FF0084", search: "http://www.flickr.com/search/?q=%s"},
  {name: "GMail", url: "http://www.gmail.com/", image: "/tile_images/gmail.png", color: "#E04C40"},
  {name: "Google", url: "http://www.google.com/", image: "/tile_images/google.png", color: "#058705", search: "https://www.google.com/search?q=%s"},
  {name: "Google+", url: "https://plus.google.com/", image: "/tile_images/googleplus.png", color: "#D64136", search: "https://plus.google.com/u/0/s/%s"},
  {name: "Google Drive", url: "https://drive.google.com/", image: "/tile_images/googledrive.png", color: "#FFC325", search: "https://drive.google.com/#search/%s"},
  {name: "Google Play Store", url: "https://play.google.com/", image: "/tile_images/googleplay.png", color: "#B93A90", search: "https://play.google.com/store/search?q=%s"},
  {name: "Grooveshark", url: "http://www.grooveshark.com/", image: "/tile_images/grooveshark.png", color: "#272727", search: "http://grooveshark.com/#!/search?q=%s"},
  {name: "Hulu", url: "http://www.hulu.com/", image: "/tile_images/hulu.png", color: "#69AE3A", search: "http://www.hulu.com/search?q=%s"},
  {name: "IMDB", url: "http://www.imdb.com/", image: "/tile_images/imdb.png", color: "#E5BC25", search: "www.imdb.com/find?q=%s"},
  {name: "Last.fm", url: "http://www.last.fm/", image: "/tile_images/lastfm.png", color: "#FA332F", search: "http://www.last.fm/search?q=%s"},
  {name: "LinkedIn", url: "http://www.linkedin.com/", image: "/tile_images/linkedin.png", color: "#2590BA"},
  {name: "LiveJournal", url: "http://www.livejournal.com/", image: "/tile_images/livejournal.png", color: "#1A569C"},
  {name: "New York Times", url: "http://www.nytimes.com/", image: "/tile_images/newyorktimes.png", color: "#444444", search: "http://query.nytimes.com/search/sitesearch/#/%s"},
  {name: "Paypal", url: "http://www.paypal.com/", image: "/tile_images/paypal.png", color: "#0079C1"},
  {name: "Picasa", url: "http://picasa.google.com/", image: "/tile_images/picasa.png", color: "#9A469E"},
  {name: "Pinterest", url: "http://www.pinterest.com/", image: "/tile_images/pinterest.png", color: "#CB2027", search: "http://pinterest.com/search/?q=%s"},
  {name: "reddit", url: "http://www.reddit.com/", image: "/tile_images/reddit.png", color: "#FF936B", search: "http://www.reddit.com/search?q=%s"},
  {name: "Slashdot", url: "http://www.slashdot.com/", image: "/tile_images/slashdot.png", color: "#005E5E", search: "http://slashdot.org/index2.pl?fhfilter=%s"},
  {name: "SoundCloud", url: "http://www.soundcloud.com/", image: "/tile_images/soundcloud.png", color: "#F77E0F", search: "http://soundcloud.com/search?q%5Bfulltext%5D=%s"},
  //{name: "The Pirate Bay", url: "http://www.thepiratebay.se/", image: "/tile_images/thepiratebay.png", color: "#000000"},
  {name: "Tumblr", url: "http://www.tumblr.com/", image: "/tile_images/tumblr.png", color: "#355370", search: "http://www.tumblr.com/tagged/%s"},
  {name: "Twitter", url: "http://www.twitter.com/", image: "/tile_images/twitter.png", color: "#33CCFF", search: "http://twitter.com/search?q=%s&src=typd"},
  {name: "Wikipedia", url: "http://www.wikipedia.org/", image: "/tile_images/wikipedia.png", color: "#000000", search: "http://en.wikipedia.org/wiki/%s"},
  {name: "Wolfram Alpha", url: "http://www.wolframalpha.com/", image: "/tile_images/wolframalpha.png", color: "#D71920", search: "http://www.wolframalpha.com/input/?i=%s"},
  {name: "WordPress", url: "http://www.wordpress.com/", image: "/tile_images/wordpress.png", color: "#444444", search: "http://wordpress.org/search/%s"},
  {name: "Yahoo!", url: "http://www.yahoo.com/", image: "/tile_images/yahoo.png", color: "#7B0099", search: "http://search.yahoo.com/search;_ylt=?p=%s"},
  {name: "Youtube", url: "http://www.youtube.com/", image: "/tile_images/youtube.png", color: "#CB322C", search: "http://www.youtube.com/results?search_query=%s"}

];
