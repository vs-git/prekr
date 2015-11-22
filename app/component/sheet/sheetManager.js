import {ErrOut} from '../../lib/ErrOut';

import {ReportSheet} from './reportSheet';
import {TestSheet} from './TestSheet';

var registry = {
    ReportSheet:ReportSheet,
    TestSheet:TestSheet
};

var SheetManager = (function () {

    var sheetRegistry = {};
    var stickerRegistry = {};

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
        stickerRegistry[key] = false;
    }

    function show(key){
        sheetRegistry[key]['hidden'] = false;
        stickerRegistry[key] = true;
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
        getSheets:function(){return sheetRegistry},
        getStickers:function(){return stickerRegistry},
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
        }
    }

})();

export {SheetManager};