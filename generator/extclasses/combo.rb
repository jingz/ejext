class ExtCombo < ExtNode
  include FormField
  include Magic::Store
  include Magic::EmptyText

  # TODO
  @@XTYPE = "combo"

  @@ALIAS_CONFIG = {
    :text => :fieldLabel,
    :display => :displayField,
    :value => :valueField,
    :min => :minChars,
    :default => :value
  }

  # TODO
  @@DEFAULT_CONFIG = {
  
  }

  def initialize(config, parent)
    # TODO dummy store
    @default_config = {
      width: 150,
      store: [],
      minChars: 2,
      valueField: "key",
      displayField: "pair",
      cls: "combo",
      lazyInit: false,
      mode: "local",
      # editable: false,
      triggerAction: "all",
      loadingText: "Loading ..."
    }
    super "combo", config, parent 
  end
end
