Ext.ux.GridEditable = Ext.extend(Ext.util.Observable, {
  constructor: function(config){
    config = config || {}
    Ext.apply(this, config);
    Ext.ux.GridEditable.superclass.constructor.call(this, config);
  },

  init: function(grd){
        // console.log(grd.rendered) // no
      this.grd = grd;
      grd.on("render", this.afterender, this)
      // add btn on fly
      var t = new Ext.Toolbar({
          items: [
              {
                  xtype: "button",
                  text: "Add",
                  iconCls: "icon-add",
                  ref: "../pluginBtnAdd"
              },
              "-",
              {
                  xtype: "button",
                  text: "Remove",
                  iconCls: "icon-cancel",
                  ref: "../pluginBtnRemove"
              }
          ]
      });

      grd.add(t)
      
      grd.pluginBtnAdd.on("click", this.addNewRecord, this);
      grd.pluginBtnRemove.on("click", this.removeSelectedRecord, this);
  },
  
  afterender: function  () {
      // console.log("afterender" )
      this.grd.doLayout();
  },

  addNewRecord: function  () {
      // use Custom
      this.grd.addNewRecord();
  },

  removeSelectedRecord: function  () {
      // custom function
      this.grd.removeSelectedRow();
  }

});

Ext.preg("grid-editable", Ext.ux.GridEditable)
