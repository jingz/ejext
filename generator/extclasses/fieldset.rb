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
    x = self.find_field_elements.map do |c|
      [c.config[:fieldLabel], c.parent.config[:col_index], c.parent.config[:labelWidth] ]
    end
    self.find_field_elements.each do |c|
      i = c.parent.config[:col_index] || 0
      next unless i
      unless col_label_width[i] 
        col_label_width[i] = []
      end
      col_label_width[i] << c.parent.config[:labelWidth]
    end
    max_label_width = []
    col_label_width.each_with_index do |c, i|
      max_label_width[i] = c.compact.max
    end

    # update max label with in every container of fields
    self.find_field_elements.each do |c|
      i = c.parent.config[:col_index] || 0
      c.parent.config[:labelWidth] = max_label_width[i]
    end

    super(at_deep)
  end
end
