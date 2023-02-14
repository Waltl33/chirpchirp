class Comment < ActiveRecord::Base
    belongs_to :user
    belongs_to :post

    def delete
        self.destroy
    end
end