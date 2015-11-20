import {ErrOut} from '../../lib/ErrOut';

import {ReportSheet} from './reportSheet';
import {TestSheet} from './TestSheet';

var registry = {
    ReportSheet:ReportSheet,
    TestSheet:TestSheet
};

var SheetManager = (function () {
/*
    var stickers = '#sheetStickers'; // selector of DOM element, container for sheet stickers
    var sheets = '#sheets'; // selector of DOM element, container for sheets
    var menuItemSuffix = 'menuitem';
*/
    var sheetRegistry = {};
    var stickerRegistry = {};
    /*
    var stickerTemplate = '<div class="sticker"><span class="bold close">X</span></div>';

    function add(sheetViewName, sheetView) {

        sheetView.html().attr("id", sheetViewName);

        sheetView.render()
            .then(function(view){
                $(sheets).append(sheetView.html())
                sheetView.renderChildren();
            })
            .catch(function(error){
                ErrOut.getHandler({type:'console'}).fire(error);
            });

        var $sticker = $(stickerTemplate).off('click.shm').on('click.shm', function(e){
            toFront($.data(e.target, 'sheetId'));
        });
        $(stickers).append($sticker);
        $.data($sticker.get(0), 'sheetId', sheetViewName);

        $sticker.off('mouseenter.shm', '.close').on('mouseenter.shm', '.close', function(e){
            $(e.target).addClass('mouseEnter');
        }).off('mouseout.shm', '.close').on('mouseout.shm', '.close', function(e){
            $(e.target).removeClass('mouseEnter');
        }).off('click.shm', '.close').on('click.shm', '.close', function(e){
            del(e);
        });

        sheetRegistry[sheetViewName] = {hidden:true, component:sheetView};
        stickerRegistry[sheetViewName] = $sticker;
    }*/

    function Sheet(component){
        this.hidden = true;
        this.component = component;
    }
    Sheet.prototype.isHidden = function(){return this.hidden;};
    Sheet.prototype.getComponent = function(){return this.component;};

    function del(key){
        delete sheetRegistry[key];
        delete stickerRegistry[key];
        setFirstToFront();
    }

    function hide(key){
        sheetRegistry[key]['hidden'] = true;
        stickerRegistry[key]['active'] = false;
    }

    function show(key){
        sheetRegistry[key]['hidden'] = false;
        stickerRegistry[key]['active'] = true;
    }

    function setFirstToFront(){
        toFront();
    }

    function toFront(sheetViewName) {
        // if argument is empty, 1st sheet will be displayed
        for (var key in stickerRegistry) {
            if (stickerRegistry.hasOwnProperty(key)) {
                if (sheetViewName === key || !sheetViewName) {
                    show(key);
                    if (!sheetViewName) {
                        break;
                    }
                } else {
                    hide(key);
                }
            }
        }
    }

    return {
        del:del,
        toFront:toFront,

        add : function(sheetName){

            var sheetView = registry[sheetName];

            if (typeof sheetView === 'undefined') {
                ErrOut.getHandler({type:'console'}).fire('variable "' + sheetName + '" is undefined');
                return;
            }

            if (!sheetRegistry[sheetName]) {
                sheetRegistry[sheetName] = new Sheet(sheetView);
                stickerRegistry[sheetName] = {active:false, sheet:sheetView};
            }

            toFront(sheetName);
        },

        getSheets:function(){return sheetRegistry},
        getStickers:function(){return stickerRegistry}
    }

})();

export {SheetManager};