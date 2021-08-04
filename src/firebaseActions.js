import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from './config.js';

const firebaseApp = firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

//TODO: seperate these methods into smaller action files based on their concerns
// Email auth stuff 


const asyncGetLieDetails = async () => {
  const { docs } = await db.collection('lieData').get();
  console.log("fb action",...docs.map((lie) => ({
    ...lie.data()
  })))
  return docs.map((lie) => ({
    ...lie.data()
  }));
}
/* 

const addPreference = (newPreference, friend) => {
  //Add pref to Friend
  var friendsRef = db.collection('lieData');
  var friendDocRef = friendsRef.doc(friendDocId);
  friendDocRef.get().then(function (doc) {
      friendsRef.doc(friendDocId).update({  
        [`responses.${newPreference.category}.items`]: firebase.firestore.FieldValue.arrayUnion(newPreference.value)
      });
  }).catch(function (error) {
    console.log('Error getting document:', error);
  });
  //add Prefrence to Preference collection
  const prefDocId = newPreference.value;
  var prefRef = db.collection('preferences');
  var newPrefDocRef = prefRef.doc(prefDocId);
  newPrefDocRef.get().then(function (doc) {
    if (!doc.exists) {
        prefRef.doc(prefDocId).set({
        [`${newPreference.category}.items`]: blankResponses
      });}
  
    prefRef.doc(prefDocId).update({
      [`${newPreference.category}.items`]: firebase.firestore.FieldValue.arrayUnion(friendDocId)
    });
  
    }).catch(function (error) {
      console.log('Error getting document:', error);
    });

};

const deleteFriend = (id) =>{
  db.collection("friends").doc(id).delete()
}

const asyncGetFriends = async () => {
  const { docs } = await db.collection('friends').get();
  return docs.map((friend) => ({
    ...friend.data(),
    id: friend.id,
  }));
}
 */

export {
    firebaseApp,
    db,
    asyncGetLieDetails
};
