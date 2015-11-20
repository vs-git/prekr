import {TestPrepReport} from '../testPrepReport';
import {TestPrepReportForm} from '../testPrepReportForm';

var ReactPropTypes = React.PropTypes;

var ReportSheet = React.createClass({

    displayName : 'ReportSheet',

    propTypes: {
        cssClass: ReactPropTypes.string
    },

    render: function() {

        return (
            <div className={this.props.cssClass}>
                <TestPrepReportForm/>
                <hr/>AAAAAAAAAAAA
                <TestPrepReport/>
            </div>
        );
    }
});

export{ReportSheet};