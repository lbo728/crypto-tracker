import { useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

// interface RouteParams {
//   coinId: string;
//   [key: string]: string | undefined;
// }

interface RouteState {
  name: string;
}

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.div`
  text-align: center;
`;

function Coin() {
  // const { coinId } = useParams<RouteParams>();
  const location = useLocation();
  const state = location.state as RouteState;
  console.log(state);
  const [loading, setLoading] = useState(true);
  return (
    <Container>
      <Header>
        <Title>코인 {state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
export default Coin;
