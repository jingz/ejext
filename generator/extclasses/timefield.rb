class	ExtTimefield < ExtNode
  include FormField  

  @@ALIAS_CONFIG = {
    :text => :fieldLabel
  }

	def initialize(config, parent)
    @default_config = {
      width: 100,
      cls: 'time'
    }
		super('timefield',config, parent)
	end
end

