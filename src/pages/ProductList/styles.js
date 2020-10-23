import styled, { css } from 'styled-components'

const keyframes = css`
  @keyframes showImage {
    from {
      opacity: 0;
      -webkit-transform: translateX(-150px);
      transform: translateX(-150px);
    }
    to {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
`

const Container = styled.main`
  padding: 20px 0 20px 0;
  margin: 30px auto 30px;
  width: 100%;
  max-width: 90%;
  text-align: center;
  border-radius: 0 0 10px 10px;
  background: var(--gray-light);
  ${keyframes}
`

const Wrapper = styled.section`
  margin: 0 auto;
  max-width: 70%;

  @media (max-width: 1300px) {
    max-width: 90%;
  }

  @media (max-width: 1130px) {
    max-width: 100%;
    overflow: hidden;
  }
`

const MarketFood = styled.div`
  margin-bottom: 10px;
  color: var(--red);
  font-size: 30px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  margin-bottom: 10px;
  color: var(--primary);
`

const Text = styled.p`
  color: var(--primary);

  a {
    margin-left: 5px;
    color: var(--primary);
  }
`

const Image = styled.img`
  width: 100%;
  max-width: 30%;
  animation: showImage 1300ms;

  @media (max-width: 768px) {
    max-width: 70%;
  }
`

const Footer = styled.footer`
  margin: 80px 0 5px 0;
  display: block;
`

export {
  Container,
  Wrapper,
  MarketFood,
  Title,
  Text,
  Image,
  Footer,
}
