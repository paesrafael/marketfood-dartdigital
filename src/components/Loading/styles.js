import styled, { css } from 'styled-components'

const keyframes = css`
  @keyframes showLoading {
    from {
      opacity: 0;
      -webkit-transform: translateY(-50px);
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
`

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${keyframes}
  animation: showLoading 1300ms;

  @media (max-width: 768px) {
    position: absolute;
    top: -35%;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Image = styled.img``

export {
  Container, Image,
}
