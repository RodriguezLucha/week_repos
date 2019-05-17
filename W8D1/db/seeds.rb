Plank.delete_all
User.delete_all

Plank.create!(
  description: 'Plank in front of AppAcademy',
  lat: 37.798865,
  lng: -122.401095,
)

Plank.create!(
  description: 'Starbucks Plank.',
  lat: 37.797695,
  lng: -122.400870,
)

Plank.create!(
  description: 'Cigar Bar Plank',
  lat: 37.797050,
  lng: -122.403655,
)

User.create!(
  username: 'test',
  password: 'password'
)
