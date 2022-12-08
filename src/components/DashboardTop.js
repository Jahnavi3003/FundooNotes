import React from 'react';
import {
  View,
  Image,
  Text,
  Modal,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon1 from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../navigation/AuthProvider';

class DashboardTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modalVisible: false};
  }

  render() {
    const {menuPress} = this.props;
    console.log('props are', this.props);
    return (
      <View style={styles.view}>
        <TouchableOpacity onPress={menuPress}>
          <Icon name="menu" style={styles.icon} size={20} color="white" />
        </TouchableOpacity>
        <View style={styles.input}>
          <TextInput
            // onChangeText={Search}
            placeholder="Search Your Notes"
            placeholderTextColor={'white'}
          />
        </View>
        <TouchableOpacity>
          <Icon1
            name="grid-outline"
            style={styles.icon}
            size={20}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.setState({modalVisible: true});
          }}>
          <View
            style={{
              borderRadius: 20,
              backgroundColor: '#302f2c',
              paddingLeft: 3,
              margin: 5,
              borderColor: '#4e504e',
              borderWidth: 2,
              height: 35,
              width: 35,
            }}>
            {user.photoURL ? (
              <Image
                style={{
                  height: 30,
                  borderRadius: 20,
                  width: 30,
                  marginRight: 20,
                }}
                source={{uri: user.photoURL}}
              />
            ) : (
              <Text
                style={{
                  color: 'white',
                  marginLeft: 10,
                  marginTop: 2,
                  fontSize: 15,
                }}>
                {' '}
                S{/* {user.displayName.charAt(0)} */}
              </Text>
            )}
          </View>
        </TouchableOpacity>

        <Modal
          transparent={true}
          animationType="slide"
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState(!this.state.modalVisible);
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              padding: 60,
              marginBottom: 350,
            }}>
            <View
              style={{
                backgroundColor: 'dimgray',
                flex: 0.75,
                padding: 40,
                borderRadius: 10,
                flex: 1,
              }}>
              <Image
                style={{
                  height: 30,
                  borderRadius: 20,
                  width: 30,
                  marginRight: 20,
                }}
                source={{uri: user.photoURL}}
              />
              <Text style={{marginTop: 5, fontSize: 14, color: 'white'}}>
                {' '}
                {user.email}{' '}
              </Text>
              <Pressable
                style={{backgroundColor: 'black', margin: 30, borderRadius: 10}}
                onPress={() => logout()}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  Logout
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const WrapperDashboardTop = props => {
  console.log('Hi');

  return (
    <AuthContext.Consumer>
      {authProps => <DashboardTop {...authProps} {...props} />}
    </AuthContext.Consumer>
  );
};

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 20,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#4e504e',
    borderRadius: 20,
  },
  icon: {
    margin: 5,
    padding: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  input: {
    margin: 5,
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginTop: 5,
    backgroundColor: '#4e504e',
    borderRadius: 5,
    height: 35,
    width: 180,
  },
});

export default WrapperDashboardTop;
