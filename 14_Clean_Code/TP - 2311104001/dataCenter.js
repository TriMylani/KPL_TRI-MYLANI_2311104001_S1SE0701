// dataCenter.js

class DataCenter {
    constructor() {
        if (!DataCenter.instance) {
            this._storedData = [];
            DataCenter.instance = this;
        }

        return DataCenter.instance;
    }

    getAllData() {
        return this._storedData;
    }

    addData(input) {
        this._storedData.push(input);
    }

    deleteDataByIndex(index) {
        if (index >= 0 && index < this._storedData.length) {
            this._storedData.splice(index, 1);
        } else {
            console.log('Invalid index!');
        }
    }

    printAllData() {
        this._storedData.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
}

const singletonInstance = new DataCenter();
Object.freeze(singletonInstance);

module.exports = singletonInstance;
