import {renderIndex} from './component/authForm';
import {getCookie} from './lib/system';
import {UserActions} from './action/userAction';

       //import {renderAIndex} from './component/adultPage';

document.addEventListener('DOMContentLoaded', start);

function start() {

    console.log( "getCookie('l'):", getCookie('l') );
/**/
    if (getCookie('l')) {
        UserActions.loginFromSession();
    } else {
        renderIndex();
    }
    //renderAIndex();
}


 /*
function start() {
    ReactDOM.render(
            <Div>
            <Input
                type="text"
                className="asdfasd"
                name="loginName"
                placeholder="Enter login"
                autoFocus={true}
                />
            <Input
                type="password"
                name="password"
                />
            <Button
                onClick={this._onClick}
                value="Log In"/>
                </Div>,
        document.getElementById('content')
    );
}*/





