class User < ApplicationRecord
    has_many :favorites
    has_many :locations, through: :favorites
end
