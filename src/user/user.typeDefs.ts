import { gql } from 'apollo-server-express';

export const userTypeDefs = gql`
  type Query {
    helloUser: String
  }
`;
