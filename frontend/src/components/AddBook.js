import { useState } from 'react';
import { graphql } from 'react-apollo';
import { getAuthorsQuery, addBook } from '../queries/queries';
import {flowRight as compose } from 'lodash';

function AddBook(props) {
    const [ formInput, setFormInput ] =  useState({
        name: "",
        genre: "",
        authorId: ""
    });

    const displayAuthors = () => {
        let data = props.data;
        if(data.loading) {
            return (
                <option>Loading Authors...</option>
            )
        } else {
            return data.authors.map(author => {
                return (
                    <option key={author.id} value={author.id}>{author.name}</option>
                )
            })
        }
    };

    console.log(formInput);

    const submitForm = event => {
        event.preventDefault()
        console.log(formInput)
    };

    return (
        <form onSubmit={submitForm}>
            <div className="field">
                <label>Book name:</label>
                <input 
                    type="text"
                    placeholder={formInput.name}
                    onChange={e => {
                    setFormInput({
                        ...formInput,
                        name: e.target.value
                    })
                }} />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" onChange={e => {
                    setFormInput({
                        ...formInput,
                        genre: e.target.value
                    })
                }} />
            </div>
            <div className="field">
                <label>Author:</label>
                <select
                    onChange={e => {
                        setFormInput({
                            ...formInput,
                            authorId: e.target.value
                        })
                    }}
                >
                    <option>...</option>
                    {displayAuthors()}
                </select>
            </div>

            <button>+</button>
        </form>
    )
};


export default compose(
    graphql(getAuthorsQuery, {name: "getSuthorsQuery"}),
    graphql(addBook, {name: "addBookMutation"})
)(AddBook);
