import firestore from '@react-native-firebase/firestore';
const db = firestore().collection('UserData');

export const addLabel = async (
    labelName,
    uid,
  ) => {
    try {
      await db.doc(uid).collection('LabelData').add({
        labelName:labelName
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
  
            const docData = labelName.data();
            docData.labelNameid = labelName.id;
            info.push(docData);
          });
        });
        console.log('^^^^^^^',info)
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