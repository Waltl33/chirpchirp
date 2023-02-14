class User < ActiveRecord::Base
    has_many :posts
    has_many :comments
    has_many :flocked_users, foreign_key: :flocker_id, class_name: 'Flock'
    has_many :flockees, through: :flocked_users
    has_many :flocking_users, foreign_key: :flockee_id, class_name: 'Flock'
    has_many :flockers, through: :flocking_users
end