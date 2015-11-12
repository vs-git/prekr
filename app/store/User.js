/*
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('../constants/TodoConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
*/

import {AppDispatcher} from '../dispatcher/appDispatcher';
import {UserConst} from '../constants/userConst';
import {renderAIndex as renderAIndexPage} from '../component/authForm';
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

function renderAIndex() {
    renderAIndexPage();
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

UserStore.dispatchLoginToken = AppDispatcher.register(function(action) {

    switch(action.actionType) {

        case UserConst.LOGIN:
            //ChatAppDispatcher.waitFor([ThreadStore.dispatchToken]);
            login(action.data);
            //TodoStore.emitChange();
            break;

        default:
        // no op
    }
});
UserStore.dispatchLoginFromSessionToken = AppDispatcher.register(function(action) {

    switch(action.actionType) {

        case UserConst.LOGIN_FROM_SESSION:
            AppDispatcher.waitFor([UserStore.dispatchLoginToken]);
            loginFromSession();
            break;


        default:
        // no op
    }
});
UserStore.dispatchRenderAIndexToken = AppDispatcher.register(function(action) {

    switch(action.actionType) {

        case UserConst.RENDER_AINDEX:
            AppDispatcher.waitFor([UserStore.dispatchLoginToken,UserStore.dispatchLoginFromSessionToken]);
            renderAIndex();
            break;


        default:
        // no op
    }
});

export {User};