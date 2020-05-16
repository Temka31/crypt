import { gql } from 'apollo-boost';


export const ROBOTS = gql`{
    robots {
    id 
    code
    status
    }
  }
`;

export const GET_COUNTER = gql` 
query GetCounterValue { 
    counter @client   
} `;

export const UPDATE_COUNTER = gql`
  mutation updateCounter($offset: Number!) {
    updateCounter(offset: $offset) @client
  }
`;

export const CounterMutations = {
    updateCounter: (_, variables, { cache }) => {
        //query existing data
        const data = cache.readQuery({ query: GET_COUNTER });
        //Calculate new counter value
        const newCounterValue = data.counter + variables.offset;
        cache.writeData({
            data: { counter: newCounterValue }
        });
        return null; //best practice
    }
};
