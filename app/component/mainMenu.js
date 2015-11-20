import {SheetManager} from './sheet/sheetManager';
import {evt} from '../lib/system';

var ReactPropTypes = React.PropTypes;

var MainMenu = React.createClass({

    displayName : 'MainMenu',

    _menuItemSuffix : 'MenuItem',

    componentDidMount:function(){
        $('#header .menu').on('click', 'div', function(e){
            //SheetManager.get( $(e.target).attr('id'));

            this._addSticker($(e.target).attr('id'));
        }.bind(this));
    },

    getInitialState: function() {
        return { stickerRegistry: {} };
    },

    _addSticker:function(componentId){

        let componentVarName = componentId.replace(new RegExp(this._menuItemSuffix, 'i'), '');

        SheetManager.add(componentVarName);

        evt.trigger('click.MainMenu');
    },

    _delSticker:function(){
        console.log( '_delSticker' );
    },

    render: function() {

        return (

            <div id="header">
                <div className="labelLogo">RM Logo Label</div>
                <div className="menu">
                    <MenuItem
                        id="ReportSheetMenuItem"
                        text="STAAR Report"
                        />
                    <MenuItem
                        id="TestSheetMenuItem"
                        text="test test"
                        />
                </div>
                <div id="sheetStickers"></div>
            </div>
        );
    },

    loadReport : function(e){
        //RM.SheetManager.get( $(e.target).attr('id'));
    }

});

var MenuItem = React.createClass({

    displayName : 'MenuItem',

    getInitialState: function() {
        return {
            className: 'likeA'
        };
    },

    propTypes: {
        className: ReactPropTypes.string,
        id: ReactPropTypes.string.isRequired,
        text: ReactPropTypes.string.isRequired
    },

    render: function() {
        return (
            <div className={this.state.className} id={this.props.id} >{this.props.text}</div>
        );
    }

});

var SheetSticker = React.createClass({

    displayName : 'SheetSticker',

    render: function() {
        return (
            <div className="sticker">
                <span className="bold close">X</span>
            </div>
        );
    }

});

export {MainMenu};