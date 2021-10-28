class Util {
    constructor() {
        this.init = true;
    }

    get classInitiated() {
        return this.init;
    }

    returnTrue() {
        return true;
    }

    send(message = '', recipient = '*') {
        // This will send a postMessage
        return window.postMessage(message, recipient);
    }

    receive(callback = (event) => {}, options = false) {
        return window.addEventListener("message", callback, options);
    }
} 
module.exports = {
    Util
};