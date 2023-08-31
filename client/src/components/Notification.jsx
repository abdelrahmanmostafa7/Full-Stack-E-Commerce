import React from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  height: 40px;
  background-color: #99b5c8;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
`;

const Notification = () => {
    return (
        <Container>
                Super Deal! Free Shipping on order over $500
        </Container>
    )
}

export default Notification