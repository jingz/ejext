class ExtWindow < ExtNode
  include Magic::Title

  def initialize(config, parent)
    @default_config = {
      y: 10,
      height: "auto",
      width: 400,
      layout: "fit",
      title: "My Window",
      maximizable: true,
      modal: true
    }
    super "window", config, parent
  end
  
  def to_extjs(at_deep = 0)
    if @childs.last.xtype == "toolbar"
      @config.merge! :fbar => @childs.last.to_extjs(at_deep + 1)
      @childs.pop
    end

    if @childs.first.xtype == "toolbar"
      @config.merge! :tbar => @childs.first.to_extjs(at_deep + 1)
      @childs.slice!(0)
    end
    # if find("paging",{:recursive => 1})
    #   @config.merge! :bbar => find("paging").to_extjs(at_deep + 1)
    #   self.remove_childs "paging"
    # end

    super at_deep
  end
end