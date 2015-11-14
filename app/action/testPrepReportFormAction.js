import {AppDispatcher} from '../dispatcher/appDispatcher';

import {TestPrepReportFormConst} from '../constants/testPrepReportFormConst';
import {TestPrepReportForm} from '../store/TestPrepReportForm';

var TestPrepReportFormActions = {

    /**
     * @param  {Object} data
     */
    setFormData: function(data) {
        AppDispatcher.dispatch({
            actionType: TestPrepReportFormConst.SEND_REQUEST,
            data: data
        });
    }

};

export {TestPrepReportFormActions};