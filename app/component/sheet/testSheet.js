

var TestSheet = React.createClass({

    displayName : 'TestSheet',

    render: function() {
        return (
            <div className={this.props.cssClass}>
                <div> test test test test test</div>
                <hr/>
                <div> test test test test test test test test</div>
            </div>
        )
    }

});

export{TestSheet};