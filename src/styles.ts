import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
  },
  row: {
    flexDirection: "row",
    height: 40,
    width: 480,
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  linkButton: {
    borderRadius: 8,
    borderWidth: 2,
    padding: 8,
  }
});
