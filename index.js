class TTAUCR {
    constructor() {
        this.init = true;
    }

    get classInitiated() {
        return this.init;
    }

    returnTrue() {
        return true;
    }

    send() {
        // This will send a postMessage
    }
} 

module.exports = {
    TTAUCR
}