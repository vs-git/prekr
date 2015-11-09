
import {AuthForm} from './component/authForm';

let Actions = {

    adultPage : function(){

    },
    authForm : function() {
        ReactDOM.render(
        <AuthForm />,
            document.getElementById('content')
        )
    }
};

export {Actions};
