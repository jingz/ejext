// GridCRUD plugins will add toolbar of crud operation on top of th grid
// 2012-04-20
Ext.ux.GridCRUD = Ext.extend(Ext.util.Observable, {
  constructor: function(config){
    config = config || {}
    Ext.apply(this, config);
    Ext.ux.GridCRUD.superclass.constructor.call(this, config);

    this.addEvents({
        addnewrecord: true,
        editselectedrecord: true,
        deleteselectedrecord: true
    });
  },

  init: function(grd){
      this.grd = grd;
      grd.on("render", this.afterender, this)
      // add btn on fly
      var t = new Ext.Toolbar({
          items: [
              {
                  xtype: "button",
                  text: "<b>Add</b>",
                  iconCls: "icon-add",
                  ref: "../pluginBtnAdd"
              },
              "-",
              {
                  xtype: "button",
                  text: "<b>Edit</b>",
                  iconCls: "icon-bullet_edit",
                  ref: "../pluginBtnEdit"
              },
              "-",
              {
                  xtype: "button",
                  text: "<b>Remove</b>",
                  iconCls: "icon-bullet_cross",
                  ref: "../pluginBtnRemove"
              }
          ]
      });

      grd.add(t)
      grd.doLayout();
      
      grd.pluginBtnAdd.on("click", this.addNewRecord, this);
      grd.pluginBtnEdit.on("click", this.editSelectedRecord, this);
      grd.pluginBtnRemove.on("click", this.removeSelectedRecord, this);
  },
  
  afterender: function  () {
      this.grd.doLayout();
  },

  addNewRecord: function  () {
      this.grd.fireEvent("addnewrecord");
      // add window 
      var w = Ext.Window({
           title: "Add",
           autoWidth: "true",
           autoHeight: "true",
          
      });
  },

  editSelectedRecord: function  () {
      var rec = this.grd.getCurrentRecord();
      this.grd.fireEvent("editselectedrecord", rec);
  },

  removeSelectedRecord: function  () {
      var rec = this.grd.getCurrentRecord();
      console.log(rec)
      this.grd.fireEvent("deleteselectedrecord", rec);
  }

});

Ext.preg("gridcrud", Ext.ux.GridCRUD);
