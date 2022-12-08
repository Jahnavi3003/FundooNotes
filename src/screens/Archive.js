import React, {useContext, useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ArchiveTopBar from '../components/ArchiveTopBar';
import NoteCard from '../components/NoteCard';
import {AuthContext} from '../navigation/AuthProvider';
import {fetchNote} from '../services/FirebaseNoteServices';
import {FlatList} from 'react-native-gesture-handler';
import {COLOR} from '../utility/Theme';
import { useSelector } from 'react-redux';

const Archive = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [noteData, setNoteData] = useState([]);

  const layout= useSelector((state) => state.layout);

  const getData = async () => {
    const notes = await fetchNote(user.uid);
    let archivedData = [];
    notes.forEach(data => {
      if (data.archiveData) {
        archivedData.push(data);
      }
    });

    setNoteData(archivedData);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.view}>
      <ArchiveTopBar
        menuPress={() => {
          navigation.openDrawer();
        }}
      />
      <View style={{flex: 6}}>
        <FlatList
          data={noteData}
          renderItem={({item, index}) => (
            <TouchableOpacity style={layout ? styles.grid : styles.list}>
              <NoteCard {...item} layout={layout} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.noteId}
          numColumns={layout ? 2 : 1}
          key={layout ? 2 : 1}
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
  view1: {
    flex: 8,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    width: '50%',
  },
  list: {
    width: '100%',
  },
});
export default Archive;
