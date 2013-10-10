class ExtCheckboxgroup < ExtNode
  include FormField
  @@ALIAS_CONFIG = {
    :text => :fieldLabel
  }
  
  def initialize(config, parent)
    @default_config ={
    }
    super "checkboxgroup", config, parent 
  end
end
