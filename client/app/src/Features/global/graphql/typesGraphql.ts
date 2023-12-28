import { gql } from "@apollo/client";

const UserTypeGraphql = gql`

input User {
    name: String!
    email: String!
    password: String!
  }

`

export default { UserTypeGraphql }