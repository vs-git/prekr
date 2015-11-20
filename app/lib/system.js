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


function trim(str) {
    return str.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
}
// adds the chunk to string, if not exists, for example: str="aaa bbb ccc ddd"; addChunk(str, "bbb"):"aaa bbb ccc ddd"; addChunk(str, "eee"):"aaa bbb ccc ddd eee"
function addChunk(str, chunk) {
    let arr = trim(str).split(/\s+/)
        , index = arr.indexOf(chunk)
        , out = ''
        , i;

    if (index === -1) {
        arr.push(chunk);
    }
    for (i = 0; i < arr.length; i++) {
        if (out.length > 0) {
            out = out + ' ';
        }
        out = out + arr[i];
    }
    return out;
}

export {getCookie, HTTPRequest, evt, percent};