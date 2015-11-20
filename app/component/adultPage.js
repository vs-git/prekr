import {SheetManager} from './sheet/sheetManager';
import {MainMenu} from './MainMenu'
import {evt} from '../lib/system';

import {ReportSheet} from './sheet/reportSheet';

var AdultPage = React.createClass({

    displayName : 'AdultPage',

    componentDidMount:function(){
        evt.on('click.MainMenu', this._addSheet );
    },

    getInitialState: function() {
        return { sheets: {}};
    },

    _addSheet : function(){
        this.setState({sheets:SheetManager.getSheets()});
    },

    render: function() {
        console.log( '-----------' );
        let sheets = [];
        for (let prop in this.state.sheets) {
            if (this.state.sheets.hasOwnProperty(prop)) {
                console.log( this.state.sheets[prop].isHidden() );
                sheets.push(
                    React.createElement(
                        this.state.sheets[prop].getComponent(),
                        {key:prop, cssClass:(this.state.sheets[prop].isHidden()?'hidden':'q')}
                    )
                );
            }
        }
        if(sheets.length === 0) sheets.push(React.createElement('span', {key:0}));

        return (

            <div>
                <MainMenu/>

                <div id="error"></div>

                <div className="bulkClass">Adult page</div>

                <div id="sheets">
                    {sheets}
                </div>
            </div>
        );
    }

});


function renderAIndex() {
    ReactDOM.render(
        <AdultPage/>,
        document.getElementById('content')
    )
}

export {renderAIndex};






