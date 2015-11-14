/*
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('../constants/TodoConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
*/

import {AppDispatcher} from '../dispatcher/appDispatcher';
import {TestPrepReportFormConst} from '../constants/testPrepReportFormConst';

//import {ErrorOutputFactory} from '../lib/ErrorOutputFactory';
import {TestPrepReportFormActions} from '../action/TestPrepReportFormAction';
import {HTTPRequest} from '../lib/system';


//var EventEmitter = fbemitter.EventEmitter;

var TestPrepReportForm = {};

function setFormData(data) {
    TestPrepReportForm = data;
}


function sendRequest() {
    return HTTPRequest(TestPrepReportForm);
}

// Register callback to handle all updates

AppDispatcher.register(function(action) {

    switch(action.actionType) {
        case TestPrepReportFormConst.SEND_REQUEST:
            setFormData(data);
            break;

        default:
        // no op
    }
});


var TestPrepReportFormStore = $.extend({}, /*EventEmitter.prototype,*/ {

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

export {TestPrepReportForm};