class ExtButton < ExtNode
  include Magic::Text
  include Magic::IconClass
  def initialize(config, parent)
    @default_config = {
      text: "Ext Button",
      padding: "0.2em 0.2em",
      style: "{font-weight: bold;}"
    }
    super("button", config, parent) 
  end
end

