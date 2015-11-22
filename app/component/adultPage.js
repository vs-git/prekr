import {SheetManager} from './sheet/sheetManager';
import {MainMenu} from './MainMenu'
import {evt} from '../lib/system';

import {ReportSheet} from './sheet/reportSheet';

var AdultPage = React.createClass({

    displayName : 'AdultPage',

    componentDidMount:function(){
        evt.on('click.SheetsChanged', this._sheetListChanged);
    },

    componentWillUnmount:function(){
        evt.off('click.SheetsChanged', this._sheetListChanged);
    },

    getInitialState: function() {
        return { sheets: {}};
    },

    _sheetListChanged : function(){
        this.setState({sheets:SheetManager.getSheets()});
    },

    render: function() {
        let sheets = [];
        for (let prop in this.state.sheets) { // this.state.sheets is Object, not Array!!!
            if (this.state.sheets.hasOwnProperty(prop)) {
                sheets.push(
                    React.createElement(
                        this.state.sheets[prop].getComponent(),
                        {
                            key : prop,
                            cssClass : (this.state.sheets[prop].isHidden() ? 'hidden' : '')
                        }
                    )
                );
            }
        }

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






