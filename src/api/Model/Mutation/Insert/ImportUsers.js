import { gql } from "@apollo/client";

export const IMPORT_USERS = gql`
  mutation ImportUsers($users: [users_insert_input!]!) {
    insert_users(objects: $users) {
      returning {
        username
        roles_id
      }
    }
  }
`;
