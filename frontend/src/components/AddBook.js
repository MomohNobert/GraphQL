import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';


const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        }
    }
`;

function AddBook(props) {
    const displayAuthors = () => {
        let data = props.data;
        if(data.loading) {
            return (
                <option>Loading Authors...</option>
            )
        } else {
            return data.authors.map(book => {
                return (
                    <option key={book.id}>{book.name}</option>
                )
            })
        }
    };

    return (
        <form>
            <div className="field">
                <label>Book name:</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Author:</label>
                <select>
                    <option>...</option>
                    {displayAuthors()}
                </select>
            </div>

            <button>+</button>
        </form>
    )
}

export default graphql(getAuthorsQuery)(AddBook);
