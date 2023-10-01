import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import { useMutation, useQuery } from '@apollo/client'
import { Link } from './Link';
import { styles } from './styles';
import { AddLink } from './AddLink';
import { GET_LINKS, UPDATE_LINK, DELETE_LINK } from './queries';

export const Root = () => {
  const { data, loading } = useQuery(GET_LINKS);
  const [updateLink] = useMutation(UPDATE_LINK);
  const [deleteLink] = useMutation(DELETE_LINK, {
    refetchQueries: [GET_LINKS],
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }
  const { getLinks: links } = data;

  return (
    <View style={styles.container}>
      <Text>Welcome to my Links</Text>
      {links.map((item: any) =>
        <Link
          link={item}
          updateLink={(link) => updateLink({ variables: { link } })}
          deleteLink={(id) => deleteLink({ variables: { id } })}
          key={item.id}
        />
      )}
      <AddLink />
      <StatusBar style="auto" />
    </View>
  );
}

