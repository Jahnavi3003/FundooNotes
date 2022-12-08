import React, {useContext, useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';
import NoteCard from '../components/NoteCard';
import {AuthContext} from '../navigation/AuthProvider';
import {fetchNote} from '../services/FirebaseNoteServices';
import {FlatList} from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';



const Home = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [noteData, setNoteData] = useState([]);
  const [pinnedNotes, setPinnedNotes] = useState([]);
  const layout= useSelector((state)=>state.layout)  

  const getData = async () => {
    const notes = await fetchNote(user.uid);
    let pinnData = [];
    let otherData = [];
    notes.forEach(data => {
      if (!data.archiveData && !data.deleteData && !data.pinData) {
        otherData.push(data);
      }
      if (!data.archiveData && !data.deleteData && data.pinData) {
        pinnData.push(data);
      }
    });

    setPinnedNotes(pinnData);
    setNoteData(otherData);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });
    return unsubscribe;
  }, []);


  const sections = [
    {title: 'PINNED', data: [{list: pinnedNotes}]},
    {title: 'OTHERS', data: [{list: noteData}]},
  ];

  const renderSection = ({item,index}) => {

    return (
      
      <FlatList
        scrollEnabled={false}
        data={item.list}
        renderItem={({item, index}) => (
          <TouchableOpacity key={index}
            style={layout ? styles.grid : styles.list}
            onPress={() => navigation.navigate('AddNewNote', {...item})}>
            <NoteCard {...item} layout={layout} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.noteId}
        numColumns={layout ? 2 : 1}
        key={layout ? 2 : 1}
      />
    
    );
  };

  const renderSectionHeader = ({section}) => {
    if (pinnedNotes?.length) {
      return (
        <Text style={{color: 'white', marginLeft: 10}}>{section.title}</Text>
      );
    }
  };

  return (
    <View style={styles.view}>
      <View style={{marginBottom: 15}}>
        
        <TopBar
          menuPress={() => {
            navigation.openDrawer();
          }}
          navigation={navigation}
        />
       
      </View>

      <SectionList
        style={{flex: 1}}
        sections={sections}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderSection}
      />

      {/* <ScrollView
        contentContainerStyle={{
          justifyContent: 'space-between',
          margin: 15,
          padding: 10,
        }}>
        <FlatList
          nestedScrollEnabled={true}
          data={pinnedNotes}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('AddNewNote', {...item})}>
              <NoteCard {...item} layout={layout} />
            </TouchableOpacity>
          )}
          ListHeaderComponent={<Text style={{color: 'white'}}>PINNED</Text>}
          keyExtractor={item => item.noteId}
          numColumns={layout ? 2 : 1}
          contentContainerStyle={layout ? styles.grid : ''}
          key={layout ? 2 : 1}
        />

        <FlatList
          nestedScrollEnabled={true}
          data={noteData}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('AddNewNote', {...item})}>
              <NoteCard {...item} layout={layout} />
            </TouchableOpacity>
          )}
          ListHeaderComponent={<Text style={{color: 'white'}}>OTHERS</Text>}
          keyExtractor={item => item.noteid}
          numColumns={layout ? 2 : 1}
          contentContainerStyle={layout ? styles.grid : ''}
          key={layout ? 3 : 4}
        />
        <Text> </Text>
      </ScrollView> */}

      <View style={{justifyContent: 'flex-end'}}>
        <BottomBar navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#302f2c',
  },
  grid: {
    width: '50%',
  },
  list: {
    width: '100%',
  },
});
export default Home;

{
  /* <View>
         {noteData.map(item => (
           <View key={item.noteid}>
             <TouchableOpacity onPress={() => navigation.navigate('AddNewNote')}>
               <NoteCard {...item} />
             </TouchableOpacity>
           </View>
         ))}
       </View> */
}
