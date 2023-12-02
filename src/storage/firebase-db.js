import {getSession, getUUID} from "./storage";
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {collection, addDoc, query, where, getDocs, updateDoc, doc} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAhZkh8gKvx0jQJkz4R18Bc_Yab2An0Nic",
    authDomain: "hopital-vert.firebaseapp.com",
    projectId: "hopital-vert",
    storageBucket: "hopital-vert.appspot.com",
    messagingSenderId: "936140519898",
    appId: "1:936140519898:web:5b082044f2e20385f228e3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


const RESPONSES = "responses";

export async function saveResponse(questionNumber, reponse, nouveauSoldeFinancier, nouveauSoldeSocial, nouveauScoreEnvironnemental) {
    const uuid = getUUID();
    const session = getSession();
    const findResponsesQuery = query(collection(db, RESPONSES),
        where("uuid", "==", uuid));

    reponse["datetime"] = new Date()
    let responses = await getDocs(findResponsesQuery);
    if (responses.empty) {
        const newResponse = {
            uuid: uuid,
            session: session,
            datetime: new Date(),
            soldeFinancier: nouveauSoldeFinancier,
            soldeSocial: nouveauSoldeSocial,
            scoreEnvironnemental: nouveauScoreEnvironnemental,
            responses: {}
        }
        newResponse["responses"][questionNumber] = reponse
        return await addDoc(collection(db, RESPONSES), newResponse)
    } else {
        let updatedData;
        let updatedId;
        responses.forEach((foundResponse) => {
            updatedData = foundResponse.data();
            updatedId = foundResponse.id;
        })
        updatedData["responses"][questionNumber] = reponse;
        updatedData["soldeFinancier"]=nouveauSoldeFinancier;
        updatedData["soldeSocial"]=nouveauSoldeSocial;
        updatedData["scoreEnvironnemental"]=nouveauScoreEnvironnemental;
        return await updateDoc(doc(db, RESPONSES, updatedId), updatedData)

    }
}


export async function getAllResponses(session) {

    const findResponsesQuery = query(collection(db, RESPONSES),
        where("session", "==", session));;

    let responses = await getDocs(findResponsesQuery);

    return responses;

}