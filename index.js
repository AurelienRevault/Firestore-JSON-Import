

// Imports
const firebaseConfig = require('./config.js');
const serviceAccount = require('./serviceAccount.json');
const firebase = require('./node_modules/firebase-admin');
const data  = require('./data/my_data_here.json'); // put your data here
const collectionKey = "my_collection/sub_collection/"; //name/path of the collection
const db = firebase.firestore();


firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: firebaseConfig.databaseURL,
});


function importJSON(jsonData)
{

    jsonData.forEach(item =>{
        db.collection(collectionKey).add(item).then((res) => {
            console.log("Document successfully written!");
        }).catch((error) => {
            console.error("Error writing document: ", error);
        });
    })
}


// Usage
importJSON(data);


// query a specific plant
/*async function QueryPlant(plantName){


    const snapshot  = await db.collection(collectionKey).where('scientificName', '==', plantName).get();
    if (snapshot.empty) {
        console.log('No matching documents.');
        return;
    }  
    
    snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        console.log(doc.data().scientificName);
    });
}

QueryPlant('Abutilon theophrastii');
*/

