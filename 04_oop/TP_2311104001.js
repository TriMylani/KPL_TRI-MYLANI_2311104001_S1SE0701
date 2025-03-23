// Implementasi Table-Driven untuk mendapatkan kode pos
class KodePos {
  constructor() {
    this.kodePosMap = {
      Batununggal: "40266",
      Kujangsari: "40287",
      Mengger: "40267",
      Wates: "40256",
      Cijaura: "40287",
      Jatisari: "40286",
      Margasari: "40286",
      Sekejati: "40286",
      Kebonwaru: "40272",
      Maleer: "40274",
      Samoja: "40273",
    };
  }

  getKodePos(kelurahan) {
    return this.kodePosMap[kelurahan] || "Kode pos tidak ditemukan";
  }
}

// Implementasi State-Based Construction untuk simulasi mesin pintu
class DoorMachine {
  constructor() {
    this.state = "Terkunci";
    console.log("Pintu terkunci");
  }

  ubahState(stateBaru) {
    this.state = stateBaru;
    if (stateBaru === "Terkunci") {
      console.log("Pintu terkunci");
    } else if (stateBaru === "Terbuka") {
      console.log("Pintu tidak terkunci");
    }
  }
}

// Simulasi penggunaan
const kodePos = new KodePos();
console.log(kodePos.getKodePos("Batununggal")); // Output: 40266
console.log(kodePos.getKodePos("Sekejati")); // Output: 40286

const pintu = new DoorMachine();
pintu.ubahState("Terbuka"); // Output: Pintu tidak terkunci
pintu.ubahState("Terkunci"); // Output: Pintu terkunci
