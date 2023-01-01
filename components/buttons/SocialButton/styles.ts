import styled from "styled-components";

export const SSocialButton = styled.button`
  padding: 18px;
  padding-left: 50px;
  border-radius: 0;
  color: #494949;
  background: transparent;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  cursor: pointer;
  font-size: 1.3rem;
  border: 1px solid #cecece;
  position: relative;

  & img {
    position: absolute;
    top: 50%;
    left: 18px;
    transform: translateY(-50%);
  }
`
