import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen')

export default StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%'
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 80,
    height: height / 1.05
  },
  centralHeaderItem: {
    flex: 0.7,
    textAlign: 'center'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  submitContainer: {
    width: '100%',
    marginTop: 30,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    height: height / 10
  },
  input: {
    width: width / 1.15,
    borderBottomWidth: 2,
    padding: 10,
    marginVertical: 20
  },
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: height / 20
  },
  socialBtn: {
    padding: 20,
    width: width / 1.2,
    borderRadius: 40,
    marginVertical: 10
  },
  facebookBtn: {
    backgroundColor: '#1774EB'
  },
  twitterBtn: {
    backgroundColor: '#4FC5F8'
  }
})
