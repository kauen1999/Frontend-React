import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CustomCard = ({ title, subtitle1, subtitle2, text, linkTo }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-center fs-4">{title}</Card.Title>
        <Card.Subtitle className="text-muted text-center">{subtitle1}</Card.Subtitle>
        <Card.Text className="text-center">{text}</Card.Text>
        <div className="d-flex justify-content-center">
          <Link to={linkTo}>
            <Card.Link>Mais Informações</Card.Link>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
