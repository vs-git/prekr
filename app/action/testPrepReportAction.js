import {AppDispatcher} from '../dispatcher/appDispatcher';

import {TestPrepReportConst} from '../constants/testPrepReportConst';
import {TestPrepReport} from '../store/TestPrepReport';

var TestPrepReportActions = {

    /**
     * @param  {Object} data
     */
    setFormData: function(data) {
        AppDispatcher.dispatch({
            actionType: TestPrepReportConst.SET_TPR_DATA,
            data: data
        });
    }

};

export {TestPrepReportActions};