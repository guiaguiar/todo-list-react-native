import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  eventName: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FFFF',
    padding: 16,
    fontSize: 16,
    marginRight: 12
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 32
  },
  listEmptyText: {
    color: '#808080',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: "400",
  },
  listEmptyTextBold: {
    fontWeight: "700",
    color: '#808080',
    fontSize: 14,
    textAlign: 'center'
  },
  image: {
    alignSelf: 'center',
    marginTop: 32
  },
  formStatus: {
    width: '100%',
    flexDirection: 'row',
    paddingBottom: 20,
    justifyContent: 'space-between'
  },
  statusView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textCreatedItems: {
    color: '#4EA8DE',
    fontWeight: '700',
    fontSize: 14,
    marginRight: 8
  },
  textStatusValue: {
    backgroundColor: '#333333',
    width: 25,
    height: 16,
    textAlign: 'center',
    borderRadius: 12,
    color: '#D9D9D9'
  },
  textFinishedItems: {
    color: '#8284FA',
    fontWeight: '700',
    fontSize: 14,
    marginRight: 8
  },
  formEmpty: {
    borderTopColor: '#333333',
    borderTopWidth: 1,
    paddingTop: 48
  },
  emptyImage: {
    marginBottom: 32,
    alignSelf: 'center'
  }
})