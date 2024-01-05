import styled from "styled-components";
import { cardShadow, hoverEffect } from "../utils/utils";
import img1 from "../assets/a4.jpg"; // pokemon
import img2 from "../assets/a5.jpg";

export function Recomendados() {
  return (
    <RecommendProject>
      <CardContent>
        <Details>
          <InfoContainer>
            <Avatar>
              <img src={img1} alt=" " />
            </Avatar>
            <Info>
              <InfoName>Pokemon Go</InfoName>
              <InfoUpdate>Update 5m ago</InfoUpdate>
            </Info>
          </InfoContainer>
        </Details>
        <Title>We need a content creator</Title>
        <ProjectInfo>
          We are looking for a content creator who can position our brand
        </ProjectInfo>
        <PriceContainer>
          <Price>$ 4,850.00/month</Price>
        </PriceContainer>
      </CardContent>
    </RecommendProject>
  );
}

const RecommendProject = styled.div`
  border-radius: 1rem;
  height: 130%;
  padding: 1rem;
  background-color: white;
  width: 27.5vw;
  box-shadow: ${cardShadow};
  transition: 0.4 ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 80%;
    margin: 2rem;
  }
`;
const CardContent = styled.div`
  margin: 0.4rem;
`;
const Details = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.2rem;
    margin-bottom: 1rem;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Avatar = styled.div`
  margin-right: 1rem;
  margin-left: -25px;
  img {
    height: 5rem;
    border-radius: 5rem;
  }
`;
const Info = styled.div``;
const InfoName = styled.h3`
  font-weight: 500;
`;
const InfoUpdate = styled.h5`
  font-weight: 300;
`;
const Title = styled.h4`
  font-weight: 500;
`;
const ProjectInfo = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  color: #3b3b3b;
  margin-bottom: 0.05rem;
`;
const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background-color: rgba(146, 166, 255, 0.3);
  cursor: pointer;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 0.4rem;
  }
`;
const Price = styled.div`
font-weight: 600;
`;
