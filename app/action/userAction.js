import {AppDispatcher} from '../dispatcher/appDispatcher';
import {UserConst} from '../constants/userConst';

var UserActions = {

    /**
     * @param  {Object} loginData
     */
    login: function(loginData) {
        AppDispatcher.dispatch({
            actionType: UserConst.LOGIN,
            data: loginData
        });
    },


    loginFromSession: function () {
        AppDispatcher.dispatch({
            actionType: UserConst.LOGIN_FROM_SESSION
        });
    }

};

export {UserActions};