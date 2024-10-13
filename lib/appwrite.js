import { Account, Client, ID, Avatars, Databases } from 'react-native-appwrite';

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
const avatars = new Avatars(client)
const databases = new Databases(client)

export const createUser =  async (email, password, username) => {
    


    try{
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username

        )
        if(!newAccount) throw  Error;

        const avatarUrl = avatars.getInitials(username)

        await signIn(email, password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        );

        return newUser;
 
    } catch(error) {
        console.log(error)
        throw new Error(error);
    }

}

export async function signIn(email, password) {
    try {
        const session = await account.createEmailPasswordSession(email, password)
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}
