class ExtTextarea < ExtNode
  include FormField
  @@ALIAS_CONFIG = {
    :text => :fieldLabel
  }
  def initialize(config, parent)
    @default_config = {
      :width => 150
    }
    super "textarea", config, parent
  end
end
