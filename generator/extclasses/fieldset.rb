class ExtFieldset < ExtNode
  include Magic::Title

  @@ALIAS_CONFIG ={
    :text => :title
  }

  def initialize(config, parent)
    @default_config = {
      layout: 'auto',
      animCollapse: true,
      labelAlign: "right",
      # collapsed: true,
      # checkboxToggle: true,
      autoHeight: true
      # columnWidth: 0.5
    }
    super("fieldset", config, parent) 
  end

  def to_extjs(at_deep = 0)
    col_label_width = []
    self.find_field_elements.each do |c|
      next unless c.parent.config[:col_index]
      unless col_label_width[c.parent.config[:col_index]] 
        col_label_width[c.parent.config[:col_index]] = []
      end
      col_label_width[c.parent.config[:col_index]] << c.parent.config[:labelWidth]
    end
    max_label_width = []
    col_label_width.each_with_index do |c, i|
      max_label_width[i] = c.compact.max
    end

    # update max label with in every container of fields
    self.find_field_elements.each do |c|
      next unless c.parent.config[:col_index]
      c.parent.config[:labelWidth] = max_label_width[c.parent.config[:col_index]]
    end
    super(at_deep)
  end
end
