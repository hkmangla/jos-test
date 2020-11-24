var logStack = [];
var isLogRunning = false;
var logDOM = function (containerId) {
    return function (eventType) {
        return function (message) {
            return function (a) {
                logStack.push([containerId, eventType, message, a]);
                if (!isLogRunning) {
                    logRunner ();
                }
            }
        }
    }
}

var logRunner = function () {
    function runLog () {
        var currentLog = logStack.shift();
        if (currentLog) {
            log(currentLog[0],currentLog[1], currentLog[2], currentLog[3]).then(function () {
                runLog ();
            });
        } else {
            isLogRunning = false;
        }
    }
    isLogRunning = true;
    runLog();
} 
var log = function (containerId, eventType, msg, a) {
    return new Promise (function (resolve, reject) {
        var div = document.createElement('div');
        var logContainer = containerId ? containerId : document.getElementById("jos-logs");
        logContainer.appendChild(div);
        addTimeLog(div, eventType);
        type(div, msg, logContainer).then(function () {
            if (typeof a === 'object') {
                addCodeText(div, JSON.stringify(a, null, 4), resolve, logContainer);
            } else {
                try {
                    addCodeText(div, JSON.stringify(JSON.parse(a), null, 4), resolve, logContainer);
                } catch (e) {
                    type(div, a, logContainer).then(function () {
                        resolve();
                    });
                }
            }
        });
    
    });
}

var addCodeText = function (div, text, resolve, logContainer) {
    var pre = document.createElement('pre');
    var code = document.createElement('code');
    pre.appendChild(code);
    div.appendChild(pre);
    type(code, text, logContainer).then(function () {
        resolve();
    });
}

var type = function (div, txt, logContainer) {
    return new Promise(function (resolve, reject) {
        var i = 0;
        function typeWriter() {
            if (i < txt.length) {
                var strs = "";
                for (var j=0; j<10; j++) {
                    if (i >= txt.length) break;
                    strs += txt.charAt(i);
                    i++;
                }
                div.innerHTML += strs;
                logContainer.scrollTop = logContainer.scrollHeight - logContainer.clientHeight;

                setTimeout(typeWriter, 1);
            } else {
                resolve();
            }
        }
        typeWriter();
    });
}

var eventColorMapping  = {
    "external" : "red",
    "internal" : "green",
    "default" : "green"
};

var addTimeLog = function (div, eventType) {
    var color = (eventType && eventColorMapping[eventType]) ? eventColorMapping[eventType] : eventColorMapping["default"];
    var date = new Date();
    var minutes = date.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var hours = date.getHours();
    hours = hours < 10 ? '0' + hours : hours;
    var seconds = date.getSeconds();
    seconds = seconds < 10 ? '0' + seconds : seconds;
    div.innerHTML += "<strong style=\"color:" + color + ";\">" + hours + ":" + minutes + ":" + seconds + "[IST]</strong> : ";
}

window.logger = logDOM;