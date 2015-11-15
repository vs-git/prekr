function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function HTTPRequest(options) {

    return new Promise(function(resolve, reject){
        $.ajax($.extend({
            method : "post",
            contentType : 'application/json',
            dataType : 'json',
            url : '',//"/genie2-web/prekserv/um/loginHTTP",
            data : {},//JSON.stringify(out),
            async : true,
            cache : false,

            success: function (response, textStatus, xhr) {

                if (response.code === undefined || response.code === 0) {
                    console.log( "HTTPRequest OK" );

                    //setTimeout(function(){
                        resolve(response);
                    //}, 1000);

                } else {
                    reject("HTTPRequest: Wrong response, response.code="+response.code);
                }
            },
            error : function(xhr, status, errorText){
                reject("HTTPRequest errorText: " + errorText + "; RM-servlet-error: " + xhr.getResponseHeader("RM-servlet-error"));
            }
        }, options));
    });
}

var evt = (function(){
    var eventNode = $({});
    return {
        on: on,
        off: off,
        trigger: trigger
    };
    function on(){
        eventNode.on.apply(eventNode, arguments);
    }
    function off(){
        eventNode.off.apply(eventNode, arguments);
    }
    function trigger(){
        eventNode.trigger.apply(eventNode, arguments);
    }
})();

function percent(x){
    return x * 100;
}


export {getCookie, HTTPRequest, evt, percent};