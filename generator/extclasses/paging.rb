class ExtPaging < ExtNode
  def initialize(config, parent)
    @default_config = {
      start: 0,
      limit: 20,
      displayInfo: true,
      displayMsg: "Displaying {0} - {1} of {2}"
    }
    super('paging', config, parent)
  end
end
