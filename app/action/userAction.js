import {AppDispatcher} from '../dispatcher/appDispatcher';
import {HTTPRequest} from '../lib/system';
import {UserConst} from '../constants/userConst';

var UserActions = {

    /**
     * @param  {Object} loginData
     */
    login: function(loginData) {
        AppDispatcher.dispatch({
            actionType: UserConst.LOGIN,
            data: {
                url:"/genie2-web/prekserv/um/loginHTTP",
                data:JSON.stringify(loginData)
            }
        });
    },


    loginFromSession: function () {
        AppDispatcher.dispatch({
            actionType: UserConst.LOGIN_FROM_SESSION
        });
    }

};

export {UserActions};