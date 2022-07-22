import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from "firebase-admin/firestore"
import { credential } from './credentials.js'

initializeApp({
    credential: cert(credential)
})

const db = getFirestore()

// const car2 = { make: 'Nissan', model: 'pathfinder', year: 2019, color:'silver'}

// db.collection('cars').add(car2)
//     .then(doc => {
//         console.log('Doc added:', doc.id)
//     })
//     .catch(err => console.log(err))


// db.collection('cars').doc('lambo')
//     .set({ make: 'Lamborghini', model: 'Diablo', year: 2020, color: 'yellow'})


// db.collection('cars').doc('lambo')
//     .update({ model: 'Diablo', color: 'hotpink', year: 1989 })

// get a single document:

db.collection('cars').doc('lambo').get()
    .then(doc => {
        console.log(doc.id)
        console.log(doc.data())
    })
    .catch(console.error)


// Get a whole Collection:

db.collection('cars').get()
    .then(collection => {
        collection.docs.forEach(doc => console.log(doc.id, doc.data()))
    })
    .catch(console.error)

// Query docs from collection:

db.collection('cars')
.where('year', '>=', 2015)
.get()
  .then(collection => {
    const cars = collection.docs.map(doc => {
        let car = doc.data()
        car.id = doc.id
        return car
    })
    console.log(cars)
  })
  .catch(console.error)
