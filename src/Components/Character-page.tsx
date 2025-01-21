import { Button, Card, Container } from "react-bootstrap";
import { useCharacter } from "./useCharacters";
import { Link, useParams } from "react-router-dom";

const CharacterPage: React.FC = () => {
    const { id } = useParams();
    const { data, loading, error } = useCharacter(id!);
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    return (
        <Container>
            <Link to='/'>
                <Button style={{margin: '10px'}}>Go Back</Button>
            </Link>
            <Card style={{ width: '18rem', margin: '5px'}}>
                <Card.Img variant="top" src={data.character.image} />
                <Card.Body>
                    <Card.Title>{data.character.name}</Card.Title>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default CharacterPage;