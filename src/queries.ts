import { gql } from '@apollo/client';

export const CREATE_LINK = gql`
  mutation CreateLink($link: CreateLinkInput!) {
    createLink(link: $link) {
      id
      href
      text
    }
  }`;
  
export const GET_LINKS = gql`
  query GetLinks {
    getLinks {
      id
      href
      text
    }
  }
`;
export const UPDATE_LINK = gql`
  mutation UpdateLink($link: UpdateLinkInput!) {
    updateLink(link: $link) {
      id
      href
      text
    }
  }
`;
export const DELETE_LINK = gql`
  mutation DeleteLink($id: Int!) {
    deleteLink(id: $id)
  }
`;

