import firebase from 'firebase'
import '@firebase/firestore'
import SagaFirebase from 'redux-saga-firebase'

const config = {
  apiKey: 'AIzaSyBwih_FW9KhnN2598Bzv2pW9O3jTKGZfik',
  authDomain: 'value-is-what-u-want.firebaseapp.com',
  databaseURL: 'https://value-is-what-u-want.firebaseio.com',
  projectId: 'value-is-what-u-want',
  storageBucket: 'value-is-what-u-want.appspot.com',
  messagingSenderId: '589817397541'
}

export const app = firebase.initializeApp(config)

export default new SagaFirebase(app)
