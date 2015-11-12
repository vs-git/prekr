//import {HTTPRequest} from '../lib/system';
//import {ErrorOutputFactory} from '../lib/ErrorOutputFactory';
import {UserActions} from '../action/userAction';
import {User} from '../store/User';

var ReactPropTypes = React.PropTypes;

var AuthForm = React.createClass({

    displayName : 'AuthForm',

    render: function() {

        return (
            <div>
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
            </div>

        );
    },

    _onClick: function(/*object*/ event) {
        //console.log( "AuthForm Button _onClick:" );
        let div = ReactDOM.findDOMNode(this);
        UserActions.login({
            loginName : $(div).children('input[name=loginName]').val(),
            password : md5($(div).children('input[name=password]').val())
        });
    }
});


var Button = React.createClass({

    displayName : 'Button',

    propTypes: {
        onClick: ReactPropTypes.func,
        value: ReactPropTypes.string
    },
    /**
     * @return {object}
     */
    render: function() /*object*/ {
        return (
            <button
                onClick={this.props.onClick || this._onClick}
                >{this.props.value}</button>
        );
    },

    /**
     * @param {object} event
     */
    _onClick: function(/*object*/ event) {
        console.log( "Button _onClick:" );
        console.log( event );
    }

});

var Input = React.createClass({

    displayName : 'Input',

    propTypes: {
        className: ReactPropTypes.string,
        id: ReactPropTypes.string,
        placeholder: ReactPropTypes.string,
        onSave: ReactPropTypes.func,//ReactPropTypes.func.isRequired,
        type: ReactPropTypes.string,
        name: ReactPropTypes.string,
        value: ReactPropTypes.string
    },
/**/
    getInitialState: function() {
        return {
            value: this.props.value || ''
        };
    },

    /**
     * @return {object}
     */
    render: function() /*object*/ {
        return (
            <input
                className={this.props.className}
                id={this.props.id}
                placeholder={this.props.placeholder}
                name={this.props.name}
                type={this.props.type}
                value={this.state.value}
                onChange={this._onChange}
                //autoFocus={true}
                />
        );
    },

    /**
     * @param {object} event
     */
    _onChange: function(/*object*/ event) {
        this.setState({
            value: event.target.value
        });
    }

});



function renderIndex() {
    ReactDOM.render(
        <AuthForm />,
        document.getElementById('content')
    )
}

function renderAIndex() {
    ReactDOM.render(
        <h1>renderAIndex() OK !!! </h1>,
        document.getElementById('content')
    )
}

export {AuthForm, renderIndex, renderAIndex};

