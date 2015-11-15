import {AppDispatcher} from '../dispatcher/appDispatcher';

import {TestPrepReportConst} from '../constants/testPrepReportConst';
import {TestPrepReportModel} from '../store/TestPrepReport';

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