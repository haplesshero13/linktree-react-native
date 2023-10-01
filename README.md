# Links Frontend

Requires https://github.com/haplesshero13/linktree-gql

## Description

This is the React Native Web frontend for the Links app. It uses Apollo to access the GraphQL backend.

## Installation

```bash
$ yarn install
```

## Running the app

Start the backend according to the README there. Then start the web app with `yarn web`.

## Notes

The UI is very bare-bones but functional. It is optimized for slightly smaller screen sizes so it may look odd in a wide browser window.

In the future this may become a monorepo to simplify development and sharing of the GraphQL file. This would allow us to generate types for the GraphQL queries.
