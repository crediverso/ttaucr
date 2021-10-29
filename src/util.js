'use strict';
class Util {
    constructor() {
        this.init = true;
        window.liveInstances = {};
    }

    get classInitiated() {
        return this.init;
    }

    get existentWindows() {
        return window.liveInstances;
    }

    returnTrue() {
        return true;
    }

    closeWindows(windowChannel = false) {
        try {
            if (windowChannel) {
                window.liveInstances[windowChannel].close();

                delete window.liveInstances[windowChannel];
            } else {
                for(let window in window.liveInstances) {
                    window.liveInstances[window].close();
                }

                window.liveInstance = {};
            }
        } catch(e) {
            console.log('Not able to close this window', e);
        }
    }

    waitForDefinition(varToBeWatched = '', timeoutms = 15000) {
        let timeInterval = null;
        let timeoutFlag = false;
        let timeout = null;

        return new Promise((resolve, reject) => {
            timeInterval = setInterval(function() {
                if (varToBeWatched != null) {
                    clearTimeout(timeout);
                    resolve(true);
                }
        
                timeout = setTimeout(function() {
                    timeoutFlag = true;
                    reject({error: '[TTAUCR.Util.waitForBody] Variable declaration timeout'});
                }, timeoutms);
            }, 500);
        });
    }

    createWindow(targetURL = '*') {
        return new Promise((resolve, reject) => {
            try {
                window.liveInstances[targetURL] = window.open(targetURL, 'modal', 'width=350,height=450');
                resolve(window.liveInstances[targetURL]);
            } catch(e) {
                reject(e);
            }
        });
    }

    async send(message = '', targetURL = '*', channel = 'default', encodeToBase64 = true) {

        if (!window.liveInstances.hasOwnProperty(channel)) {
            let childWindow = await this.createWindow(targetURL);
            window.liveInstances[channel] = childWindow;

            let readyFlag = await this.waitForDefinition(window.liveInstances[channel].document.body)

            if (readyFlag) {
                window.liveInstances[channel].document.title = channel;
                window.liveInstances[channel].postMessage(
                    this.createMessageObject(message, channel, encodeToBase64), 
                    targetURL);
            }
        } else {
            if (window.liveInstances[channel].closed) {
                delete window.liveInstances[channel];
                this.send(message, targetURL, channel, false);
            } else {
                window.liveInstances[channel].postMessage(
                    this.createMessageObject(message, channel, encodeToBase64), 
                    targetURL);
            }
            
        } 
    }

    createMessageObject(message = '', channel = 'default',  encodeToBase64 = true) {
        let messageObject = {};
            messageObject[channel] = (encodeToBase64 ? btoa(message) : message);
        return messageObject;
    }

    listen(channel, callback = (event) => {}, options = false) {
        return window.addEventListener("message", (event) => {
            try {
                let data = event.data[channel];
                let decodedMessage = atob(data);

                callback(decodedMessage);
            } catch(e) { }
            
        }, options);
    }
} 
module.exports = {
    Util
};