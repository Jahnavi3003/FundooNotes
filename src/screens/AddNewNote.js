import React, {useContext, useEffect,useState} from 'react';
import {SafeAreaView, View, Text, TextInput, StyleSheet} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import {addNote, deleteNote} from '../services/FirebaseNoteServices';
import {updateNote} from '../services/FirebaseNoteServices';
import NotesBottomBar from '../components/NotesBottomBar';
import NotesTopBar from '../components/NotesTopBar';
import {Chip} from 'react-native-paper';
import { fetchLabel } from '../services/FirebaseLabelServices';


const AddNewNote = ({navigation, route}) => {
  const noteData = route.params?.noteData;
  
  const [pinData, setPinData] = useState(noteData?.pinData || false);
  const [archiveData, setArchiveData] = useState(
    noteData?.archiveData || false,
  );
  const [deleteData, setDeleteData] = useState(noteData?.deleteData || false);
  const [title, setTitle] = useState(noteData?.title || '');
  const [note, setNote] = useState(noteData?.note || '');

  const labelData= (route.params?.labelData|| []);

   console.log('$$$$$$$$',noteData);
  const {user} = useContext(AuthContext);
  const onBackPress = async () => {
    let userId = user.uid;
    if (noteData?.noteid) {
      await updateNote(
        title,
        note,
        userId,
        noteData.noteid,
        pinData,
        archiveData,
        deleteData,
        labelData,
      );
    } else {
      await addNote(title, note, userId, pinData, archiveData, deleteData, labelData);
    }
    
    navigation.goBack();
  };
 
  const onPinHandle = () => {
    setPinData(!pinData);
  };

  const onPress = () => {
    pinData
      ? console.log('Note Unpinned and Archived')
      : console.log('Note Archived!');
  };
  const onDeleteHandle = async () => {
    let userId = user.uid;
    await updateNote(
      title,
      note,
      userId,
      noteData.noteid,
      pinData,
      archiveData,
      deleteData,
    );
  };

  const getData = async () => {
    let userId = user.uid;

  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={styles.view}>
      <View>
        <NotesTopBar
          onBackPress={onBackPress}
          pinData={pinData}
          archiveData={archiveData}
          deleteData={deleteData}
          onPinHandle={onPinHandle}
          setArchiveData={setArchiveData}
          onPress={onPress}
        />
      </View>
      <View style={{flex: 1}}>
        <View style={styles.input}>
          <TextInput
            style={styles.input1}
            placeholder="Title"
            placeholderTextColor={'grey'}
            onChangeText={newTitle => setTitle(newTitle)}
            defaultValue={title}
          />
          <TextInput
            style={styles.input2}
            placeholder="Note"
            placeholderTextColor={'grey'}
            onChangeText={newNote => setNote(newNote)}
            multiline={true}
            defaultValue={note}
          />  

        <View style={{flexDirection:'row'}}>
        {labelData.map(label=> <Chip style={styles.chip} key={label.labelNameid}>{label.labelName}</Chip>)}
        </View>
        </View>  
        </View>
      <SafeAreaView>
        <NotesBottomBar noteData={noteData} deleteData={deleteData} setDeleteData={setDeleteData} navigation={navigation} />
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#302f2c',
  },
  input: {
    fontSize: 50,
    fontFamily: 'bold',
    marginTop: 20,
  },
  input1: {
    fontSize: 25,
    marginLeft: 8,
    color: 'white',
  },
  input2: {
    fontSize: 18,
    color: 'white',
    marginLeft: 8,
  },
  chip: {
    backgroundColor:'grey',
    marginTop:50,
    marginLeft:20,
    width:90,
  }
});
export default AddNewNote;
