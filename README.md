# firestore-fson-import
NodeJS app to import JSON data in a firestore collection.
It is a smaller wrapper on top of official firebase-admin package.


Install with :

**npm install**


## Add your serviceAccount.json
You will need a **serviceAccount.json** file generated from Firebase/Google console.

In the Firebase console, open **Settings > Users & Permissiosn > Service Accounts**.

 - Create a new service account is you don't have one yet
 
 - **Important:** dont't forget to give a role with enough privilges to your service account (eg: proprietrary, gives full access)

 - Click **Generate New Private Key**, then confirm by clicking **Generate Key**.

 - Securely store the JSON file containing the key in the root folder of the app

More info here : https://firebase.google.com/docs/admin/setup

## Add  your database url
You will need a firestore **database Url**. It can be found on your firebase console.

It is generally:

**https://<_your-firebase-project-id_>.firebaseio.com**

## Add your data
Put your data in JSON format in **/data/data.json**
Your JSON must be an array of JSON object. Each object will be considered as an item.
for example:
```json
[
  {
    "name" : "Doe",
    "surname" : "John"
  },
  {
    "name" : "Spencer",
    "surname" : "Davies"
  }
]
```
