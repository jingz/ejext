class ExtFieldset < ExtNode
  include Magic::Title

  @@ALIAS_CONFIG ={
    :text => :title
  }

  def initialize(config, parent)
    @default_config = {
      layout: 'auto',
      animCollapse: true,
      labelAlign: "right",
      # collapsed: true,
      # checkboxToggle: true,
      autoHeight: true
      # columnWidth: 0.5
    }
    super("fieldset", config, parent) 
  end
end
