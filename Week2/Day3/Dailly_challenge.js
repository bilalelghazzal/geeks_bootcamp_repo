class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time; // in seconds
    }

    watch() {
        return `${this.uploader} watched all ${this.time} seconds of ${this.title}!`;
    }
}

// Instantiating the first Video instance
const video1 = new Video("Learning JavaScript", "Alice", 300);
console.log(video1.watch());

// Instantiating the second Video instance
const video2 = new Video("Node.js Tutorial", "Bob", 600);
console.log(video2.watch());

// Bonus: Storing data for five videos in an array of objects
const videoData = [
    { title: "HTML Crash Course", uploader: "Charlie", time: 200 },
    { title: "Advanced CSS", uploader: "Dana", time: 400 }
];

// Bonus: Loop to instantiate Video instances and call watch()
const videos = videoData.map(data => new Video(data.title, data.uploader, data.time));

videos.forEach(video => {
    console.log(video.watch());
});

//fin 