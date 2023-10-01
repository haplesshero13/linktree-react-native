import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import { gql, useMutation, useQuery } from '@apollo/client'
import { Link } from './Link';
import { styles } from './styles';


const LINKS_QUERY = gql`
  query GetLinks {
    getLinks {
      id
      href
      text
    }
  }
`

const UPDATE_LINK = gql`
  mutation UpdateLink($link: UpdateLinkInput!) {
    updateLink(link: $link) {
      id
      href
      text
    }
  }
`;

const CREATE_LINK = gql`
  mutation CreateLink($link: CreateLinkInput!) {
    createLink(link: $link) {
      id
      href
      text
    }
  }`;

const DELETE_LINK = gql`
  mutation DeleteLink($id: Int!) {
    deleteLink(id: $id)
  }
`;

export const Root = () => {
  const { data, loading } = useQuery(LINKS_QUERY);
  const [updateLink] = useMutation(UPDATE_LINK);
  const [deleteLink] = useMutation(DELETE_LINK, {
    refetchQueries: [LINKS_QUERY],
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }
  const { getLinks: links } = data;

  return (
    <View style={styles.container}>
      <Text>Welcome to my LinkFree</Text>
      <FlatList
        data={links}
        renderItem={({ item }) =>
          <Link
            link={item}
            updateLink={(link) => updateLink({ variables: { link } })}
            deleteLink={(id) => deleteLink({ variables: { id } })}
          />
        }
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

