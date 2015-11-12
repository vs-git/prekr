import {AppDispatcher} from '../dispatcher/appDispatcher';

var UserActions = {

    /**
     * @param  {string} text
     */
    create: function (text) {
        AppDispatcher.dispatch({
            actionType: TodoConstants.TODO_CREATE,
            text: text
        });
    }

};
