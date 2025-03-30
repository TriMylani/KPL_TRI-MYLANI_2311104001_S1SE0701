class SayaTubeVideo {
  constructor(title) {
    if (!title || title.length > 100) {
      throw new Error("Judul video harus diisi dan maksimal 100 karakter.");
    }
    this.id = Math.floor(10000 + Math.random() * 90000);
    this.title = title;
    this.playCount = 0;
  }

  increasePlayCount(count) {
    if (count > 10000000) {
      throw new Error(
        "Penambahan play count maksimal 10.000.000 per kali pemanggilan."
      );
    }
    if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
      throw new Error("Overflow: play count melebihi batas maksimum integer.");
    }
    this.playCount += count;
  }

  printVideoDetails() {
    console.log(`Video ID: ${this.id}`);
    console.log(`Title: ${this.title}`);
    console.log(`Play Count: ${this.playCount}`);
  }
}

try {
  let video = new SayaTubeVideo("Tutorial Design By Contract – Tri Mylani");
  video.increasePlayCount(5000);
  video.printVideoDetails();
} catch (error) {
  console.error(error.message);
}
