class ArtworkShare < ApplicationRecord
  validates :artwork_id, uniqueness: { scope: :viewer_id,
    message: "A user cannot have a single Artwork shared with them more than once"
  }

  belongs_to :artwork,
    primary_key: :id,
    foreign_key: :artwork_id,
    class_name: 'Artwork'

    belongs_to :viewer,
    primary_key: :id,
    foreign_key: :viewer_id,
    class_name: 'User'
end
