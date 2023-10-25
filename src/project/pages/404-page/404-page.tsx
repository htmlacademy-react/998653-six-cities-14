import styled from 'styled-components';

const Wrapper = styled.body`
  background-color: papayawhip;
  padding: 20em;
  font-family: 'Yanone Kaffeesatz';
  font-size: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 5em;
  color: #BF4F74;
`;

const Description = styled.p`
  text-align: center;
`;

const Link = styled.a`
  color: blue;
  text-decoration: underline;
`;

function NotFoundPage() {
  return(
    <Wrapper>
      <Title>404.</Title>
      <Description>Тhis page not found</Description>
      <Link href="/">Go to main page </Link>
    </Wrapper>
  );
}

export { NotFoundPage };
