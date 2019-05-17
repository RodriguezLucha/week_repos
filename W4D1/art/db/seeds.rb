# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Artwork.destroy_all
ArtworkShare.destroy_all

user1 = User.create!(username: 'Billy')
user2 = User.create!(username: 'Willy')
user3 = User.create!(username: 'Picasso')

picasso_art1 = Artwork.create!(title: 'A Cactus', image_url:'aws.images.cactus.jpg', artist_id: user3.id)
picasso_art2 = Artwork.create!(title: 'The Weeping Woman', image_url:'aws.images.weepingwoman.jpg', artist_id: user3.id)

share1 = ArtworkShare.create!(artwork_id: picasso_art1.id, viewer_id: user1.id)
share1 = ArtworkShare.create!(artwork_id: picasso_art2.id, viewer_id: user1.id)
