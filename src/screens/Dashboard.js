import React, {useContext, useEffect, useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import BottomBar from '../components/BottomBar';
import TopBar from '../components/TopBar';
import NoteCard from '../components/NoteCard';
import {AuthContext} from '../navigation/AuthProvider';
import {fetchNote} from '../services/FirebaseNoteServices';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {noteData: []};
  }

  render() {
    const {navigation} = this.props;
    //   const {user} = useContext(AuthContext);
    // const [noteData, setNoteData] = useState([]);

    const getData = async () => {
      const notes = await fetchNote(user.uid);
      this.setNoteData({notes});
    };
    console.log('****', this.state.noteData);
    useEffect(() => {
      getData(), [];
    });

    return (
      <View style={{flex: 1, backgroundColor: '#302f2c'}}>
        <TopBar
          menuPress={() => {
            navigation.openDrawer();
          }}
        />
        <View>
          {noteData.map(item => (
            <NoteCard {...item} />
          ))}
        </View>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontSize: 20,
              margin: 30,
              color: 'white',
            }}>
            New
          </Text>
        </View>

        <BottomBar navigation={navigation} />
      </View>
    );
  }
}

const WrapperDashboard = props => {
  console.log('Hi');

  return (
    <AuthContext.Consumer>
      {authProps => <Dashboard {...authProps} {...props} />}
    </AuthContext.Consumer>
  );
};
export default WrapperDashboard;
