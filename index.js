import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from "firebase-admin/firestore"
import { credential } from './credentials.js'

initializeApp({
    credential: cert(credential)
})

const db = getFirestore()

const car2 = { make: 'Nissan', model: 'pathfinder', year: 2019, color:'silver'}

db.collection('cars').add(car2)
    .then(doc => {
        console.log('Doc added:', doc.id)
    })
    .catch(err => console.log(err))
