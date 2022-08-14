import { startFirebase } from './firebase.config';
import { addDoc, collection, enableIndexedDbPersistence, getDocs, getFirestore } from "firebase/firestore";

const _getFirestore = () => {

    const isRunning = startFirebase();
  
    const db = getFirestore();
  
    if (!isRunning)
      if (typeof window !== undefined) enableIndexedDbPersistence(db)
  
    return db;
  }
  
  
  export const Firestore = {
     Create : async (_collection: string, data: any): Promise<any> => {
      const db = _getFirestore();
      try {
        const docRef = await addDoc(collection(db, _collection), data);
  
        return docRef.id;
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    GetAll : async (_collection: string): Promise<any> => {
      const db = _getFirestore();
      const querySnapshot = await getDocs(collection(db, _collection));
        querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    }
  }
  