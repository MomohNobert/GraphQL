import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

function BookList(props) {
    const displayBooks = () => {
        let data = props.data;
        if(data.loading) {
            return (
                <div>Loading Books...</div>
            )
        } else {
            return data.books.map(book => {
                return (
                    <li key={book.id}>{book.name}</li>
                )
            })
        }
    };

    return (
        <div>
            <ul>
                {displayBooks()}
            </ul>
        </div>
    )
}

export default graphql(getBooksQuery)(BookList);
