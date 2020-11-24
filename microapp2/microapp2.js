const logger = window.parent.logger(document.getElementById("microapp2-logs"));

window.version = "1.0.0";

logger("internal")("Initializing microapp..")("");

window["onMerchantEvent"] = function (event, payload, callback){
    logger("external")("Event \"" + event + "\" from JOS through onMerchantEvent event listenter!")(payload);
    var response = {
        action: "response",
        message: "Response from microapp2"
    };
    logger("external")("Sending response back through callback")(response);
    callback(200)(response)();
}
window["onEvent"] = function (payload, callback) {
    logger("external")("Event from child microapp through onEvent event listenter!")(payload);
}

JOS.addEventListener("onMerchantEvent")();
JOS.addEventListener("onEvent")();

var payload =  {
    action : "DUI_READY",
}

logger("external")("Informing parent i.e. \"" + JOS.parent +  "\" that microapp bundles are loaded by sending DUI_READY action to JOS!")({
    eventFunction: "onEvent",
    payload: payload,
    receiver: JOS.parent
});
JOS.emitEventWithLog(JOS.parent)("onEvent")(JSON.stringify(payload))()()

logger("internal")("Microapp Initialised!!")("");
payload =  {
    event:"initiate_result",
    payload : {
        service : JOS.self
    }
}
logger("external")("Informing parent i.e. \"" + JOS.parent +  "\" that microapp is initialised and preprocssing (e.g. api calls / other background calls) is completed by sending initiate_result event!")({
    eventFunction: "onEvent",
    payload: payload,
    receiver: JOS.parent
});
JOS.emitEventWithLog(JOS.parent)("onEvent")(JSON.stringify(payload))()();