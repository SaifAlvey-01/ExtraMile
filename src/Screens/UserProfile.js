/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Alert,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const logoutAlert = () => {
  Alert.alert(
    'Log Out',
    'Are you sure?',
    [
      {
        text: 'Log Out',
        onPress: () => Alert.alert('Logged Out.'),
        style: 'Cancel',
      },
      {
        text: 'Cancel',
        style: 'Cancel',
      },
    ],
    {
      cancelable: true,
    },
  );
};

const deleteAlert = () => {
  Alert.alert(
    'Delete Account',
    'By deleting your account, all information will be deleted.                             Do you wish to proceed?',
    [
      {
        text: 'Delete',
        onPress: () => Alert.alert('Deleted Account.'),
        style: 'Cancel',
      },
      {
        text: 'Cancel',
        style: 'Cancel',
      },
    ],
    {
      cancelable: true,
    },
  );
};
const UserProfile = () => (
  <ScrollView style={{flex: 1, width: '100%', height: '100%'}}>
    <View style={{padding: '10%'}}>
      <View style={{borderRadius: 250}}>
        <Image
          source={{
            uri: 'https://www.pexels.com/photo/man-smiling-behind-wall-220453/',
          }}
          style={{width: 150, height: 150}}
        />
      </View>
      <View style={{alignItems: 'center', marginVertical: 15}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#282931',
            flexDirection: 'row',
            height: '150%',
            width: '45%',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="camera" size={14} color="white" />
          <Text
            style={{
              fontFamily: 'Sans-Serif',
              fontSize: 14,
              fontWeight: 600,
              color: 'white',
              marginLeft: 5,
            }}>
            Edit
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.outer_view}>
        <Text style={styles.outer_text}>Name</Text>
        <View style={styles.text_view}>
          <Text style={styles.inner_text}>Saif Alvey</Text>
        </View>
      </View>
      <View style={styles.outer_view}>
        <Text style={styles.outer_text}>Email</Text>
        <View style={styles.text_view}>
          <Text style={styles.inner_text}>saif.alvey@gmail.com</Text>
        </View>
      </View>
      <View style={styles.outer_view}>
        <Text style={styles.outer_text}>Phone</Text>
        <View style={styles.text_view}>
          <Text style={styles.inner_text}>+923215100097</Text>
        </View>
      </View>
      <View style={styles.outer_view}>
        <Text style={styles.outer_text}>Payment Address</Text>
        <View style={styles.text_view}>
          <Text style={styles.inner_text}>
            H. no 21D Adyala Road Rawalpindi.
          </Text>
        </View>
      </View>
      <View style={styles.outer_view}>
        <Text style={styles.outer_text}>Delivery Address</Text>
        <View style={styles.text_view}>
          <Text style={styles.inner_text}>
            H. no 21D Adyala Road Rawalpindi.
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: '15%',
          paddingHorizontal: '10%',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity style={styles.button_view} onPress={deleteAlert}>
          <Text style={styles.view_text1}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_view} onPress={logoutAlert}>
          <Text style={styles.view_text2}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  outer_text: {
    fontFamily: 'Sans-Serif',
    fontWeight: 600,
    fontSize: 15,
    marginLeft: 5,
    paddingBottom: '1%',
  },
  inner_text: {
    fontFamily: 'Sans-Serif',
    fontSize: 14,
    color: '#4F4F4F',
    marginLeft: 5,
  },
  text_view: {
    backgroundColor: '#E4EDEC',
    borderRadius: 15,
    height: '75%',
    justifyContent: 'center',
  },
  outer_view: {
    paddingVertical: '5%',
  },
  button_view: {
    backgroundColor: '#E4EDEC',
    borderRadius: 5,
    height: '135%',
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view_text1: {
    fontFamily: 'Sans-Serif',
    fontSize: 16,
    color: '#F30E0E',
    fontWeight: 600,
  },
  view_text2: {
    fontFamily: 'Sans-Serif',
    fontSize: 16,
    color: 'black',
    fontWeight: 600,
  },
});

export default UserProfile;
