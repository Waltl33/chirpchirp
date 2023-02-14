class User < ActiveRecord::Base
    has_many :posts
    has_many :comments
    has_many :flocked_users, foreign_key: :flocker_id, class_name: 'Flock'
    has_many :flockees, through: :flocked_users
    has_many :flocking_users, foreign_key: :flockee_id, class_name: 'Flock'
    has_many :flockers, through: :flocking_users

    def delete
        self.destroy
    end

    # add a user to your flocking ie: U1.follow(U2)
    def follow(user_instance)
        self.flockees << user_instance
    end

     # remove a user from flocking ie: U1.unfollow(U2)
    def unfollow(user_instance)
        self.flockees.delete(user_instance.id)
    end

    def following
        self.flockees
    end

    def followers 
        self.flockers
    end
end