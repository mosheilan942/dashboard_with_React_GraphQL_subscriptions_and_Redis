import React from "react";
import styled from "styled-components";

const Card = styled.div`
  height: 550px;
`;

const Media = styled.img`
  height: 400px;
  object-fit: cover;
`;

const Content = styled.div``;

const Title = styled.h5`
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  color: #6c757d;
`;

const Actions = styled.div``;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: blue;
  cursor: pointer;
  font-size: 0.8rem;
  margin-right: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

function DetailsCard() {
  return (
    <Card>
      <Media src="http://tinyurl.com/43twcvpy" alt="green iguana" />
      <Content>
        <Title>Lizard</Title>
        <Text>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Text>
      </Content>
      <Actions>
        <Button>Share</Button>
        <Button>Learn More</Button>
      </Actions>
    </Card>
  );
}

export default DetailsCard;