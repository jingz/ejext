class ExtDatefield < ExtNode
  include FormField

  @@ALIAS_CONFIG = {
    :text => :fieldLabel
  }

  def initialize(config, parent)
    @default_config = {
        width: 100,
        cls: "date"
    }
    super "datefield", config, parent 
  end
end
