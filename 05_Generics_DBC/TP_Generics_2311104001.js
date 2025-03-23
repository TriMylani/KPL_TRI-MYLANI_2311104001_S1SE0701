class HaloGeneric {
  sapaUser(user) {
    console.log(`Halo user ${user}`);
  }
}

class DataGeneric {
  constructor(data) {
    this.data = data;
  }

  printData() {
    console.log(`Data yang tersimpan adalah: ${this.data}`);
  }
}

function main() {
  const halo = new HaloGeneric();
  halo.sapaUser("Tri Mylani");

  const dataGeneric = new DataGeneric("2311104001");
  dataGeneric.printData();
}

main();
