import firestore from '@react-native-firebase/firestore';
const db = firestore().collection('UserData');

export const addLabel = async (
    labelName,
    uid,
    noteData,
  ) => {
    try {
      await db.doc(uid).collection('LabelData').add({
        labelName:labelName,
        noteData: noteData
      });
      
    } catch (error) {
      console.log(error);
    }
  };

  export const fetchLabel = async uid => {
    const info = [];
    try {
      await db
        .doc(uid)
        .collection('LabelData')
        .get()
        .then(data => {
          data.forEach(labelName => {
            console.log('########',labelName);
            const docData = labelName.data();
            docData.labelNameid = labelName.id;
            info.push(docData);
          });
        });
      return info;
    } catch (error) {
      console.log(error);
    }
  };

  export const updateLabel = async (
    labelName,
    uid,
    labelNameid
  ) => {
    try {
      await db
        .doc(uid)
        .collection('LabelData')
        .doc(labelNameid)
        .update({
          labelName:labelName
        })
        .then(() => {
          console.log('Updated');
        });
    } catch (error) {
      console.log(error);
    }
  };

  export const deleteLabel = async (
    uid,
    labelNameid
  ) => {
    try {
      await db
        .doc(uid)
        .collection('LabelData')
        .doc(labelNameid)
        .delete()
        .then(() => {
          console.log('Label Deleted');
        });
    } catch (error) {
      console.log(error);
    }
  };

