// A song needs to have a title, artist, album name, and cover art

function Song (title,artist,album,coverArtURL) {
	var song = {};
	song.title: title;
	song.artist: artist;
	song.album: album;
	song.coverArt: function(){
		$('#coverartTableLibrary').addChild('<td><img src=' + coverArtURL +'/></td>');
	};
	return song;
}