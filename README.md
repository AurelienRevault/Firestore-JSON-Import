# firestore-fson-import
NodeJS app to import JSON data in a firestore collection

It is a smaller wrapper on top of official firebase-admin package.

You will need a **serviceAccount.json** file generated from Firebase/Google console.
To generate a private key file for your service account:

In the Firebase console, open **Settings > Users & Permissiosn > Service Accounts**.

 - Create a new service account is you don't have one yet
 
 - **Important:** dont't forget to give a role with enough privilges to your service account (eg: proprietrary, gives full access)

 - Click **Generate New Private Key**, then confirm by clicking **Generate Key**.

 - Securely store the JSON file containing the key in the root folder of the app

More info here : https://firebase.google.com/docs/admin/setup

You need a firestore **database Url**. It can be found on your firebase console.
It is generally **https://<_your-firebase-project-id_>.firebaseio.com**
