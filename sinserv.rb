require "sinatra"
require "awesome_print"
require "./generator/generator"

set :public_folder => "."

get "/" do
  redirect to("/try.html")
end

post "/gen" do
  begin
    h = compile_jext(params['yaml'], "Try")
    h.to_json
  rescue Exception => e
    { :error => e.message }.to_json
  end
end

post "/download" do
  content_type "text/plain"
  attachment "try.ui.js"

  h = compile_jext(params['yaml'], "Try")
  ui = h[:ui_class_content]
  t = Tempfile.new("t")
  t.write ui
  t.read
  send_file t.path
end
