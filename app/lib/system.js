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

                if (response.code === 0) {
                    console.log( "HTTPRequest OK" );
                    resolve(response);
                    //loginFromSession();
                    //(new AdultLayout).render();
                } else {
                   // console.log( "HTTPRequest: Wrong response, response.code="+response.code );
                    //renderIndex();
                    reject("HTTPRequest: Wrong response, response.code="+response.code);
                }

            },
            error : function(xhr, status, errorText){
                reject("HTTPRequest errorText: " + errorText + "; RM-servlet-error: " + xhr.getResponseHeader("RM-servlet-error"));
            }
        }, options));
    });
}



function loginFromSession() {

    return HTTPRequest({
        url : "/genie2-web/prekserv/um/loginFromSessionHTTP"
    });

}


export {HTTPRequest, loginFromSession};