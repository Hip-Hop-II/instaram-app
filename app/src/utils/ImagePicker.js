import {ImagePicker, Permissions} from 'expo'

export default async (params = {}) => {
  try {
    const {status} = await Permissions.getAsync(Permissions.CAMERA)
    const options = {
      mediaTypes: 'Images',
      allowsEditing: true,
      aspect: [1, 1]
    }
    if (status !== 'granted') {
      return await ImagePicker.launchImageLibraryAsync({...options, ...params})
    } else {
      return {}
    }
  } catch (error) {
    throw error
  }
}
