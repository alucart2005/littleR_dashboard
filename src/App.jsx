import "./App.css";
import { MyRoutes } from "./routers/routes";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <MyRoutes />;
    </Container>
  );
}

export default App;
const Container = styled.div`
  display: flex;
  height: 97vh;
  background: blue;
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width:1080px) {
    flex-direction: column;
  }
`;
