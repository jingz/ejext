class ExtEditorgrid < ExtNode
  include Magic::Store
  include Magic::Title

  @@ALIAS_CONFIG = {
    :text => :title
  }

	def initialize(config, parent)
    @default_config = {
      title: 'My Grid',
      sm: "",
      frame: true,
      width: "auto",
      height: 200,
      clicksToEdit: 2,
      # enableHdMenu: false,
      enableColumnMove: false,
      columnLines: true,
      # TODO dummy store
      store: [],
      # style: "{ height: 100%; }",
      viewConfig: {
        forceFit: true 
      },
      columns: [
        {
          xtype: 'gridcolumn',
          dataIndex: 'string',
          header: 'String',
          sortable: true,
          width: 100,
          editor: {
            xtype: 'textfield'
          }
        },
        {
          xtype: 'numbercolumn',
          align: 'right',
          dataIndex: 'number',
          header: 'Number',
          sortable: true,
          width: 100,
          editor: {
            xtype: 'numberfield'
          }
        },
        {
          xtype: 'datecolumn',
          dataIndex: 'date',
          header: 'Date',
          sortable: true,
          width: 100,
          editor: {
            xtype: 'datefield'
          }
        },
        {
          xtype: 'booleancolumn',
          dataIndex: 'bool',
          header: 'Boolean',
          sortable: true,
          width: 100,
          editor: {
          xtype: 'checkbox',
            boxLabel: 'BoxLabel'
          }
        }
      ]
    }

		super("editorgrid", config, parent)	
	end

  def to_extjs(at_deep = 0)
    # grid use child to another purpose, paging and toolbar columns
    
    # columns
    cols = []
    self.childs.each do |c|
      cols << c.to_extjs(at_deep) unless c.xtype.match(/column$/).nil?
    end
    @config.merge! :columns => cols unless cols.nil?
    
    toolbar = self.find("toolbar")
    @config.merge! :tbar => toolbar.to_extjs(at_deep + 1) if toolbar

    paging = self.find("paging")
    if paging
      paging.override_config :store => @config[:store]
      @config.merge! :bbar => paging.to_extjs(at_deep + 1)
    end
    
    # rowselection type : row | rows, cell | cells, checkbox | checkboxs
    unless @config[:selector].nil?
      # generate random js variable name
      require "securerandom"
      var = SecureRandom.urlsafe_base64.gsub(/\d|\W/,'')
      case @config[:selector]
      when "row"
        @config.merge! :sm => "<js>(this._#{var} = new Ext.grid.RowSelectionModel({ singleSelect: true }))</js>)"
      when "rows"
        @config.merge! :sm => "<js>(this._#{var} = new Ext.grid.RowSelectionModel({ singleSelect: false }))</js>)"
      # TODO
      # when "cell"
      #   @config.merge! :sm => "<js>(this._#{var} = new Ext.grid.CellSelectionModel())</js>)" 
      when "checkbox"
        @config.merge! :sm => "<js>(this._#{var} = new Ext.grid.CheckboxSelectionModel({ singleSelect: true, header: '' }))</js>)"
        @config[:columns].unshift("<js>this._#{var}</js>")
      when "checkboxs", "checkboxes"
        @config.merge! :sm => "<js>(this._#{var} = new Ext.grid.CheckboxSelectionModel())</js>)"
        @config[:columns].unshift("<js>this._#{var}</js>")
      end
      @config.delete :selector 
    end

    # grid not allow to have items
    self.childs = []

    super(at_deep)
  end
end
