import {AuthForm, renderIndex, renderAIndex} from './component/authForm';
import {getCookie} from './lib/system';
import {UserActions} from './action/userActions';

document.addEventListener('DOMContentLoaded', start);

function start() {

    console.log( "getCookie('l'):", getCookie('l') );

    if (getCookie('l')) {
        UserActions.loginFromSession();
    } else {
        renderIndex();
    }
}
/*
function testPromise() {
    var thisPromiseCount = ++testPromise.promiseCount;

    console.log('beforeend', thisPromiseCount +  ') Запуск (запуск синхронного кода)  ');

    // Создаём обещание, возвращающее 'result' (по истечении 3-х секунд)
    var p1 = new Promise(
        // Функция разрешения позволяет завершить успешно или
        // отклонить обещание
        function(resolve, reject) {
            console.log('beforeend', thisPromiseCount +  ') Запуск обещания (запуск асинхронного кода)  ');
            // Это всего лишь пример асинхронности
            window.setTimeout(
                function() {
                    // Обещание выполнено!
                    resolve(thisPromiseCount)
                }, Math.random() * 2000 + 1000);
        });

    // Указываем, что сделать с выполненным обещанием
    p1.then(
        // Записываем в протокол
        function(val) {
            console.log('beforeend', val +  ') Обещание выполнено (асинхронный код завершён) ');
        });

    console.log('beforeend', thisPromiseCount + ') Обещание создано (синхронный код завершён)  ');
}
testPromise.promiseCount = 0;

 testPromise();
 testPromise();
 testPromise();
*/

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





