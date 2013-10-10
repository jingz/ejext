// source : http://www.sencha.com/forum/showthread.php?105951-Form-field-currency-plugin
// plugin for textfield
// mod : setting decimalPrecision
// fix : clean editor
// mod : setting hiddenCls
// add : style text-align right
// add : allow negative
// overi
Ext.namespace('Ext.ux.plugins');

Ext.ux.plugins.currency = function(config) {
    Ext.apply(this, config);
};

Ext.extend(Ext.ux.plugins.currency, Ext.util.Observable, {

    init:function(textField) {
        Ext.apply(textField, {
            style: "{ text-align: right; }",
            onRender:textField.onRender.createSequence(function() {
                // default option
                this.currencyConfig = Ext.apply({
                    symbolBeforeAmount: true,
                    currencySymbol: '\u0E3F', //  use '\u20AC' for euro sign (= unicode)
                    decimalSeparator: '.',
                    decimalPrecision: 2,
                    thousandsSeparator: ',',
                    negativeAmountClass: 'negative-number',
                    hiddenCls: 'number',
                    allowNegative: true
                }, this.currencyConfig);

                var c = this.currencyConfig;
                if(c.allowNegative){
                  this.maskRe =  new RegExp( '[\\-\\d\\'+ c.decimalSeparator+( c.thousandsSeparator.trim()!==""? "\\"+ c.thousandsSeparator:"")+']','i' );
                }else{
                  this.maskRe =  new RegExp( '[\\d\\'+ c.decimalSeparator+( c.thousandsSeparator.trim()!==""? "\\"+ c.thousandsSeparator:"")+']','i' );
                }

                var name = this.name || this.el.dom.name;
                this.validator = function(theVal){
                    if (isNaN(parseFloat(this.formatHiddenValue(theVal))) && theVal != "") {
                        return c.invalidAmountText || false;
                    }
                    return true;
                };

                this.hiddenField = this.el.insertSibling({
                     tag:'input'
                    ,type:'hidden'
                    ,name:name
                    ,cls: c.hiddenCls 
                    //,value:this.formatHiddenValue(this.value)
                });

                this.hiddenName = name; // otherwise field is not found by BasicForm::findField
                this.el.dom.removeAttribute('name');
                this.el.on({
                    keyup:{scope:this, fn:this.updateHidden},
                    focus:{scope:this, fn:this.cleanForEdit},
                    blur:{scope:this, fn:this.updateShown}
                }, Ext.isIE ? 'after' : 'before');
            }),

            _getValue: Ext.form.TextField.prototype.getValue,

            setValue: function(theValue){
                Ext.form.TextField.superclass.setValue.call(this, theValue);
                this.updateShown();
            },

            updateShown: function(){
                if (this.isValid() && this._getValue() && this._getValue().trim() !== ""){
                    // alias 
                    var c = this.currencyConfig;
                    var newValue = "";
                    var currentValue = parseFloat(this.formatHiddenValue(this._getValue()));
                    // max precision
                    var dummyZero = "000000000000000000";
                    var toShowFormat = '0'+ c.thousandsSeparator+'0.' + dummyZero.substring(0, c.decimalPrecision);
                    if (c.decimalSeparator === ',' ) {
                        toShowFormat = '0'+ c.thousandsSeparator + '0,00/i';
                    }

                    if (c.symbolBeforeAmount === true ) {
                        newValue = c.currencySymbol +
                                   (c.currencySymbol.trim() !== ""?" ":"") +
                                    Ext.util.Format.number(currentValue,toShowFormat);
                    }
                    else {
                        newValue = Ext.util.Format.number(currentValue,toShowFormat) +
                                   (c.currencySymbol.trim() !== ""?" ":"") +
                                   c.currencySymbol;
                    }

                    if (currentValue < 0) {
                        this.el.addClass(c.negativeAmountClass);
                    }
                    else {
                        this.el.removeClass(c.negativeAmountClass);
                    }

                    this.setRawValue(newValue);
                    this.updateHidden();
                 }
            },

            updateHidden:function() {
                    this.hiddenField.dom.value = (this.isValid()?this.formatHiddenValue(this._getValue()):"");
            },

            formatHiddenValue: function(rawAmount){
                if (!rawAmount) {
                    return;
                }
                if(this.currencyConfig){
                    rawAmount = String(rawAmount).replace(this.currencyConfig.currencySymbol,'');
                    rawAmount = String(rawAmount).replace(eval("/"+this.currencyConfig.thousandsSeparator+"/g"),'');
                    rawAmount = String(rawAmount).replace(this.currencyConfig.decimalSeparator,'.');
                }
                return rawAmount.trim();
            },

            getValue: function  () {
                return parseFloat(this.formatHiddenValue(this._getValue()));
            },

            cleanForEdit:function(textField) {
                this.setRawValue(String(this._getValue()).replace(this.currencyConfig.currencySymbol,'').trim());
                this.setRawValue(String(this._getValue()).replace(eval("/" + this.currencyConfig.thousandsSeparator + "/g"),'').trim());
            },

            reset: function() {
               this.setRawValue(0) 
            }
        });
    }
});

Ext.preg('currency', Ext.ux.plugins.currency);
Ext.grid.Column.types.currencycolumn = Ext.ux.plugins.currency
