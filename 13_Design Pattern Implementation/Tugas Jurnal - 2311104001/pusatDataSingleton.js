class PusatDataSingleton {
    constructor() {
        if (!PusatDataSingleton.instance) {
            this.dataTersimpan = [];
            PusatDataSingleton.instance = this;
        }
        return PusatDataSingleton.instance;
    }

    getSemuaData() {
        return this.dataTersimpan;
    }

    addSebuahData(input) {
        this.dataTersimpan.push(input);
    }

    hapusSebuahData(index) {
        if (index >= 0 && index < this.dataTersimpan.length) {
            this.dataTersimpan.splice(index, 1);
        } else {
            console.log("Index tidak valid");
        }
    }

    printSemuaData() {
        this.dataTersimpan.forEach((item, idx) => {
            console.log(`${idx + 1}. ${item}`);
        });
    }
}

const instance = new PusatDataSingleton();
Object.freeze(instance); 

module.exports = instance;
