class ExtCheckbox < ExtNode
  include FormField

  @@ALIAS_CONFIG = {
    :text => :boxLabel,
    :ltext => :fieldLabel,
    :rtext => :boxLabel,
    :default => :checked
  }

  def initialize(config, parent)
    @default_config = {
      :hideLabel => true,
      :cls => "checkbox"
    }
    super "checkbox", config, parent 
  end
end
