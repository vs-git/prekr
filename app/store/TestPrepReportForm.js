
import {AppDispatcher} from '../dispatcher/appDispatcher';
import {TestPrepReportFormConst} from '../constants/testPrepReportFormConst';

import {ErrorOutputFactory} from '../lib/ErrorOutputFactory';
//import {TestPrepReportFormActions} from '../action/TestPrepReportFormAction';
import {HTTPRequest} from '../lib/system';
import {RMDate} from '../lib/RMDate';


//var EventEmitter = fbemitter.EventEmitter;

var TestPrepReportForm = {};

function setModelFromFormData(data) {
    TestPrepReportForm = data;
    TestPrepReportForm.startDate = new RMDate(data['startDate']);
    TestPrepReportForm.endDate = new RMDate(data['endDate']);
    console.log( TestPrepReportForm );
}


function sendRequest(data) {
    setModelFromFormData(data)
    return HTTPRequest({
        url:"/genie2-web/prekserv/report/buildTestPrepReport",
        data:JSON.stringify([TestPrepReportForm])
    }).catch(function(error){
        ErrorOutputFactory.getHandler({type:"page"}).fire(error);
    });
}

// Register callback to handle all updates

AppDispatcher.register(function(action) {

    switch(action.actionType) {
        case TestPrepReportFormConst.SEND_REQUEST:
            sendRequest(action.data);
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