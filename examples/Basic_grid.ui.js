Basic_gridUI = Ext.extend(Ext.Panel,{
  "padding": 5,
  "title": "Grid Example",
  "autoHeight": true,
  "autoDestroy": true,
  "id": "grid-example",
  "style": "position: auto; margin: 0 auto; height: 600px; width: 960px; margin-top: 30px;\n",
  initComponent: function(){
    Ext.applyIf(this,
    {
  "xtype":"panel",
  "items":[
    {
      "xtype":"container",
      "layout":"hbox",
      "autoWidth":true,
      "autoDestroy":true,
      "layoutConfig":{
        "pack":"start",
        "align":"stretchmax"
      },
      "defaults":{
        "margins":"0 2.5"
      },
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
              "xtype":"form",
              "autoHeight":true,
              "layout":"form",
              "labelWidth":200,
              "labelAlign":"right",
              "border":false,
              "title":null,
              "autoDestroy":true,
              "id":"frm-info",
              "height":300,
              "padding":0,
              "ref":"../../frmInfo",
              "items":[
                {
                  "xtype":"fieldset",
                  "layout":"form",
                  "animCollapse":true,
                  "labelAlign":"right",
                  "autoHeight":true,
                  "title":"Info",
                  "autoDestroy":true,
                  "id":"info",
                  "labelWidth":120,
                  "ref":"../../../info",
                  "items":[
                    {
                      "xtype":"textfield",
                      "width":150,
                      "autoCreate":{
                        "tag":"input",
                        "type":"text",
                        "autocomplete":"off"
                      },
                      "submitValue":true,
                      "name":"text_column",
                      "fieldLabel":"Text Column",
                      "autoDestroy":true,
                      "id":"text-column",
                      "ref":"../../../../textColumn"
                    },
                    {
                      "xtype":"numberfield",
                      "width":150,
                      "decimalPrecision":2,
                      "decimalSeparator":".",
                      "allowDecimal":true,
                      "allowNegative":false,
                      "cls":"number",
                      "submitValue":true,
                      "name":"number_column",
                      "fieldLabel":"Number Column",
                      "autoDestroy":true,
                      "id":"number-column",
                      "ref":"../../../../numberColumn"
                    },
                    {
                      "xtype":"checkbox",
                      "hideLabel":false,
                      "cls":"checkbox",
                      "submitValue":true,
                      "name":"boolean_column",
                      "boxLabel":"Boolean Column",
                      "autoDestroy":true,
                      "id":"boolean-column",
                      "ref":"../../../../booleanColumn"
                    },
                    {
                      "xtype":"datefield",
                      "width":100,
                      "cls":"date",
                      "submitValue":true,
                      "name":"date_column",
                      "fieldLabel":"Date Column",
                      "autoDestroy":true,
                      "id":"date-column",
                      "ref":"../../../../dateColumn"
                    },
                    {
                      "xtype":"textfield",
                      "width":150,
                      "cls":"number",
                      "plugins":[
                        {
                          "ptype":"currency"
                        },
                        {
                          "ptype":"multiple_validations"
                        }
                      ],
                      "currencyConfig":{
                      },
                      "submitValue":true,
                      "name":"currency_column",
                      "fieldLabel":"Currency Column",
                      "autoDestroy":true,
                      "id":"currency-column",
                      "ref":"../../../../currencyColumn"
                    }
                  ]
                }
              ]
            },
            {
              "xtype":"grid",
              "title":"Grid",
              "columnLines":true,
              "sm":(this._kzMhDfdnY_vHtZyPdXw = new Ext.grid.CheckboxSelectionModel()),
              "viewConfig":{
                "forceFit":true,
                "emptyText":"No record"
              },
              "frame":true,
              "width":"auto",
              "loadMask":true,
              "store":          new Ext.data.JsonStore({            storeId: "_GmbwhJSXPffvsPtVYATg",            url: null,            fields: [{ name: 'text_column' },{ name: 'number_column' },{ name: 'boolean_column' },{ name: 'date_column' },{ name: 'currency_column' }]          })        ,
              "height":300,
              "autoDestroy":true,
              "id":"grid",
              "stripeRows":true,
              "enableDragDrop":true,
              "columns":[
                this._kzMhDfdnY_vHtZyPdXw,
                new Ext.grid.RowNumberer(),
                {
                  "xtype":"gridcolumn",
                  "header":"Text Column",
                  "dataIndex":"text_column",
                  "sortable":true,
                  "autoDestroy":true,
                  "id":"text-column",
                  "ref":"../../textColumn"
                },
                {
                  "xtype":"numbercolumn",
                  "align":"right",
                  "sortable":true,
                  "format":"0,000",
                  "header":"Number Column",
                  "dataIndex":"number_column",
                  "autoDestroy":true,
                  "id":"number-column",
                  "ref":"../../numberColumn"
                },
                {
                  "xtype":"booleancolumn",
                  "trueText":"yes",
                  "falseText":"no",
                  "width":25,
                  "header":"Yes/No",
                  "dataIndex":"boolean_column",
                  "sortable":true,
                  "autoDestroy":true,
                  "id":"boolean-column",
                  "ref":"../../booleanColumn"
                },
                {
                  "xtype":"datecolumn",
                  "format":"d/m/Y",
                  "header":"Date Column",
                  "dataIndex":"date_column",
                  "sortable":true,
                  "autoDestroy":true,
                  "id":"date-column",
                  "ref":"../../dateColumn"
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
                  "id":"currency-column",
                  "ref":"../../currencyColumn"
                },
                {
                  "xtype":"actioncolumn",
                  "header":"Action Column",
                  "dataIndex":"action_column",
                  "sortable":true,
                  "autoDestroy":true,
                  "id":"action-column",
                  "ref":"../../actionColumn"
                }
              ],
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
                    "id":"add",
                    "ref":"../../../../add"
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
                    "id":"update",
                    "ref":"../../../../update"
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
                    "id":"delete",
                    "ref":"../../../../delete"
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
                    "id":"load-example-data",
                    "ref":"../../../../loadExampleData"
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
              "ref":"../../grid"
            }
          ]
        },
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
              "xtype":"panel",
              "padding":5,
              "title":"Code Display",
              "autoHeight":true,
              "autoDestroy":true,
              "id":"code-display",
              "width":360,
              "padding":0,
              "ref":"../../codeDisplay",
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
                      "xtype":"container",
                      "layout":"auto",
                      "autoWidth":true,
                      "autoDestroy":true,
                      "id":"code",
                      "height":"auto",
                      "style":"padding: 0.3em; background-color: #ccc; overflow-x: auto; overflow-y: auto;\n",
                      "html":"<pre> <code>\n  :layout:\n    panel#grid-example:\n      -\n        - form#frm-info@{ :height(300) :padding(0) }:\n          - fieldset#info:\n            - textfield#text-column\n            - numberfield#number-column\n            - checkbox#boolean-column@{ :hideLabel(false) }\n            - datefield#date-column\n            - currency#currency-column\n        - grid#grid@{ :height(300) :layout(auto) }:\n          - toolbar:\n            - button#add\n            - tbseparator\n            - button#update\n            - tbseparator\n            - button#delete\n            - tbfill\n            - tbseparator\n            - button#load-example-data\n          - runningcolumn\n          - gtext#text-column\n          - gnumber#number-column\n        - gboolean#boolean-column@{ :text(Yes/No) }\n        - gdate#date-column\n        - gcurrency#currency-column\n        - gaction#action-column\n        - paging\n    -\n      - panel#code-display@{ :width(350) :height(auto) }:\n        - div#code@{ :height(auto) }\n  :config:\n    grid-example:\n      style: >\n        position: auto;\n        margin: 0 auto;\n        width: 960px;\n        margin-top: 30px;\n    code-display:\n      padding: 0\n    code: \n      style: >\n        padding: 0.3em;\n        background-color: #ccc;\n        overflow-x: auto;\n        overflow-y: auto;\n  </code>\n</pre>\n",
                      "ref":"../../../../code"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
});
    Basic_gridUI.superclass.initComponent.call(this);
    var self = this;
    
  }
});