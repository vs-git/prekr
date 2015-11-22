import {SheetManager} from './sheet/sheetManager';
import {evt} from '../lib/system';

var ReactPropTypes = React.PropTypes;

var MainMenu = React.createClass({

    displayName : 'MainMenu',

    statics: {
        _actions : {
            DEL : 'DEL',
            SELECT : 'SELECT',
            ADD : 'ADD'
        }
    },

    _menuItemSuffix : 'MenuItem',
    _stickerSuffix : 'StickerItem',

    getInitialState: function() {
        return { stickers: {} };
    },

    _changeSheets: function(elemId, action) {
        let componentVarName = elemId.replace(new RegExp('(' + this._menuItemSuffix + '|' + this._stickerSuffix + ')$', 'i'), '');
        switch (action) {
            case MainMenu._actions.ADD:
                SheetManager.add(componentVarName);
                break;
            case MainMenu._actions.SELECT:
                SheetManager.toFront(componentVarName);
                break;
            case MainMenu._actions.DEL:
                SheetManager.del(componentVarName);
                break;
        }
        this.setState({stickers : SheetManager.getStickers()});
        evt.trigger('click.SheetsChanged');
    },

    render: function() {
        let stickers = [];
        for (let prop in this.state.stickers) {// this.state.stickers is Object, not Array!!!
            if (this.state.stickers.hasOwnProperty(prop)) {
                stickers.push(
                    React.createElement(
                        SheetSticker,
                        {
                            key : prop,
                            id : prop + this._stickerSuffix,
                            cssActive : (this.state.stickers[prop] === true ? 'active' : ''),
                            onClick : this._changeSheets
                        }
                    )
                );
            }
        }
        if(stickers.length === 0) stickers.push(React.createElement('span', {key:0}));

        return (

            <div id="header">
                <div className="labelLogo">RM Logo Label</div>
                <div className="menu">
                    <MenuItem
                        id="ReportSheetMenuItem"
                        text="STAAR Report"
                        onClick={this._changeSheets}
                        />
                    <MenuItem
                        id="TestSheetMenuItem"
                        text="test test"
                        onClick={this._changeSheets}
                        />
                </div>
                <div id="sheetStickers">
                    {stickers}
                </div>
            </div>
        );
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
        text: ReactPropTypes.string.isRequired,
        onClick: ReactPropTypes.func.isRequired
    },

    _onClick : function() {
        this.props.onClick(this.props.id, MainMenu._actions.ADD);
    },

    render: function() {
        return (
            <div
                className={this.state.className}
                id={this.props.id}
                onClick={this._onClick}
                >
                {this.props.text}
            </div>
        );
    }

});

var SheetSticker = React.createClass({

    displayName : 'SheetSticker',

    getDefaultProps: function() {
        return {
            cssClass: 'sticker'
        };
    },

    propTypes: {
        cssClass: ReactPropTypes.string.isRequired,
        cssActive: ReactPropTypes.string,
        id: ReactPropTypes.string.isRequired,
        onClick: ReactPropTypes.func.isRequired
    },

    _onClick : function() {
        this.props.onClick(this.props.id, MainMenu._actions.SELECT);
    },

    _onCloseClick : function(e) {
        e.stopPropagation();
        this.props.onClick(this.props.id, MainMenu._actions.DEL);
    },

    render: function() {
        return (
            <div
                className={this.props.cssClass + ' ' + this.props.cssActive}
                id={this.props.id}
                onClick={this._onClick}
                >
                <span
                    className="bold close"
                    onClick={this._onCloseClick}
                    >X
                </span>
            </div>
        );
    }

});

export {MainMenu};