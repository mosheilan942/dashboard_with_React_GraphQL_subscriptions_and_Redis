import { gql } from "apollo-server";

const schema = gql`
  input setUserr {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
  type getUserr {
    firstName: String
    lastName: String
    email: String
    password: String
  }
  type CPU {
    percentage: Float!
  }
  type Distribution {
    region: String!
    percentage: Float!
  }
  type Message {
    title: String!
    description: String!
    color: String!
  }
  type Query {
    cpu: CPU
    getUser (user: setUserr!): getUserr
    distribution: [Distribution]
    messages: [Message]
  }
  type Mutation {
    cpu: CPU
    setUser(input:setUserr):getUserr
    distribution: [Distribution]
    messages: [Message]
  }
  type Subscription {
    cpu: CPU
    distribution: [Distribution]
    messages: [Message]
  }
`;

export default schema