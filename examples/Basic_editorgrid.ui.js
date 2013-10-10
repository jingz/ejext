 
Basic_editorgridUI = Ext.extend(Ext.Panel,{
  "padding": 5,
  "title": "Viewport",
  "autoHeight": true,
  "autoDestroy": true,
  "id": "viewport",
  "style": "position: auto; margin: 0 auto; width: 960px; margin-top: 30px;\n",
  initComponent: function(){
    Ext.applyIf(this,
    {
  "xtype":"panel",
  "items":[
    {
      "xtype":"container",
      "layout":"anchor",
      "autoWidth":true,
      "autoDestroy":true,
      "renderHidden":false,
      "autoHeight":true,
      "style":"{ height: 100%; margin: 0em 0em; }",
      "defaults":{
        "margins":"0 0"
      },
      "items":[
        {
          "xtype":"editorgrid",
          "title":"Egrid",
          "frame":true,
          "width":"auto",
          "height":500,
          "clicksToEdit":2,
          "enableColumnMove":false,
          "columnLines":true,
          "store":[

          ],
          "viewConfig":{
            "forceFit":true
          },
          "columns":[
            new Ext.grid.RowNumberer(),
            {
              "xtype":"gridcolumn",
              "header":"Text Column",
              "dataIndex":"text_column",
              "sortable":true,
              "autoDestroy":true,
              "editor":{
                "xtype":"textfield"
              },
              "ref":"../textColumn"
            },
            {
              "xtype":"numbercolumn",
              "align":"right",
              "sortable":true,
              "format":"0,000",
              "header":"Number Column",
              "dataIndex":"number_column",
              "autoDestroy":true,
              "editor":{
                "xtype":"numberfield"
              },
              "ref":"../numberColumn"
            },
            {
              "xtype":"checkcolumn",
              "trueText":"yes",
              "falseText":"no",
              "width":25,
              "header":"Yes/No",
              "dataIndex":"boolean_column",
              "sortable":true,
              "autoDestroy":true,
              "ref":"../booleanColumn"
            },
            {
              "xtype":"datecolumn",
              "format":"d/m/Y",
              "header":"Date Column",
              "dataIndex":"date_column",
              "sortable":true,
              "autoDestroy":true,
              "editor":{
                "xtype":"datefield",
                "format":"d/m/Y"
              },
              "ref":"../dateColumn"
            },
            {
              "xtype":"numbercolumn",
              "format":"0,000.00",
              "align":"right",
              "editor":{
                "xtype":"textfield",
                "plugins":[
                  {
                    "ptype":"currency"
                  }
                ]
              },
              "header":"Currency Column",
              "dataIndex":"currency_column",
              "sortable":true,
              "autoDestroy":true,
              "ref":"../currencyColumn"
            },
            {
              "xtype":"actioncolumn",
              "header":"Action Column",
              "dataIndex":"action_column",
              "sortable":true,
              "autoDestroy":true,
              "ref":"../actionColumn"
            }
          ],
          "autoDestroy":true,
          "tbar":{
            "xtype":"toolbar",
            "autoDestroy":true,
            "items":[
              {
                "xtype":"button",
                "text":"Add",
                "padding":"0.2em 0.2em",
                "style":"{font-weight: bold;}",
                "iconCls":"icon-add",
                "autoDestroy":true,
                "ref":"../../../add"
              },
              {
                "xtype":"tbseparator",
                "autoDestroy":true
              },
              {
                "xtype":"button",
                "text":"Update",
                "padding":"0.2em 0.2em",
                "style":"{font-weight: bold;}",
                "iconCls":"icon-application_form_edit",
                "autoDestroy":true,
                "ref":"../../../update"
              },
              {
                "xtype":"tbseparator",
                "autoDestroy":true
              },
              {
                "xtype":"button",
                "text":"Delete",
                "padding":"0.2em 0.2em",
                "style":"{font-weight: bold;}",
                "iconCls":"icon-bullet_cross",
                "autoDestroy":true,
                "ref":"../../../delete"
              },
              {
                "xtype":"tbfill",
                "autoDestroy":true
              },
              {
                "xtype":"tbseparator",
                "autoDestroy":true
              },
              {
                "xtype":"button",
                "text":"Load Example Data",
                "padding":"0.2em 0.2em",
                "style":"{font-weight: bold;}",
                "autoDestroy":true,
                "ref":"../../../loadExampleData"
              },
              {
                "xtype":"tbseparator",
                "autoDestroy":true
              },
              {
                "xtype":"button",
                "text":"Get Changed Data",
                "padding":"0.2em 0.2em",
                "style":"{font-weight: bold;}",
                "autoDestroy":true,
                "ref":"../../../getChangedData"
              }
            ]
          },
          "bbar":{
            "xtype":"paging",
            "start":0,
            "limit":20,
            "displayInfo":true,
            "displayMsg":"Displaying {0} - {1} of {2}",
            "autoDestroy":true,
            "store":[

            ]
          },
          "ref":"../egrid"
        },
        {
          "xtype":"label",
          "autoDestroy":true,
          "html":"<h1><font color=red>*** Open console to watch events log.[ctr + shift + j for chrome]</font></h1>"
        }
      ]
    }
  ]
});
    Basic_editorgridUI.superclass.initComponent.call(this);
    var self = this;
    
  }
});
