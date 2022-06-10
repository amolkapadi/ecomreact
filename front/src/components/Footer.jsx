import styled from "styled-components";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import CallIcon from "@mui/icons-material/Call";
import PinDropIcon from "@mui/icons-material/PinDrop";

import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${mobile({ padding: "30px" })}
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;



const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>E Com</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ipsum
          similique blanditiis error reiciendis fugiat facere! Debitis
          consequuntur voluptatum ipsum voluptates provident alias veniam,
          corporis quisquam tempora aspernatur ut maxime?
        </Desc>
        <SocialContainer>
          <SocialIcon color="55ACEE">
            <EmailIcon />
          </SocialIcon>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>USEFULL LINK</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
        </List>
      </Center>
      <Right>
        <Title></Title>

        <ContactItem>
          <PinDropIcon style={{ marginRight: "20px" }} />
          2/49, Sai Colony, Parel Mumbai: 400012
        </ContactItem>
        <ContactItem>
          <CallIcon style={{ marginRight: "20px" }} />
          +91 4354654534
        </ContactItem>
        <ContactItem>
          <EmailIcon style={{ marginRight: "20px" }} />
          demo@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
