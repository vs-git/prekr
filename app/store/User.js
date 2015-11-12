/*
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('../constants/TodoConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
*/

import {AppDispatcher} from '../dispatcher/appDispatcher';
import {UserConst} from '../constants/userConst';
import {renderAIndex} from '../component/authForm';
import {ErrorOutputFactory} from '../lib/ErrorOutputFactory';
import {UserActions} from '../action/userActions';

//var EventEmitter = fbemitter.EventEmitter;

var User = {};

/**
 * @param  {Object} options
 */
function login(options) {
    $.ajax($.extend({
        method : "post",
        contentType : 'application/json',
        dataType : 'json',
        url : '',//"/genie2-web/prekserv/um/loginHTTP",
        data : {},//JSON.stringify(out),
        async : true,
        cache : false,

        success: function (response, textStatus, xhr) {

            if (response.code==undefined || response.code === 0) {
                console.log( "HTTPRequest OK" );

                setTimeout(function(){
                    UserActions.loginFromSession();
                }, 3000);

                //loginFromSession();
                //(new AdultLayout).render();
            } else {
                // console.log( "HTTPRequest: Wrong response, response.code="+response.code );
                //renderIndex();
                ErrorOutputFactory.getHandler({type:"page"}).fire("HTTPRequest: Wrong response, response.code="+response.code);
            }

        },
        error : function(xhr, status, errorText){
            ErrorOutputFactory.getHandler({type:"page"}).fire("HTTPRequest errorText: " + errorText + "; RM-servlet-error: " + xhr.getResponseHeader("RM-servlet-error"));

        }
    }, options));
}


function loginFromSession(options) {
    $.ajax($.extend({
        method : "post",
        contentType : 'application/json',
        dataType : 'json',
        url : '',//"/genie2-web/prekserv/um/loginHTTP",
        data : {},//JSON.stringify(out),
        async : true,
        cache : false,

        success: function (response, textStatus, xhr) {

            if (response.code==undefined || response.code === 0) {
                console.log( "HTTPRequest OK" );

                setTimeout(function(){
                    renderAIndex();
                }, 3000);

                //loginFromSession();
                //(new AdultLayout).render();
            } else {
                // console.log( "HTTPRequest: Wrong response, response.code="+response.code );
                //renderIndex();
                ErrorOutputFactory.getHandler({type:"page"}).fire("HTTPRequest: Wrong response, response.code="+response.code);
            }

        },
        error : function(xhr, status, errorText){
            ErrorOutputFactory.getHandler({type:"page"}).fire("HTTPRequest errorText: " + errorText + "; RM-servlet-error: " + xhr.getResponseHeader("RM-servlet-error"));
        }
    }, options));
}



var UserStore = $.extend({}, /*EventEmitter.prototype,*/ {


   /**
     * Get the entire collection of TODOs.
     * @return {object}

    getAll: function() {
        return _todos;
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },*/

    /**
     * @param {function} callback

    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },*/

    /**
     * @param {function} callback

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }*/
});

// Register callback to handle all updates

AppDispatcher.register(function(action) {

    switch(action.actionType) {
        case UserConst.LOGIN:

            //ChatAppDispatcher.waitFor([ThreadStore.dispatchToken]);
            login(action.data);
            //TodoStore.emitChange();
            break;

        case UserConst.LOGIN_FROM_SESSION:
            loginFromSession(action.data);
            break;


        default:
        // no op
    }
});

export {User};