Ext.ux.SymbolField = Ext.extend(Ext.form.ComboBox,{
    initComponent: function() {
        Ext.apply(this, {
             pageSize: 20,
             // lazyRender: true,
             lazyInit: true,
             hideTrigger: true,
             width: 200,     
             store: "securitiesStore",      
             minChars: 1,    
             mode: "remote",
             cls:"combo", 
             submitValue:true,
             name :"securities_id",         
             displayField :"sec_symbol",    
             valueField:"sec_symbol",
             hiddenValue: "id",
             queryParam:"sec_symbol",      
             itemSelector :"div.symbol-items",
             minListWidth: 300,
             tpl:"<tpl for=\".\">\n  <div class=\"symbol-items\" style=\"padding: 5px;\">\n   <p>\n     <b>{sec_symbol}</b><span> {sec_name} </span>\n   </p>\n  </div>\n</tpl>\n",
        })
        Ext.ux.SymbolField.superclass.initComponent.call(this, arguments);        
    }

});

Ext.reg("symbolfield", Ext.ux.SymbolField);
Ext.grid.Column.types.symbolfield = Ext.ux.SymbolField
