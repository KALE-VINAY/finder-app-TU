import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export const fetchCanteens = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'canteens'));
    const canteens = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    return canteens;
  } catch (error) {
    console.error('Error fetching canteens:', error);
    throw error;
  }
};
