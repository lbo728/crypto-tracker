import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

function Coins() {
  return (
    <>
      <h1> 아하하하</h1>
      <Title>코인</Title>
    </>
  );
}
export default Coins;
