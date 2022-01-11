let liveInstances = {};

class Util {
    constructor() {
        this.init = true;

        liveInstances = {};
    }

    get classInitiated() {
        return this.init;
    }

    get existentWindows() {
        return liveInstances;
    }

    static returnTrue() {
        return true;
    }

    static closeWindows(windowChannel = false) {
        try {
            if (windowChannel) {
                liveInstances[windowChannel].close();

                delete liveInstances[windowChannel];
            } else {
                for(let window in liveInstances) {
                    liveInstances[window].close();
                }

                window.liveInstance = {};
            }
        } catch(e) {
            console.log('Not able to close this window', e);
        }
    }

    static waitForDefinition(varToBeWatched = '', timeoutms = 15000) {
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

    static createWindow(targetURL = '*') {
        return new Promise((resolve, reject) => {
            try {
                let auxWindow = window.open(targetURL, 'modal', 'width=350,height=450');
                resolve(auxWindow);
            } catch(e) {
                reject(e);
            }
        });
    }

    static send(message = '', targetURL = '*', channel = 'default', encodeToBase64 = true) {
        let self = this;

        (async () => {
            if (!liveInstances.hasOwnProperty(channel)) {
                let childWindow = await self.createWindow(targetURL);
                liveInstances[channel] = childWindow;
    
                let readyFlag = await self.waitForDefinition(liveInstances?.channel?.document?.body);
                
                setTimeout(() => {
                    if (readyFlag) {
                        liveInstances[channel].document.title = channel;
                        liveInstances[channel].postMessage(
                            self.createMessageObject(message, channel, encodeToBase64), 
                            targetURL);
                    }
                }, 4500);
                
            } else {
                if (liveInstances[channel].closed) {
                    delete liveInstances[channel];
                    self.send(message, targetURL, channel, false);
                } else {
                    liveInstances[channel].postMessage(
                        self.createMessageObject(message, channel, encodeToBase64), 
                        targetURL);
                }
                
            }
        })();
    }

    static createMessageObject(message = '', channel = 'default',  encodeToBase64 = true) {
        let messageObject = {};
            messageObject[channel] = (encodeToBase64 ? btoa(message) : message);
        return messageObject;
    }

    static listen(channel, callback = (event) => {}, options = false) {
        
        return window.addEventListener("message", (event) => {
            try {
                let data = event.data[channel];
                let decodedMessage = atob(data);

                callback(decodedMessage);
            } catch(e) { }
            
        }, options);
    }
}

export default Util;