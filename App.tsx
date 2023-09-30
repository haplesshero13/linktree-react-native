import React, { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

interface LinkProps {
  text: string
  href: string
}

const Link = (props: LinkProps) => (
  <Text href={props.href} role="link" style={[styles.linkButton]}>{props.text}</Text>
)


const initialLinks: LinkProps[] = [
  { href: "https://google.com", text: "Google!" }
]

export default function App() {
  const [links, setLinks] = useState(initialLinks);
  const [isEdit, setIsEdit] = useState(false);
  let newLinks = [...links];

  const EditLink = (link: LinkProps, index: number) => {
    return (
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Link Text"
          onChangeText={newText => newLinks[index].text = newText}
          defaultValue={newLinks[index].text}
        />
        <TextInput
          style={styles.input}
          placeholder="URL"
          onChangeText={newText => newLinks[index].href = newText}
          defaultValue={newLinks[index].href}
        />
      </View>
    )
  }

  const AddLink = () => {
    const [newLink, setNewLink] = useState({ href: "", text: "" })

    return (
      <>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="Link Text"
            onChangeText={newText => setNewLink((link) => ({ ...link, text: newText }))}
            defaultValue={newLink.text}
          />
          <TextInput
            style={styles.input}
            placeholder="URL"
            onChangeText={newHref => setNewLink((link) => ({ ...link, href: newHref }))}
            defaultValue={newLink.href}
          />
          <Button title="Add" onPress={() => {
            newLinks.push(newLink)
            setNewLink({ href: "", text: "" })
          }} />
        </View>
      </>
    )
  }

  return (
    <View style={styles.container}>
      <Text>Welcome to my LinkFree</Text>
      {!isEdit && <>
        {links.map(Link)}
        <Button title="Edit" onPress={() => {
          setIsEdit(true);
        }} />
      </>}
      {isEdit && <>
        {newLinks.map(EditLink)}
        <AddLink />
        <Button title="Done" onPress={() => {
          setIsEdit(false)
          setLinks(newLinks)
        }} />
      </>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
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
    alignItems: "center",
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
