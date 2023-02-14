require 'bundler/setup'
ENV['RACK_ENV'] ||= "development"
Bundler.require(:default, ENV['RACK_ENV'])

ActiveRecord::Base.establish_connection(
  :adapter => "sqlite3",
  :database => "db/#{ENV['RACK_ENV']}.sqlite"
)

require './app/controllers/application_controller'
require_all 'app'
