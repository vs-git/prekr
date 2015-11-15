import {evt, percent} from '../lib/system';
import {TestPrepReportModel} from '../store/TestPrepReport';

var TestPrepReport = React.createClass({

    displayName : 'TestPrepReport',

    getInitialState: function() {
        return {loaded: false};
    },

    componentDidMount : function(){
        evt.on('change.TestPrepReportModel', this._onChange);
    },

    render: function() {
        if (this.state.loaded) {
            return (
                <table id="testPrepReportTable"><tbody>
            {this._renderStudents(TestPrepReportModel.students)}
                </tbody>
                </table>
            );
        } else {
            return <div className="empty"><p>empty report</p></div>;
        }
    },

    _onChange : function(){
        this.setState({loaded: true})
    },
    
    _renderStudents: function(students){
        return students.map(this._renderStudent);

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
                <td>
                    {Math.round(percent(student.cells[0].ratio))+"%" }
                </td>

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
    }

});

export {TestPrepReport};
/*

    <%
    var tpStandardsHash = {};
    for (var a=0, la = tpStandards.length; a < la; a++) {
        tpStandardsHash[tpStandards[a].objectiveID] = tpStandards[a];
    }
    %>

    <table id="testPrepReportTable">

        <% if (students.length > 0) { %>
        <thead>
        <tr>
            <th rowspan="2" >@</th>
            <th rowspan="2" class="sortHeader">name</th>
            <th rowspan="2" class="sortHeader">assignments</th>
            <th rowspan="2" class="sortHeader">total</th>

            <% var n, ln = students[0].cells.length, tpStandard, categoryCnt = 0, prevCategory, tpStandardForCell, colspan; %>
            <% for (n=1; n < ln; n++) { %>

                <% tpStandard = tpStandardsHash[students[0].cells[n].objectiveID]; %>

                <% if (!tpStandardForCell) { tpStandardForCell = tpStandard;  } %>

                    <% ++categoryCnt; %>
                    <% if (prevCategory === 0 || n === ln-1) { %>
                    <% colspan = (prevCategory === 0 ? categoryCnt-1 : categoryCnt+1) %>
                    <th colspan="<%=colspan %>" >

                        <%=(tpStandardForCell ? categories[tpStandardForCell.categoryID] : "???" ) %>

                        <% categoryCnt = 1 %>

                        <% tpStandardForCell = null; %>
                    </th>
                <% } %>

                <% prevCategory = (tpStandard ? tpStandard.categoryID : 0 )  %>
            <% } %>
        </tr>

        <tr>

            <% for (var m=1, lm = students[0].cells.length; m < lm; m++) { %>
                <th class="sortHeader">
                    <%=(tpStandardsHash[students[0].cells[m].objectiveID] ? tpStandardsHash[students[0].cells[m].objectiveID].std : "Total" )%>
                </th>
            <% } %>
        </tr>

        <tr>
            <th> </th>
            <th> class total </th>
            <th> </th>
            <th>
                <%=Math.round(percent(total[0]))+"%" %>
            </th>
            <% for (var t=1, lt = total.length; t < lt; t++) { %>
            <th>
                <%=(total[t]===-1?"-":Math.round(percent(total[t]))+"%") %>
            </th>
            <% } %>
        </tr>
        <% } %>

        </thead>
        <tbody>

        <% for (var i=0, li = students.length, student, cell; i < li; i++) { %>
        <% student = students[i] %>
        <tr>
            <td> </td>
            <td>
                <%=student.lastName %> <%=student.firstName %>
            </td>
            <td> </td>
            <td>
                <%=Math.round(percent(student.cells[0].ratio))+"%" %>
            </td>

            <% for (var k=1, lk = student.cells.length; k < lk; k++) { %>
            <% cell = student.cells[k] %>
            <td>
                <%=(cell.ratio===-1?"-":Math.round(percent(cell.ratio))+"%") %>
            </td>
            <% } %>
        </tr>
        <% } %>

        </tbody>
    </table>

*/