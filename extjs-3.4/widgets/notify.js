// Notification Widget
// 2012-04-19
Ext.Notify = function(){
    this.msgCt;

    function createBox(t, s){
        return ['<div class="msg-wrapper">',
                '<div style="border: 0px;">',
                '<div class="close-dialog-icon" style="width: 24px; height: 24px; border: 0px 0px; float: right; text-decoration: none; margin-right: -10px; margin-top: -10px;"/></div></div>',
                '<div>', s, '</div>',
                '</div>'].join('');
    }
    
    return {
        msg: function(config){
            var obj = Ext.applyIf(config,{
                text: "no message",
                type: "inform",
                width: 400,
                duration: 3
            });

            if(!this.msgCt){
                this.msgCt = Ext.DomHelper.insertFirst(document.body, {cls:'msg-div-wrapper'}, true);
            }

            this.msgCt.alignTo(document, 't-t');
            var m = Ext.DomHelper.append(this.msgCt, {html:createBox( obj.type.capitalize() + ' Message', obj.text)}, true);
            var body = Ext.select(".msg-wrapper", false, m.dom);
            body.setWidth("width", obj.width);
            switch(obj.type) {
                case 'success':
                    body.setStyle("background-color", "#88ff88");
                    break;
                case 'error':
                    body.setStyle("background-color", "#ff8888");
                    break;
                case 'warning':
                    body.setStyle("background-color", "#ffff88");
                    break;
                case 'inform':
                    body.setStyle("background-color", "#ccccff");
                    break;
                default:
                    body.setStyle("background-color", "#ccccff");
                    break;
            }

            if(obj.duration === "infinity") 
                m.slideIn('b') // need to call close manually
            else
                m.slideIn('b').pause(obj.duration).ghost("t", {remove:true});

            m.on({
                mouseover: function  () {
                   m.stopFx()
                },

                mouseleave: function  () {
                    if(obj.duration !== "infinity"){
                        m.pause(1).ghost("t", { remove: true})     
                    }
                }
            });

            m.child(".close-dialog-icon").on({
                click: function  () {
                    m.ghost("t", { remove: true});
                    return false;
                }
            });

            return m;
        },

        error: function  (msg, duration) {
            duration = duration || "infinity";
            // incase passing res object
            if(msg instanceof Object){
                err = [];
                if(msg.message){
                    err.push(msg.message);
                }
                _.reduce(msg.error, function(_msg , arr, k){
                  err.push("<i>"+k+"</i>")
                  err = err.concat(arr)
                }, err);

                msg = err.join("<br/>");

            }
            return this.msg({text: msg, type: "error", duration: duration})
        },

        success: function  (msg, duration) {
            duration = duration || 3;
            return this.msg({text: msg || "Successful!", type: "success", duration: duration})
        },

        warning: function  (msg, duration) {
           duration = duration || 3;
           return this.msg({text: msg, type: "warning", duration: duration}) 
        },

        inform: function  (msg, duration) {
            duration = duration || 3;
            return this.msg({text: msg, type: "inform", duration: duration});
        },

        close: function(m) {
            if(m) m.ghost("t", {stopFx: true, remove: true});
        },

        init : function(){
            var lb = Ext.get('lib-bar');
            if(lb){
                lb.show();
            }
        }
    };
}();

Ext.onReady(Ext.Notify.init, Ext.Notify);
