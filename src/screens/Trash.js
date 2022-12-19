import React, {useEffect, useContext, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import TrashTopBar from '../components/TrashTopBar';
import NoteCard from '../components/NoteCard';
import {AuthContext} from '../navigation/AuthProvider';
import {COLOR} from '../utility/Theme';
import {fetchNote} from '../services/FirebaseNoteServices';
import {FlatList} from 'react-native-gesture-handler';

const Trash = ({menuPress, navigation}) => {
  const {user} = useContext(AuthContext);
  const [noteData, setNoteData] = useState([]);

  const getData = async () => {
    const notes = await fetchNote(user.uid);
    let deletedData = [];
    notes.forEach(data => {
      if (data.deleteData) {
        deletedData.push(data);
      }
    });
    // const notes = await trashNote(user.uid);
    // setNoteData(notes);
    setNoteData(deletedData);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.view}>
      <TrashTopBar
        menuPress={() => {
          navigation.openDrawer();
        }}
      />
      <View style={styles.list}>
        <FlatList
          data={noteData}
          renderItem={({item, index}) => (
            <TouchableOpacity style={{width: '50%'}} onPress={{}}>
              <NoteCard {...item} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.noteId}
          numColumns={2}
          key={item => item.noteId}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND_COLOR_DG,
  },
  list: {
    flex: 8,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Trash;
