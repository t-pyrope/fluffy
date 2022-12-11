import styled from 'styled-components';

export const SContainer = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  
  & img {
    width: 50%;
    object-fit: cover;
  }
`

export const SContent = styled.div`
  margin: 1rem;
`

export const SPrice = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  color: #666666;
`
