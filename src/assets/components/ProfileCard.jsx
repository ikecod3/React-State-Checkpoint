import { Card, ListGroup } from "react-bootstrap";

const ProfileCard = ({ person }) => {
  // This person object is desctructed here for easy usage
  const { fullName, bio, imgSrc, profession } = person;
  return (
    <div className="shadow-lg mt-3 mb-3">
      <Card style={{ width: "19rem" }}>
        <Card.Img variant="top" src={imgSrc} />
        <Card.Body>
          <Card.Title>{fullName}</Card.Title>
          <Card.Text>
            <span>
              <i> {fullName} </i>
              {bio}
            </span>
          </Card.Text>
          <ListGroup>
            <ListGroup.Item variant="secondary">
              Profession: {profession}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfileCard;
