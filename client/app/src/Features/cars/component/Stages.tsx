import React, { MouseEventHandler } from "react"; 
import styled from "styled-components";

const Paper = styled.div`
  padding: 16px;
  margin: auto; 
  flex-grow: 1;
  background-color: ${({ theme }) =>
    theme.palette === "dark" ? "#1A2027" : "#fff"};
`;

const Accordion = styled.div``;

const Summary = styled.div``; 

const SummaryText = styled.p`
  margin: 0;
`;

const Details = styled.div``;

const Text = styled.p``;

const Image = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
`;

function Stages() {

  const [expanded, setExpanded] = React.useState(false);

  const toggleExpanded = (e:any) => {
    console.log(e);
    
    setExpanded(!expanded); 
  };

  const rows = [];

  for (let i = 0; i < 3; i++) {
    rows.push(
      <Paper key={i}>
        <Accordion>
          <Summary onClick={toggleExpanded}>
            <SummaryText>Accordion {i+1}</SummaryText>
          </Summary>
          {expanded && (
            <>
              <Image 
                src="http://tinyurl.com/42y5mcwk" 
                alt="complex" 
              />
              <Details>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </Text>
              </Details>
            </>
          )}
        </Accordion>
      </Paper>
    );
  }

  return <>{rows}</>;
}

export default Stages;