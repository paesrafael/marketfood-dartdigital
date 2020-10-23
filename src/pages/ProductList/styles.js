import styled from 'styled-components'

const Container = styled.main`
  padding: 20px 0 20px 0;
  margin: 0 auto;
  width: 100%;
  max-width: 90%;
  text-align: center;
  border-radius: 0 0 10px 10px;
  background: var(--gray-light);
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
  color: var(--primary);
`

export {
  Container,
  Wrapper,
  MarketFood,
  Title,
}
