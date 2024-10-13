import { Account, Client } from 'react-native-appwrite';

export const config = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.jsm.unify",
    projectId: "670a7709002b0f128f24",
    databaseId: "670b7b640005b8b9f869",
    userCollectionId: "670b7b9100208a0c31ab",
    videoCollectionId: "670b7c10002d18501010",
    storageId: "670b7e0e002db38817b0",
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;


const account = new Account(client);

export const createUser = () => {

    // Register User
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });

}
