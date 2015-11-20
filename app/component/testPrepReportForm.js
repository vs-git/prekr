
import {TestPrepReportFormActions} from '../action/TestPrepReportFormAction';
import {Input} from './authForm';

var TestPrepReportForm = React.createClass({

    displayName : 'TestPrepReportForm',

    getDefaultProps: function() {
        return {
            classID: 30442,
            startDate : "2015-10-20",
            endDate : "2015-11-20",
            grade : 4,
            material : 0,
            isPrint : false,
            localSortColumn : 0,
            localSortAsc : false,
            lastNDays : 0,
            lastSolvedProblemsNumber : 0
        };
    },

    render: function() {

        return (
            <div>
                classID
                <Input
                    type="text"
                    name="classID"
                    value={this.props.classID}
                    /><br/>
                startDate
                <Input type="text" name="startDate" value={this.props.startDate}/><br/>
                endDate
                <Input type="text" name="endDate" value={this.props.endDate}/><br/>
                grade
                <Input type="text" name="grade" value={this.props.grade}/><br/>
                material
                <Input type="text" name="material" value={this.props.material}/><br/>
                isPrint
                <Input type="text" name="isPrint" value={this.props.isPrint}/><br/>
                localSortColumn
                <Input type="text" name="localSortColumn" value={this.props.localSortColumn}/><br/>
                localSortAsc
                <Input type="text" name="localSortAsc" value={this.props.localSortAsc}/><br/>
                lastNDays
                <Input type="text" name="lastNDays" value={this.props.lastNDays}/><br/>
                lastSolvedProblemsNumber
                <Input type="text" name="lastSolvedProblemsNumber" value={this.props.lastSolvedProblemsNumber}/><br/>
                <button
                    onClick={this._onClick}
                    >Build</button>
            </div>
        );
    },

    _onClick: function(/*object*/ event) {
        //console.log( "AuthForm Button _onClick:" );
        let div = ReactDOM.findDOMNode(this);

        this.out = {};
        $(div).children("input").each((index, el) => this.out[$(el).attr("name")] =  $(el).val());

        TestPrepReportFormActions.setFormData(this.out);
    }

});

export {TestPrepReportForm};