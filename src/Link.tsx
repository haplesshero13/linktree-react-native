import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { styles } from './styles';

interface Link {
  id: number;
  text: string;
  href: string;
}

export interface LinkProps {
  link: Link
  updateLink: (link: Link) => any
  deleteLink: (id: number) => any
}

export const Link = ({ link, updateLink, deleteLink }: LinkProps) => {
  const [isEdit, setIsEdit] = useState(false);

  const EditLink = () => {
    const [linkText, setLinkText] = useState(link.text);
    const [hrefText, setHrefText] = useState(link.href);

    return (
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Link Text"
          onChangeText={setLinkText}
          defaultValue={linkText} />
        <TextInput
          style={styles.input}
          placeholder="URL"
          onChangeText={setHrefText}
          defaultValue={hrefText} />
        <Button title="Save" onPress={(() => {
          setIsEdit(false);
          updateLink({ id: link.id, text: linkText, href: hrefText });
        })} />
        <Button title="Cancel" onPress={() => { setIsEdit(false) }} />
      </View>
    );
  };

  if (isEdit) return (
    <EditLink />
  )

  return (
    <View style={[styles.row]}>
      <Text href={link.href} role="link" style={[styles.linkButton]}>{link.text}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Button title="Edit" onPress={() => {
          setIsEdit(true);
        }} />
        <Button title="Delete" onPress={() => {
          deleteLink(link.id);
        }} />
      </View>
    </View>
  )
}
