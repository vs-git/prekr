/*
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('../constants/TodoConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
*/

import {AppDispatcher} from '../dispatcher/appDispatcher';
import {UserConst} from '../constants/userConst';
import {renderAIndex} from '../component/adultPage';
import {ErrorOutputFactory} from '../lib/ErrorOutputFactory';
import {UserActions} from '../action/userAction';
import {HTTPRequest} from '../lib/system';


//var EventEmitter = fbemitter.EventEmitter;

var User = {};

/**
 * @param  {Object} loginData
 */
function login(loginData) {
    return HTTPRequest({
        url:"/genie2-web/prekserv/um/loginHTTP",
        data:JSON.stringify(loginData)
    });
}


function loginFromSession() {
    return HTTPRequest({
        url : "/genie2-web/prekserv/um/loginFromSessionHTTP"
    });
}

function setData(data) {
    User = data;
}

// Register callback to handle all updates

AppDispatcher.register(function(action) {

    switch(action.actionType) {
        case UserConst.LOGIN:

            //ChatAppDispatcher.waitFor([ThreadStore.dispatchToken]);
            login(action.data)
                .then(UserActions.loginFromSession)
                .catch(function(error){
                    ErrorOutputFactory.getHandler({type:"page"}).fire(error);
                });
            //TodoStore.emitChange();
            break;


        case UserConst.LOGIN_FROM_SESSION:
            loginFromSession()
                .then(function(data){
                    setData(data['user']);
                })
                .then(renderAIndex)
                .catch(function(error){
                    ErrorOutputFactory.getHandler({type:"page"}).fire(error);
                });
            break;


        default:
        // no op
    }
});


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

export {User};