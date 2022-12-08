import React, {useContext, useState, useEffect} from 'react';
import {View, TextInput, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLOR} from '../utility/Theme';
import NoteCard from '../components/NoteCard';
import {FlatList} from 'react-native-gesture-handler';
import {fetchNote} from '../services/FirebaseNoteServices';
import {AuthContext} from '../navigation/AuthProvider';

const SearchNotes = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [noteData, setNoteData] = useState([]);
  
  const [value, setValue] = useState();
  const [SearchNote, setSearchNote] = useState([]); //for filtered data

  const getData = async () => {
    const notes = await fetchNote(user.uid);
    setNoteData(notes);
  };
  
  const changeText = text => {
    setValue(text);

      let filteredData = noteData.filter(
        data =>
          (data.title.toLowerCase().includes(text.toLowerCase())) ||
          (data.note.toLowerCase().includes(text.toLowerCase())) || 
          (data.title.toLowerCase().includes(text.toLowerCase())) ||
          (data.note.toLowerCase().includes(text.toLowerCase()))
      );
      setSearchNote(filteredData);
    } 

  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, []);

  return (
    <View style={styles.view}>
      <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={20} color="white" />
      </TouchableOpacity>
      <View style={styles.top}>
        <TextInput
          style={styles.input}
          onChangeText={changeText}
          value={value}
          placeholder="Search Your Notes"
          placeholderTextColor={'white'}
        />

        <View style={styles.view1}>
          {SearchNote ? (
            <FlatList
              data={SearchNote}
              renderItem={({item, index}) => (
                <TouchableOpacity style={styles.notes} key={index}>
                  <NoteCard {...item} />
                </TouchableOpacity>
              )} 
              keyExtractor={item => item.noteId}
              numColumns={2}
              key={item => item.noteId}
            />
          ) : ''}
        </View>
      </View>
    </View>
  );
}

export default SearchNotes;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: COLOR.BACKGROUND_COLOR_DG,
    borderRadius: 1,
    flexDirection: 'row',
    alignContent: 'center',
   // width: '100%',
    height: 30,
  },
  view1: {
   alignContent:'center',
   alignItems:'center',
   justifyContent:'center',
   marginRight:150,
  },
  top: {
    margin: 5,
  },
  notes: {
    alignContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  icon: {
    alignContent: 'center',
    margin: 20,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  input: {
    color: 'white',
  },
});
