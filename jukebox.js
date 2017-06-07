
function Jukebox() {
	this.song = document.getElementById('song');

	this.music = [];
	this.loadSongs = function (addSong) {
		this.music.push(addSong);
	};
	this.songChange = function (newSong) {
		this.song.src = 'Music/' + newSong;
		this.song.load();
	}
	this.listMusic = function (songTitle) {
		let musicArray = [];
		for (var i = 0; i < this.music.length; i++) {
			musicArray[i] = this.music[i];
		}
		return musicArray;
	}
	this.playSong = function(){
		if (this.song.paused){
			this.song.play();
		}else {this.song.pause()};
	};
	this.stop = function(){
		this.song.pause();
		this.song.currentTime = 0;
	};
};

function Song(location, songName, artist) {
	this.locaiton = location;
	this.songName = songName;
	this.artist = artist;
	this.songInfo = function () {
		return this.songName + ' by ' + this.artist;
	}
};

let jukebox = new Jukebox();
let decode = new Song('Music/Decode.mp3', 'Decode', 'Paramore');
let puppets = new Song('Music/Puppets.mp3', 'Puppets', 'Atmosphere');
let allIWant = new Song('Music/All-I-Want.mp3', 'All I Want', 'A day to Remember');
let almostHere = new Song('Music/Almost-Here.mp3', 'Almost Here', 'The Academy Is...');
let brainDamage = new Song('Music/Brain-Damage.mp3', 'Brain Damage', 'Pink Floyd');
let breathIntoMe = new Song('Music/Breath-Into-Me.mp3', 'Breathe Into Me', 'Red');
let chillstep = new Song('Music/Chillstep.mp3', 'Chillstep Compilation', 'Varius Artists');
let comingUndone = new Song('Music/Coming-Undone.mp3', 'Coming Undone', 'Korn');
let daysToCome = new Song('Music/', 'Days to Come', 'Seven Lions');
let downInAHole = new Song('Music/', 'Down in a Hole', 'Alice in Chains');
let eclipse = new Song('Music/', 'Eclipse', 'Pink Floyd');
let guarntees = new Song('Music/', 'Guarntees', 'Atmosphere');
jukebox.loadSongs(decode);
jukebox.listMusic(decode);
jukebox.loadSongs(puppets);
jukebox.listMusic(puppets);
jukebox.loadSongs(allIWant);
jukebox.loadSongs(almostHere);
jukebox.loadSongs(brainDamage);
jukebox.loadSongs(breathIntoMe);
jukebox.loadSongs(chillstep);
jukebox.loadSongs(comingUndone);
jukebox.listMusic(allIWant);
jukebox.listMusic(almostHere);
jukebox.listMusic(brainDamage);
jukebox.listMusic(breathIntoMe);
jukebox.listMusic(chillstep);
jukebox.listMusic(comingUndone);
jukebox.loadSongs(daysToCome);
jukebox.loadSongs(downInAHole);
jukebox.loadSongs(eclipse);
jukebox.loadSongs(guarntees);
jukebox.listMusic(daysToCome);
jukebox.listMusic(downInAHole);
jukebox.listMusic(eclipse);
jukebox.listMusic(guarntees);

document.getElementById('playPauseButton').addEventListener('click', function () {
	jukebox.playSong();	
});

let stopButton = document.getElementById('stopMusic');
stopButton.addEventListener('click', function stopMusic(){
	jukebox.stop();
});

let songs = jukebox.listMusic();
let html = '';
for (var i = 0; i < songs.length; i++){
	html  += '<p>' + songs[i].songInfo() + '</p>';
};
document.getElementById('list').innerHTML = html;

// Choose file (song) form drop down to add to jukebox and play through play button.
document.getElementById('changeSong').addEventListener('change', function () {
	jukebox.songChange(this.value.split('\\').pop());

})