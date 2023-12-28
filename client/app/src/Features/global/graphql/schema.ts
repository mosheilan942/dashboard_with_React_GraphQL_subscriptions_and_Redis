import { gql } from "@apollo/client";
import UserTypeGraphql from "./typesGraphql";


const QUERY = gql`
query CPU {
    cpu {
    percentage
    }
}
`;

const GETUSER = gql`
query getUser {
    getUser {
        getUserr
    }
}
`;


const MUTATION = gql`

 mutation SetUser($input: setUserr) {
  setUser(input: $input) {
    firstName
    lastName
    email
    password
  }
}
`

const SUBSCRIPTION = gql`
subscription CPU {
cpu {
    percentage
}
}
`;



export { QUERY, MUTATION, SUBSCRIPTION, GETUSER }
