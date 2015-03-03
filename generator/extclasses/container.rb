class ExtContainer < ExtNode
	def initialize(config, parent)
    @default_config = {
      layout: 'auto',
      # labelWidth: 100,
      # autoHeight: true,
      autoWidth: true
    }

		super("container", config, parent)	
	end

  def to_extjs(at_deep = 0)
    if config[:layout] == 'form'
      if config[:labelWidth].nil?
        config.delete :labelWidth 
      end
    end
    
    super(at_deep)
  end
end
