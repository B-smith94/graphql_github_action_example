import React from "react";
import { useLazyQuery } from "@apollo/client"; 
import { useState } from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import { GET_CHARACTER_LOCATIONS } from "../queries/Queries";

const SearchComponent: React.FC = () => {
    const [name, setName] = useState<string>('');
    // will only query when we choose, ie: when a button is clicked or Enter key is pushed
    const [getLocations, { data, loading, error }] = useLazyQuery( // runs below code when we pass in a name
        GET_CHARACTER_LOCATIONS,
        {
            variables: { name },
        }
    );

    const search = () => {
        getLocations();
    }

    return (
        <Container>
            <br />
            <Row>
                <Col>
                    <input
                     type="text"
                     value={name}
                     placeholder="Search..."
                     onChange={(event) => setName(event.target.value)} 
                    />
                </Col>
                <Col>
                    <Button onClick={search}>Search</Button>
                </Col>
            </Row>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && (
                <ul>
                    {data.characters.results.map((character: any) => {
                        return <li key={character.id}>{character.location.name}</li>
                    })};
                </ul>
            )}
        </Container>
    )
}

export default SearchComponent;