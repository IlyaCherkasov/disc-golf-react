import styled from 'styled-components';

import PlaceholderImg from 'assets/images/service.webp';

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 70vw;
  margin: auto;

  & p {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    width: 100%;
    padding: 1rem;
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    background-color: hsla(0deg 0% 0% / 70%);
    border-radius: 1rem;
  }

  ${({ theme }) => theme.media.mobile} {
    max-width: 100%;

    & p {
      font-size: 1.5rem;
    }
  }
`;

const NotFound = () => (
  <Container>
    <img src={PlaceholderImg} alt='Заглушка' />
    <p>Страница не существует или находится в разработке</p>
  </Container>
);

export default NotFound;
