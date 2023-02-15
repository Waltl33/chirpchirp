class UsersController < ApplicationController
    
    get '/users' do
        User.all.to_json
    end

    post '/users' do |t|
        user = User.create(name: t.name, email: t.email, password: t.password, pfpURL: t.pfpURL, bannerURL: t.bannerURL)
        user.save
        user.to_json
    end

    #find by ID
    get '/users/:userId' do
        user1 = User.find(params[:userId])

        user1.to_json
    end

    #find by username
    get '/usernames/:username' do
        user1 = User.find_by_username(params[:username])
        user1.to_json
    end

    # #Find by Email
    # get '/email/:email' do
    #     user1 = User.find_by_email(params[:email])
    #     user1.to_json
    # end

    
end