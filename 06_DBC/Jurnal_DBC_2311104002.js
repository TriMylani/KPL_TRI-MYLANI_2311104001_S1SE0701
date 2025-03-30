class SayaTubeVideo {
  constructor(title) {
    if (!title || title.length > 200) {
      throw new Error("Judul video harus diisi dan maksimal 200 karakter.");
    }
    this.id = Math.floor(10000 + Math.random() * 90000); // 5-digit ID random
    this.title = title;
    this.playCount = 0;
  }

  increasePlayCount(count) {
    if (count > 25000000 || count < 0) {
      throw new Error(
        "Penambahan play count harus antara 0 hingga 25.000.000."
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

class SayaTubeUser {
  constructor(username) {
    if (!username || username.length > 100) {
      throw new Error("Username harus diisi dan maksimal 100 karakter.");
    }
    this.username = username;
    this.uploadedVideos = [];
  }

  addVideo(video) {
    if (!(video instanceof SayaTubeVideo)) {
      throw new Error("Hanya objek SayaTubeVideo yang bisa ditambahkan.");
    }
    this.uploadedVideos.push(video);
  }

  getTotalVideoPlayCount() {
    return this.uploadedVideos.reduce(
      (total, video) => total + video.playCount,
      0
    );
  }

  printAllVideoPlaycount() {
    console.log(`User: ${this.username}`);
    for (let i = 0; i < Math.min(10, this.uploadedVideos.length); i++) {
      console.log(`Video ${i + 1} judul: ${this.uploadedVideos[i].title}`);
    }
  }
}

function main() {
  try {
    let user = new SayaTubeUser("Tri Mylani");
    let judulFilm = [
      "Petaka Gunung Gede",
      "Dark Nuns",
      "Ambyar Mak Byar",
      "Jumbo",
      "The Siege at Thorn High",
      "The Most Beautiful Girl in the World",
      "Si Manis Jembatan Ancol 2",
      "Darah Nusantara",
      "Serenade Malam",
      "Gita Cinta dari SMA 2025",
    ];

    let videos = [];
    for (let i = 0; i < judulFilm.length; i++) {
      let video = new SayaTubeVideo(
        `Review Film ${judulFilm[i]} oleh Tri Mylani`
      );
      video.increasePlayCount((i + 1) * 10000);
      user.addVideo(video);
      videos.push(video);
    }

    user.printAllVideoPlaycount();
    console.log(`Total Play Count: ${user.getTotalVideoPlayCount()}`);

    videos.forEach((video) => video.printVideoDetails());
  } catch (error) {
    console.error(error.message);
  }
}

main();
