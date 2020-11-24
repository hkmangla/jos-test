require('./logger');
window.logContainerId = "jos-logs";
window.logger()("internal")("JOS loaded!")("");


// JOS Configuration
window.configVersion = "1.0.0"
window.getConfig = function(){
    return {
        configVersion : window.configVersion,
        apps: {
            "microapp1": {
                "src": "",
                "version": "1.0.0",
                "iconUrl" : "",
                "assets" : {
                    "config": "",
                    "manifest": ""
                },
                "root": "http://0.0.0.0:3001/microapp1.html",
                "scripts": [],
                "entry": "",
                "canOpen": ["microapp2"]
            },
            "microapp2": {
                "src": "",
                "version": "1.0.0",
                "iconUrl" : "",
                "assets" : {
                    "config": "",
                    "manifest": ""
                },
                "root": "http://0.0.0.0:3001/microapp2.html",
                "scripts": [],
                "entry": "",
                "canOpen": []
            }
        }
    }
}

window.Analytics = {
    trackMicroAppVerison: function() {
        return function() {}
    },
    trackEventInfo: function() {
        return function() {
            return function() {
            
            }
        }
    },
    _trackContext: function() {
        return function() {
            return function() {
                return function() {
                    return function() {
                  
                    }
                }
            }
        }
    },
    trackExceptionCritical: function() {
        return function() {
            return function() {
            
            }
        }
    }
}

window.getTrackerModule = {
    Main: {
        initTracker: function() {
            return window.Analytics
        }
    }
}

window.__BOOT_LOADER = {}

require("regenerator-runtime/runtime");

window.prestoUI = require("./presto-ui");

require("./boot_loader");

payload = {
    service : "microapp1",
    pre_fetch : "false",
    betaAssets : false,
    service_based : false,
    services : ["microapp1"],
    requestId : ""    
}

var innerPayload = {
    id: "1"
}

Object.assign(payload, window.__payload, {payload: innerPayload});

window.logger()("internal")("Creating microapp iframes using JOS....!")(window.getConfig());
window.onMerchantEvent("initiate", JSON.stringify(payload), function() {});
window.logger()("internal")("Iframes (microapp1 and microapp2) created successfully!")("");

//Middle layer to capture the JOS emit event function in middle for logs
iframeWindow1 = document.getElementById('microapp1').contentWindow;
iframeWindow1.JOS.emitEventWithLog = function (receiver) {
    return function (event) {
        return function (data) {
            return function (callback) {
                return function () {
                    var eventObject = {
                        caller: "microapp1",
                        receiver: receiver,
                        event: event
                    };
                    if (!Array.isArray(data)) {
                        eventObject.payload = JSON.parse(data);
                    } else {
                        eventObject.eventName = data[0];
                        eventObject.payload = JSON.parse(data[1]);
                    }
                    window.logger()("external")("Get event from \"microapp1\" to \"" + receiver + "\" through JOS emitEvent!!")(eventObject);
                    iframeWindow1.JOS.emitEvent(receiver)(event)(data)(callback)();
                }
            }
        }
    }
}

iframeWindow2 = document.getElementById('microapp2').contentWindow;
iframeWindow2.JOS.emitEventWithLog = function (receiver) {
    return function (event) {
        return function (data) {
            return function (callback) {
                return function () {
                    var eventObject = {
                        caller: "microapp2",
                        receiver: receiver,
                        event: event
                    };
                    if (!Array.isArray(data)) {
                        eventObject.payload = JSON.parse(data);
                    } else {
                        eventObject.eventName = data[0];
                        eventObject.payload = JSON.parse(data[1]);
                    }
                    window.logger()("external")("Get event from \"microapp2\" to \"" + receiver + "\" through JOS emitEvent!!")(eventObject);
                    iframeWindow2.JOS.emitEvent(receiver)(event)(data)(callback)();
                }
            }
        }
    }
}