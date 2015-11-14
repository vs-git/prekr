
import {AppDispatcher} from '../dispatcher/appDispatcher';
import {TestPrepReportConst} from '../constants/testPrepReportConst';

//import {ErrorOutputFactory} from '../lib/ErrorOutputFactory';
//import {TestPrepReportFormActions} from '../action/TestPrepReportFormAction';
//import {HTTPRequest} from '../lib/system';
//import {RMDate} from '../lib/RMDate';


//var EventEmitter = fbemitter.EventEmitter;

var TestPrepReport = {};

function setModelData(data) {
    TestPrepReport = data;
    console.log( 2222222 );
    console.log( TestPrepReport );
}




// Register callback to handle all updates

AppDispatcher.register(function(action) {

    switch(action.actionType) {
        case TestPrepReportConst.SET_TPR_DATA:
            setModelData(action.data);
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

export {TestPrepReport};