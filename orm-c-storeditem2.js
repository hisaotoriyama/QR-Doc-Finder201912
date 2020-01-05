let db = require('./models/index')
db.storeditem.create({
  document: 1,
  storageplace: 2,
  originaluser: 1,
  latestuser: 2
})
db.storeditem.create({
  document: 2,
  storageplace: 3,
  originaluser: 2,
  latestuser: 3
})
db.storeditem.create({
  document: 4,
  storageplace: 1,
  originaluser: 4,
  latestuser: 1
})
db.storeditem.create({
  document: 2,
  storageplace: 1,
  originaluser: 2,
  latestuser: 1
})
db.storeditem.create({
  document: 1,
  storageplace: 3,
  originaluser: 1,
  latestuser: 3
})
db.storeditem.create({
  document: 4,
  storageplace: 1,
  originaluser: 1,
  latestuser: 4
})