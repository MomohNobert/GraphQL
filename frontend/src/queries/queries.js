import { gql } from 'apollo-boost';

export const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`;

export const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

export const addBook = gql`
    mutation {
        addBook(name: "", genre: "", authorId: "") {
            name
            id
        }
    }
`;