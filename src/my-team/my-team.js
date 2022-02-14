import styled from "styled-components";
import photo1 from "../images/photo1.png";
import photo2 from "../images/photo2.png";
import photo3 from "../images/photo3.png";
import photo4 from "../images/photo4.png";
import photo5 from "../images/photo5.png";
import photo6 from "../images/photo6.png";
const MainContainer = styled.div`
  max-width: 60rem;
  min-height: 100vh;
  margin: 0 auto;
`;

const HeroDiv = styled.div`
  width: 50%;
`;

const HeroContainer = styled.div`
  display: flex;
`;

const TagLine = styled.p`
  margin: 0;
  font-family: "PT Serif", serif;
  font-weight: 700;
  font-size: 2.5rem;
`;

const Title = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;
  font-weight: ${(props) => props.fontWeight};
  padding-left: 4rem;
`;

const GridDiv = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 2rem;
`;

const TeamMember = styled.div`
  /* background-color: #ffffff; */
  padding: 1rem;
  &:nth-child(3n-1) {
    margin-top: 5rem;
  }
`;

const ImgAndProfession = styled.div`
  display: flex;
  div {
    p {
      transform: rotate(90deg);
      margin: 2rem 0;
      text-transform: uppercase;
      font-weight: 400;
      font-size: 0.8rem;
    }
  }
  img {
    max-width: 230px;
    max-height: 330px;
  }
`;

const MemberName = styled.div`
  font-weight: 600;
  font-size: 1.2rem;
`;

const TeamMembers = [
  { name: "Bill Mahoney", image: photo1, profession: "Product owner" },
  { name: "Saba Cabrera", image: photo2, profession: "Art director" },
  { name: "Shae Le", image: photo3, profession: "Tech Lead" },
  { name: "Skylah Lu", image: photo4, profession: "UX Designer" },
  { name: "Griff Richards", image: photo5, profession: "Developer" },
  { name: "Stan John", image: photo6, profession: "Developer" },
];

const TeamCard = (member) => {
  return (
    <TeamMember>
      <ImgAndProfession>
        <img src={member.image} />
        <div>
          <p>{member.profession}</p>
        </div>
      </ImgAndProfession>
      <MemberName>
        <p>{member.name}</p>
      </MemberName>
    </TeamMember>
  );
};
const MyTeam = () => {
  return (
    <MainContainer>
      <HeroContainer>
        <HeroDiv>
          <TagLine>The creative crew</TagLine>
        </HeroDiv>
        <HeroDiv>
          <Title fontWeight={600}>Who we are</Title>
          <Title fontWeight={400}>
            We are team of creatively diverse. driven. innovative individuals
            working in various locations from the world.
          </Title>
        </HeroDiv>
      </HeroContainer>
      <GridDiv>{TeamMembers.map((member) => TeamCard(member))}</GridDiv>
    </MainContainer>
  );
};

export default MyTeam;
