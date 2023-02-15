class Flock < ActiveRecord::Base
    belongs_to :flockee, class_name: 'User'
    belongs_to :flocker, class_name: 'User'

end