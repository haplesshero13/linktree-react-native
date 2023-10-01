import React, { useState } from 'react';
import { Button, Modal, TextInput, View } from 'react-native';
import { styles } from './styles';
import { useMutation } from '@apollo/client';
import { CREATE_LINK, GET_LINKS } from './queries';

export const AddLink: React.FC = () => {
  const [createLink] = useMutation(CREATE_LINK, { refetchQueries: [GET_LINKS] });

  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState("");
  const [href, setHref] = useState("");

  const handleSave = () => {
    createLink({ variables: { link: { text: text, href: href } } })
    setText("");
    setHref("");
    setModalVisible(false);
  }

  return (
    <>
      <Modal visible={modalVisible}>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="Link Text"
            onChangeText={setText}
            defaultValue={text} />
          <TextInput
            style={styles.input}
            placeholder="URL"
            onChangeText={setHref}
            defaultValue={href} />
        </View>
        <Button title="Save" onPress={handleSave} />
      </Modal>
      <Button title="Add Link" onPress={() => setModalVisible((current) => !current)} />
    </>
  )
}
