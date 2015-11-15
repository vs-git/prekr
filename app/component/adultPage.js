import {Input} from './authForm';
import {TestPrepReportFormActions} from '../action/TestPrepReportFormAction';
import {TestPrepReport} from './testPrepReport';

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

var ReportSheet = React.createClass({

    displayName : 'ReportSheet',

    render: function() {
        /*
        var Component = false;
        if (FormOne !== 'undefined')
            Component = (<FormOne />);
        else if (typeof FormTwo !== 'undefined')
            Component = (<FormTwo />);

         {!!component ? (<Component/>): 'No component'}
*/
        return (
            <div>
                <TestPrepReportForm/>
                <hr/>
                <TestPrepReport/>
            </div>
        );
    },
    loadReport : function(e){
        //RM.SheetManager.get( $(e.target).attr('id'));
    }

});

var AdultPage = React.createClass({

    displayName : 'AdultPage',

    render: function() {

        return (
            <div>
                <div id="header">
                    <div className="labelLogo">RM Logo Label</div>
                    <div className="menu">
                        <div
                            className="likeA"
                            id="TestPrepReportSheetMenuItem"
                            onClick={this.loadReport}
                            >STAAR report</div>
                        <div className="likeA" id="TestSheetMenuItem">test</div>
                    </div>
                    <div id="sheetStickers"></div>
                </div>

                <div id="error"></div>

                <div className="bulkClass">Adult page</div>

                <div id="sheets"><ReportSheet/></div>
            </div>
        );
    },
    loadReport : function(e){
        //RM.SheetManager.get( $(e.target).attr('id'));
    }

});


function renderAIndex() {
    ReactDOM.render(
        <AdultPage/>,
        document.getElementById('content')
    )
}

export {renderAIndex};






