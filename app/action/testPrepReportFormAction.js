import {AppDispatcher} from '../dispatcher/appDispatcher';

import {UserConst} from '../constants/testPrepReportFormConst';

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