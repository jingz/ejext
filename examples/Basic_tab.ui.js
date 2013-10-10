 
Basic_tabUI = Ext.extend(Ext.Panel,{
  "padding": 5,
  "title": "Tab Example",
  "autoHeight": true,
  "autoDestroy": true,
  "id": "tab-example",
  "style": "position: auto; margin: 0 auto; height: 600px; width: 960px; margin-top: 30px;\n",
  initComponent: function(){
    Ext.applyIf(this,
    {
  "xtype":"panel",
  "items":[
    {
      "xtype":"container",
      "layout":"fit",
      "autoWidth":true,
      "autoDestroy":true,
      "autoHeight":true,
      "style":"{height: 100%; margin: 0em 0em;}",
      "defaults":{
        "margins":"0 0"
      },
      "items":[
        {
          "xtype":"tabpanel",
          "height":200,
          "activeTab":0,
          "autoHeight":true,
          "layoutOnTabChange":true,
          "deferredRender":true,
          "animScroll":true,
          "autoDestroy":true,
          "items":[
            {
              "xtype":"panel",
              "padding":5,
              "title":"First Tab",
              "autoHeight":true,
              "autoDestroy":true,
              "ref":"../../firstTab",
              "items":[
                {
                  "xtype":"container",
                  "layout":"form",
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
                      "xtype":"label",
                      "text":"First",
                      "autoDestroy":true,
                      "html":"<h1>Basic Text</h1>",
                      "ref":"../../../../first"
                    },
                    {
                      "xtype":"container",
                      "layout":"auto",
                      "autoWidth":true,
                      "autoDestroy":true,
                      "html":"<hr/> <pre>\n  Lorem ipsum dolor sit amet, consectetuer adipiscing elit,\n  sed diam nonummy nibh euismod tincidunt ut laoreet\n  dolore magna aliquam erat volutpat.\n  Ut wisi enim ad minim veniam, quis nostrud exerci\n  tation ullamcorper suscipit lobortis nisl ut aliquip ex\n  ea commodo consequat. Duis autem vel eum iriure dolor\n  in hendrerit in vulputate velit esse molestie consequat,\n  vel illum dolore eu feugiat nulla facilisis at vero eros et\n  accumsan et iusto odio dignissim qui blandit praesent luptatum\n  zzril delenit augue duis dolore te feugait nulla facilisi.\n  Nam liber tempor cum soluta nobis eleifend option congue nihil\n  imperdiet doming id quod mazim placerat facer possim assum.\n</pre> <hr/> <button>Simple HTML Button</button>\n",
                      "ref":"../../../../firstContent"
                    }
                  ]
                }
              ]
            },
            {
              "xtype":"panel",
              "padding":5,
              "title":"Second Tab",
              "autoHeight":true,
              "autoDestroy":true,
              "ref":"../../secondTab",
              "items":[
                {
                  "xtype":"container",
                  "layout":"form",
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
                      "xtype":"label",
                      "text":"Second",
                      "autoDestroy":true,
                      "html":"<h1>With Inner Grid</h1>",
                      "ref":"../../../../second"
                    },
                    {
                      "xtype":"container",
                      "layout":"auto",
                      "autoWidth":true,
                      "autoDestroy":true,
                      "ref":"../../../../secondContent"
                    },
                    {
                      "xtype":"container",
                      "layout":"auto",
                      "autoWidth":true,
                      "autoDestroy":true,
                      "margins":"5 5",
                      "ref":"../../../../btnWrapper",
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
                            "margins":"5 5"
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
                                  "xtype":"button",
                                  "text":"Create",
                                  "padding":"0.2em 0.2em",
                                  "style":"{font-weight: bold;}",
                                  "iconCls":"icon-add",
                                  "autoDestroy":true,
                                  "ref":"../../../../../../../create"
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
                                  "xtype":"button",
                                  "text":"Remove",
                                  "padding":"0.2em 0.2em",
                                  "style":"{font-weight: bold;}",
                                  "autoDestroy":true,
                                  "ref":"../../../../../../../remove"
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "xtype":"grid",
                      "title":"Grd",
                      "columnLines":true,
                      "sm":(this._hGCqJelGKWVxbDxLkg = new Ext.grid.RowSelectionModel({ singleSelect: true })),
                      "viewConfig":{
                        "forceFit":true,
                        "emptyText":"No record"
                      },
                      "frame":true,
                      "width":"auto",
                      "loadMask":true,
                      "store":          new Ext.data.JsonStore({            storeId: "_iIIzbySnQQsEpJYKPSw",            url: null,            fields: [{ name: 'col_first' },{ name: 'col_second' },{ name: 'col_num' }]          })        ,
                      "height":200,
                      "autoDestroy":true,
                      "columns":[
                        {
                          "xtype":"gridcolumn",
                          "header":"Col First",
                          "dataIndex":"col_first",
                          "sortable":true,
                          "autoDestroy":true,
                          "ref":"../../../../colFirst"
                        },
                        {
                          "xtype":"gridcolumn",
                          "header":"Col Second",
                          "dataIndex":"col_second",
                          "sortable":true,
                          "autoDestroy":true,
                          "ref":"../../../../colSecond"
                        },
                        {
                          "xtype":"numbercolumn",
                          "align":"right",
                          "sortable":true,
                          "format":"0,000",
                          "header":"Col Num",
                          "dataIndex":"col_num",
                          "autoDestroy":true,
                          "ref":"../../../../colNum"
                        }
                      ],
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
                      "ref":"../../../../grd"
                    }
                  ]
                }
              ]
            },
            {
              "xtype":"panel",
              "padding":5,
              "title":"Third Tab",
              "autoHeight":true,
              "autoDestroy":true,
              "ref":"../../thirdTab",
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
                      "frame":true,
                      "fileUpload":true,
                      "ref":"../../../../frm",
                      "items":[
                        {
                          "xtype":"fieldset",
                          "layout":"form",
                          "animCollapse":true,
                          "labelAlign":"right",
                          "autoHeight":true,
                          "title":"Basic Form",
                          "autoDestroy":true,
                          "labelWidth":78,
                          "ref":"../../../../../basicForm",
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
                              "name":"text",
                              "fieldLabel":"Text",
                              "autoDestroy":true,
                              "ref":"../../../../../../text"
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
                              "name":"number",
                              "fieldLabel":"Number",
                              "autoDestroy":true,
                              "ref":"../../../../../../number"
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
                              "name":"money",
                              "fieldLabel":"Money",
                              "autoDestroy":true,
                              "ref":"../../../../../../money"
                            },
                            {
                              "xtype":"textfield",
                              "width":150,
                              "cls":"number",
                              "plugins":[
                                {
                                  "ptype":"currency"
                                }
                              ],
                              "currencyConfig":{
                                "currencySymbol":""
                              },
                              "submitValue":true,
                              "name":"numeric",
                              "fieldLabel":"Numeric",
                              "autoDestroy":true,
                              "ref":"../../../../../../numeric"
                            },
                            {
                              "xtype":"combo",
                              "width":150,
                              "store":[
                                "opt1",
                                "opt2",
                                "opt3"
                              ],
                              "minChars":2,
                              "valueField":"key",
                              "displayField":"pair",
                              "cls":"combo",
                              "lazyInit":false,
                              "mode":"local",
                              "triggerAction":"all",
                              "loadingText":"Loading ...",
                              "submitValue":true,
                              "name":"combo",
                              "fieldLabel":"Combo",
                              "emptyText":"Select Combo",
                              "autoDestroy":true,
                              "ref":"../../../../../../combo"
                            },
                            {
                              "xtype":"datefield",
                              "width":100,
                              "cls":"date",
                              "submitValue":true,
                              "name":"date",
                              "fieldLabel":"Date",
                              "autoDestroy":true,
                              "ref":"../../../../../../date"
                            },
                            {
                              "xtype":"timefield",
                              "width":100,
                              "cls":"time",
                              "submitValue":true,
                              "name":"time",
                              "fieldLabel":"Time",
                              "autoDestroy":true,
                              "ref":"../../../../../../time"
                            },
                            {
                              "xtype":"fileuploadfield",
                              "width":250,
                              "buttonText":"Browse",
                              "submitValue":true,
                              "name":"upload",
                              "fieldLabel":"Upload",
                              "autoDestroy":true,
                              "ref":"../../../../../../upload"
                            },
                            {
                              "xtype":"compositefield",
                              "submitValue":true,
                              "name":"composite",
                              "fieldLabel":"Composite",
                              "autoDestroy":true,
                              "layout":"form",
                              "labelWidth":85,
                              "ref":"../../../../../../composite",
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
                                  "name":"composit_a",
                                  "fieldLabel":"Composit A",
                                  "autoDestroy":true,
                                  "value":"ReadOnly",
                                  "readOnly":true,
                                  "ref":"../../../../../../../compositA"
                                },
                                {
                                  "xtype":"textfield",
                                  "width":150,
                                  "autoCreate":{
                                    "tag":"input",
                                    "type":"text",
                                    "autocomplete":"off"
                                  },
                                  "submitValue":true,
                                  "name":"composit_b",
                                  "fieldLabel":"Composit B",
                                  "autoDestroy":true,
                                  "disabled":true,
                                  "value":"Disabled",
                                  "ref":"../../../../../../../compositB"
                                },
                                {
                                  "xtype":"button",
                                  "text":"Nothing",
                                  "padding":"0.2em 0.2em",
                                  "style":"{font-weight: bold;}",
                                  "autoDestroy":true,
                                  "ref":"../../../../../../../nothing"
                                }
                              ]
                            },
                            {
                              "xtype":"checkboxgroup",
                              "submitValue":true,
                              "name":"chk_group",
                              "fieldLabel":"Chk Group",
                              "autoDestroy":true,
                              "layout":"form",
                              "labelWidth":10,
                              "width":128,
                              "ref":"../../../../../../chkGroup",
                              "items":[
                                {
                                  "xtype":"checkbox",
                                  "hideLabel":true,
                                  "cls":"checkbox",
                                  "submitValue":true,
                                  "name":"check_a",
                                  "boxLabel":"Check A",
                                  "autoDestroy":true,
                                  "width":79,
                                  "ref":"../../../../../../../checkA"
                                },
                                {
                                  "xtype":"checkbox",
                                  "hideLabel":true,
                                  "cls":"checkbox",
                                  "submitValue":true,
                                  "name":"check_b",
                                  "boxLabel":"Check B",
                                  "autoDestroy":true,
                                  "width":79,
                                  "ref":"../../../../../../../checkB"
                                }
                              ]
                            },
                            {
                              "xtype":"radiogroup",
                              "submitValue":true,
                              "name":"radio",
                              "boxLabel":"Radio",
                              "fieldLabel":"Radio",
                              "autoDestroy":true,
                              "layout":"form",
                              "labelWidth":10,
                              "width":142,
                              "ref":"../../../../../../radio",
                              "items":[
                                {
                                  "xtype":"radio",
                                  "labelWidth":100,
                                  "hideLabel":true,
                                  "submitValue":true,
                                  "name":"radio",
                                  "boxLabel":"Chanel A",
                                  "inputValue":"chanel_a",
                                  "autoDestroy":true,
                                  "width":86,
                                  "ref":"../../../../../../../chanelA"
                                },
                                {
                                  "xtype":"radio",
                                  "labelWidth":100,
                                  "hideLabel":true,
                                  "submitValue":true,
                                  "name":"radio",
                                  "boxLabel":"Chanel B",
                                  "inputValue":"chanel_b",
                                  "autoDestroy":true,
                                  "default":true,
                                  "width":86,
                                  "ref":"../../../../../../../chanelB"
                                }
                              ]
                            },
                            {
                              "xtype":"container",
                              "layout":"auto",
                              "autoWidth":true,
                              "autoDestroy":true,
                              "html":"<hr/>"
                            },
                            {
                              "xtype":"container",
                              "layout":"auto",
                              "autoWidth":true,
                              "autoDestroy":true,
                              "ref":"../../../../../../buttonWrapper",
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
                                      "margins":"0 0",
                                      "items":[
                                        {
                                          "xtype":"button",
                                          "text":"Submit",
                                          "padding":"0.2em 0.2em",
                                          "style":"{font-weight: bold;}",
                                          "autoDestroy":true,
                                          "ref":"../../../../../../../../../submit"
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
                                          "xtype":"button",
                                          "text":"Cancel",
                                          "padding":"0.2em 0.2em",
                                          "style":"{font-weight: bold;}",
                                          "autoDestroy":true,
                                          "ref":"../../../../../../../../../cancel"
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
    Basic_tabUI.superclass.initComponent.call(this);
    var self = this;
    
  }
});
