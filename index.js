

// Imports
const serviceAccount = require('./serviceAccount.json');
const firebase = require('./node_modules/firebase-admin');
const data  = require('./data/data.json'); // put your data here
const firestorePath = 'my_collection/sub_document/sub_collection'; //name/path of the collection (must be an even number)
const gDatabaseUrl = 'https://<your-project-id>.firebaseio.com';



firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: gDatabaseUrl,
});

const db = firebase.firestore();

function importJSON(jsonData)
{

    jsonData.forEach(item =>{
        db.collection(firestorePath).add(item).then((res) => {
            console.log("Document successfully written!");
        }).catch((error) => {
            console.error("Error writing document: ", error);
        });
    })
}


// Usage
importJSON(data);

