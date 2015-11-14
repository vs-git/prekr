import {HTTPRequest} from '../lib/system';
import {ErrorOutputFactory} from '../lib/ErrorOutputFactory';

var UserOnline = React.createClass({

    displayName : 'UserOnline',

    loadCommentsFromServer: function() {
        return HTTPRequest({
            method : "get",
            cache:true,
            url: '/genie2-web/prekserv/systemservice/getPopulation'
        });
    },

    componentDidMount: function() {
        let self = this;
        this.loadCommentsFromServer()
            .then(function(data){
                self.setState({value: data.left})
            })
            .catch(function(error){
                ErrorOutputFactory.getHandler({type:"page"}).fire(error);
            });
        //ULStore.addChangeListener(this._onChange);
    },

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
            <div>Users online: {this.state.value}</div>
        );
    }
});

export {UserOnline};