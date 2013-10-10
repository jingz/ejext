require "rack"
require "json"
require_relative "generator/generator.rb"

module Rack
  class SimpleServer
    def call(env)
      req_path   = env['REQUEST_PATH']
      req_method = env['REQUEST_METHOD']
      qry_string = env['QUERY_STRING']

      res = Response.new
      content = '<h1>Hello From Server</h1>'
      # route
      if req_path
        if req_path == "/gen" and req_method == "POST"
          req = Request.new(env)
          begin
            h = compile_jext(req['yaml'], "Try")
            content = h.to_json
          rescue Exception => e
            content = { :error => e.message }.to_json
          end
          res['Content-Type'] = 'application/json'
        else
          content = Object::File.read ".#{req_path}"
        end
      end

      res.write content
      res.finish
    end
  end
end

if __FILE__ == $0
  Rack::Server.start( :app => Rack::SimpleServer.new, :Port => 3333 )
end
