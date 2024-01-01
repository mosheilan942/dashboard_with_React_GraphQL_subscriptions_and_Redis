import { gql } from "@apollo/client";
import UserTypeGraphql from "./typesGraphql";
import { userMoutations } from "../../users/services/userGraphqlApiService";


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
${userMoutations}
`

const SUBSCRIPTION = gql`
subscription CPU {
cpu {
    percentage
}
}
`;



export { QUERY, MUTATION, SUBSCRIPTION, GETUSER }
