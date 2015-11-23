import {evt, percent} from '../lib/system';
import {TestPrepReportModel} from '../store/TestPrepReport';

var TestPrepReport = React.createClass({

    displayName : 'TestPrepReport',
    tableId : 'testPrepReportTable',

    getInitialState: function() {
        return {loaded: false};
    },

    componentDidMount : function(){
        evt.on('change.TestPrepReportModel', this._onChange);
    },

    componentWillUnmount : function(){
        evt.off('change.TestPrepReportModel', this._onChange);
    },

    componentDidUpdate:function(){
        let componentNode = ReactDOM.findDOMNode(this);
        if ($(componentNode).find('script').length === 0) {
            $(componentNode).append(this._scriptText(this.tableId));
        }
    },

    render: function() {
        if (this.state.loaded) {
            return this._renderTable();
        } else {
            return <div className="empty"><p>empty report</p></div>;
        }
    },

    _onChange : function(){
        this.setState({loaded: true})
    },

    _renderStudent: function(student){

        let cellList = student.cells.map(this._renderStudentCell);

        return (
            <tr key={student.studentID}>
                <td> </td>
                <td>
                    {student.lastName} {student.firstName }
                </td>
                <td> </td>
                {cellList}
            </tr>
        )
    },

    _renderStudentCell: function(cell, i){
        return(
            <td key={i}>
                {(cell.ratio===-1?"-":Math.round(percent(cell.ratio))+"%") }
            </td>
        )
    },

    _renderTotal:function(total){
        let cellList = total.map(this._renderTotalCell);
        return(
            <tr>
            <th> </th>
            <th> class total </th>
            <th> </th>
            {cellList}
        </tr>
        )
    },

    _renderTotalCell: function(totalCell, i){
        return(
            <td key={i}>
                {(totalCell===-1?"-":Math.round(percent(totalCell))+"%")}
            </td>
        )
    },

    _scriptText:function(tableId){
        return ('<script type="text/javascript">\
            $("' + '#' + tableId + '").tablesorter({selectorHeaders : ".sortHeader"});\
        </script>')
    },

    _renderObjectiveCell: function(cell, tpStandardsHash, i){
        return(
            <th key={i} className="sortHeader">
                {(tpStandardsHash[cell.objectiveID] ? tpStandardsHash[cell.objectiveID].std : "Total" )}
            </th>
        )
    },

    _renderCategoryCell:function(text, colspan, i){
        return (
            <th key={i} colSpan={colspan} >{text}</th>
        )
    },

    _renderTable:function() {

        let tpStandardsHash = {}, catColSpan = {}, tpStandard, key;
        for (key in TestPrepReportModel.tpStandards) { //for...of not work in IE

            if (TestPrepReportModel.tpStandards.hasOwnProperty(key)) {
                tpStandard = TestPrepReportModel.tpStandards[key];
                tpStandardsHash[tpStandard.objectiveID] = tpStandard;

                if (typeof catColSpan[tpStandard.categoryID] === 'undefined') {
                    catColSpan[tpStandard.categoryID] = 0;
                }
                ++catColSpan[tpStandard.categoryID];
            }
        }

        let cells = TestPrepReportModel.students[0].cells;
        let objList = cells.map(function(el, index, arr){
            if (index > 0) {
                return this._renderObjectiveCell(el, tpStandardsHash, index);
            }
        }.bind(this));

        let categories = []
            , index = 0
            , addition = 1; //addition for "Total" cell (last cell for category)
        for (let category in catColSpan) {
            if (catColSpan.hasOwnProperty(category)) {
                categories.push(this._renderCategoryCell(TestPrepReportModel.categories[category], catColSpan[category]+addition, ++index));
            }
        }

        let students = TestPrepReportModel.students.map(this._renderStudent);

        return(
            <div>

                <table id={this.tableId}>
                    <thead>
                    <tr>
                        <th rowSpan="2" >@</th>
                        <th rowSpan="2" className="sortHeader">name</th>
                        <th rowSpan="2" className="sortHeader">assignments</th>
                        <th rowSpan="2" className="sortHeader">total</th>

                        {categories}
                    </tr>
                    <tr>
                        {objList}
                    </tr>
                        {this._renderTotal(TestPrepReportModel.total)}
                    </thead>
                    <tbody>
                        {students}
                    </tbody>
                </table>
            </div>
        )
    }

});

export {TestPrepReport};
