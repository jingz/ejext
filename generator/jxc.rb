#!/usr/bin/env ruby

$: << File.dirname($0)
require 'generator'

def options_error
  puts "jxc: no input file ..."
end

if __FILE__ == $0

  commands = ARGV
  f = ARGV[0]
  gen_config = {}
  jsclass = commands.grep(/\-\-class/)
  if jsclass.count == 1
    jsclass = jsclass.first.match(/\-\-class=(.*)/)[1]
  else
    jsclass = nil
  end
  noid = commands.grep(/\-\-noid/).count > 0
  if noid 
    gen_config.merge! :noid => true
  end
  # abort()

  if f.nil?
    options_error
    exit(1)
  end
  
  if f == "."
    # "gen all yaml in dir"
    files = Dir.open(".").grep(/yaml$/)
  else
    files = [f] 
  end

  # loop generate by given files
  files.each do |file|
    js_class = file.split("/").last[0..-6] # strip .yaml
    yaml_str = File.open(file,'rb')

    js_class = jsclass unless jsclass.nil?
    js_class = js_class.capitalize

    contents = compile_jext(yaml_str, js_class, gen_config)

    # create js ui file
    File.open("#{js_class}.ui.js","w") do |f|
      f.write(contents[:ui_class_content])
    end
    puts "#{js_class}.ui.js created"

    # gen js event script
    unless File.exist?("#{js_class}.js")
      File.open("#{js_class}.js","w") do |f|
        f.write(contents[:event_class_content])
      end
      puts "#{js_class}.js created"
    end

  end
end
