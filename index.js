/*!
 *  XGLDemo v1.0.0 By Rucky
 *  Date 2018.11.27
 *  MIT Licensed.
 */
;(function(undefined) {
    "use strict"
    var _global;

    //logo image
    var logoImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAAgCAMAAADT9S0cAAAC91BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////lAAn////////////////////////mAA/////////////////////////////////////mABH////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////mAA/////lAAv////////////nAxP////kAAH////lAArlAArmAA/////////////kAAX////////////jAATlAAvlAAzlAArmABHiAAX////////lAAbmABLmABH////lAAn////mAA/mABHlAAjmABLkAAr4vbrmABPmABDkAAXnBBb////////lAA3lAAngAADmAA/lAA7mABPnFSDkAAP////gAADjAAHjAAPwb3LlAAbpHyrmABPpICnxcXj+7/H4w8LsRE/87OrrLjv2pqjnHSLsQE3vYGj74N7tTFbrNz3pJzP2q67waG7xcXvsR0/vYGvoHy7pHizjAADtT1P////nABLiAADgAADmAA/eAADlAAzkAAHlAAjoGCT4uLr3pqnlCxD/9vX97Ov60dH6y833qq70lpjwaG7rN0HnDxznBRX//Pn72df71db2mp/vYWbuVlvpIi3+//r83+H5xsj2oabyiYvygYbyfILxc3fwZGztTVjsU1XtSU/tP0vnKyvpHSnmFxj+8fL85+P4w8L5v8L3sLXvW2LrQkboNTXpJy/nJSX0pKHzjY3wcXXqLjrqLjjqLDejhqQaAAAAv3RSTlMAFAZpBP2LiEERCntzWb9kkHZuNB4MmoJiVz/q27Wxj3gnJBYOAvNUSD0lHBcIxbqgf35vSjEvHxvT0cKUhGBdUkbs5+Kno316Tiki3dfOzMeuqZ6cl5N0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';

    // 插件构造函数 - 返回数组结构
    function XGLDemo(opt){
        this._initial(opt);
    }
    XGLDemo.prototype = {
        constructor: this,
        _initial: function(opt) {
            // 默认参数
            var def = {
                visible : true,                 //是否默认显示
                logo    : true,                 //是否显示logo
                position: 'bottomRight',        //bottomRight - 右下角 | bottomLeft - 左下角 | top - 居中底部 | bottom - 居中底部
                language: 'CN',                 // CN - 开发版 | EN - Demo
                text    : '',                   //自定义文字 三个字以内最佳 | language无效

            };
            this.def = this._extend(def,opt,true);
            //显示
            this.display();
        },
        //原生实现对象融合
        _extend(o,n,override) {
            for(var key in n){
                if(n.hasOwnProperty(key) && (!o.hasOwnProperty(key) || override)){
                    o[key]=n[key];
                }
            }
            return o;
        },
        //原生实现append
        _append : function(parent, text) {
            if (typeof text === 'string') {
                var temp = document.createElement('div');
                temp.innerHTML = text;
                // 防止元素太多 进行提速
                var frag = document.createDocumentFragment();
                while (temp.firstChild) {
                    frag.appendChild(temp.firstChild);
                }
                    parent.appendChild(frag);
            }
            else {
                parent.appendChild(text);
            }
        },
        //dom添加至body
        display : function(){
            var text    = this.def.language === 'CN' ? '开发版' : 'Demo';
            var logoDiv = '<div class="_xgl-logo"></div>';
            var dom     = '<div id="___xgl_demo" class="___xgl_dmeo___ '+this.def.position+'">'+(this.def.logo ? logoDiv : '') +'<div class="_xgl-text">'+(this.def.text != '' ? this.def.text : text)+'</div></div>';
            
            this._append(document.body, dom);

            //添加样式以及适配viewport
            this.print();
            this.style();
            this.adaptViewPort();

            //resize
            var that = this;
            window.addEventListener('resize',function(){
                that.adaptViewPort();
            },false)
        },
        print : function(){

            console.log("%c   XGL - Debug Mode","height:70px;background: url(http://cdn.szxgl.cn/scl/images/x-logo.gif) no-repeat left center;font-size: 70px;color:#d7ac71","\n");
        },
        //样式
        style : function(){
            var element = document.createElement("style");

            var styles  = '.___xgl_dmeo___{width:100%; height:40px; box-shadow:0 0 30px #eee inset; position:fixed; left:40%; bottom:2%; z-index: 9999; background: rgba(0,0,0,1); pointer-events:none; -webkit-transform:rotate(-45deg); } .___xgl_dmeo___ ._xgl-logo{width: 100px; height:31px; position:absolute; top:2%; left:58%; opacity: 1; margin-left: -50px; background: url('+logoImage+'); -webkit-transform:scale(.3); } .___xgl_dmeo___ ._xgl-text{line-height:40px; text-align:center; margin-left:-5%; font-size: 18px; color:#fff; font-weight:bold; color: #fff; text-shadow:1px 1px #9d9d9d,1.5px 1.5px #bbbbbb; }';

            var styles2 = '.___xgl_dmeo___{width:100%; height:40px; position:fixed; left:0%; bottom:0%; z-index: 9999; background: rgba(0,0,0,.95); pointer-events:none; box-shadow: 0 0 20px #eee; border-radius:15px 15px 0 0; } .___xgl_dmeo___ ._xgl-logo{width: 100px; height:31px; position:absolute; top:10%; left:60%; opacity: 1; margin-left: -50px; background: url('+logoImage+'); -webkit-transform:scale(.5); } .___xgl_dmeo___ ._xgl-text{line-height:40px; text-align:center; font-size: 18px; color:#fff; font-weight:bold; color: #fff; margin-left: -10%; text-shadow:1px 1px rgba(197, 223, 248,0.8); }'

            var currentStyle = this.def.position === 'bottomRight' ? styles : styles2;

            element.type = "text/css";

            try{
                element.appendChild(document.createTextNode(currentStyle));

            }catch(ex){

                element.styleSheet.cssText = currentStyle;//针对IE

            }   

            var head = document.getElementsByTagName("head")[0];

            head.appendChild(element);
        },
        adaptViewPort : function(){
            var scaleRatio = window.innerWidth/375;

            var debugDemo = document.getElementById('___xgl_demo');
            var rotate    = 'rotate(-45deg)';
            debugDemo.style.cssText = '-webkit-transform:scale('+scaleRatio+') '+this.def.position === 'bottomRight' ? rotate : ''+'';
        }
    }

    //兼容模块
    _global = (function(){ return this || (0, eval)('this'); }());
    if (typeof module !== "undefined" && module.exports) {
        module.exports = XGLDemo;
    } else if (typeof define === "function" && define.amd) {
        define(function(){return XGLDemo;});
    } else {
        !('XGLDemo' in _global) && (_global.XGLDemo = XGLDemo);
    }
}());
