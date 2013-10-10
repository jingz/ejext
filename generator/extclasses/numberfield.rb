class ExtNumberfield < ExtNode
  include FormField

  @@ALIAS_CONFIG = {
    :text => :fieldLabel 
  }

  def initialize(config, parent)
    @default_config = {
      width: 150,
      decimalPrecision: 2,
      decimalSeparator: '.',
      allowDecimal: true,
      allowNegative: false,
      cls: "number"
    }
    super "numberfield", config, parent 
  end
end
