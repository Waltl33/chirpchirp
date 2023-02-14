class UsersController < ApplicationController
    
    get '/users' do
        User.all.to_json
    end

    get '/:userId' do
        user1 = User.find(params[:userId])

        user1.to_json
    end
end