class UsersController < ApplicationController
    

    #get all users
    get '/users' do
        User.all.to_json
    end

    #post a new user
    post '/users' do
        user = User.create(name: params[:name], username: params[:username], email: params[:email], password: params[:password], pfpURL: params[:pfpURL], bannerURL: params[:bannerURL])
        user.to_json
    end

    #find by ID
    get '/users/:userId' do
        user1 = User.find(params[:userId])

        user1.to_json
    end

    # update user from database
    patch '/users/:userId' do
        user1 = User.find(params[:userId])
        user1.update_attributes()
        user1.to_json
    end

    #delete user from database
    delete '/users/:userId' do
        user1 = User.find(params[:userId])
        user1.posts.destroy
        user1.comments.destroy
        user1.flock.destroy
        user1.destroy
    end

    #find by username
    get '/:username' do
        user1 = User.find_by_username(params[:username])
        user1.to_json
    end

    # #Find by Email
    # get '/email/:email' do
    #     user1 = User.find_by_email(params[:email])
    #     user1.to_json
    # end
end