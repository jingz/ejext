# depend on extjs currenct plugin 

class ExtCurrency < ExtNode
  include FormField

  @@ALIAS_CONFIG = {
    :text => :fieldLabel
  }

  def initialize(config, parent)
    @default_config = {
      :width => 150,
      :cls => "number",
      :plugins => [{ ptype: "currency" }, { ptype: "multiple_validations"}],
      :currencyConfig => {}
    }
    super "textfield", config, parent 
  end
end
