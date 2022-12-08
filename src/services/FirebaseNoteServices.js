import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../navigation/AuthProvider';

const db = firestore().collection('UserData');

export const addNote = async (
  title,
  note,
  userId,
  pinData,
  archiveData,
  deleteData,
) => {
  try {
    await db.doc(userId).collection('NoteData').add({
      title: title,
      note: note,
      pinData: pinData,
      archiveData: archiveData,
      deleteData: deleteData,
    });
    console.log('Hello');
  } catch (error) {
    console.log(error);
  }
};

export const fetchNote = async userId => {
  const info = [];
  try {
    await db
      .doc(userId)
      .collection('NoteData')
      .get()
      .then(data => {
        data.forEach(note => {

          const docData = note.data();
          docData.noteid = note.id;
          info.push(docData);
        });
      });
    return info;
  } catch (error) {
    console.log(error);
  }
};

export const updateNote = async (
  title,
  note,
  userId,
  noteid,
  pinData,
  archiveData,
  deleteData,
) => {
  try {
    await db
      .doc(userId)
      .collection('NoteData')
      .doc(noteid)
      .update({
        title: title,
        note: note,
        pinData: pinData,
        archiveData: archiveData,
        deleteData: deleteData,
      })
      .then(() => {
        console.log('Updated');
      });
  } catch (error) {
    console.log(error);
  }
};

export const deleteNote = async (userId, noteid) => {
  try {
    await db
      .doc(userId)
      .collection('NoteData')
      .doc(noteid)
      .delete()
      .then(() => {
        console.log('User deleted!');
      });
  } catch (error) {
    console.log(error);
  }
};

// export const trashNote = async userId => {
//   const info = [];
//   try {
//     await db
//       .doc(userId)
//       .collection('NoteData')
//       .where('deleteData', '==', 'true')
//       .get()
//       .then(data => {
//         data.forEach(note => {
//           console.log('++++++', note);

//           const docData = note.data();
//           docData.noteid = note.id;
//           info.push(docData);
//         });
//       });
//     return info;
//   } catch (error) {
//     console.log(error);
//   }
// };
