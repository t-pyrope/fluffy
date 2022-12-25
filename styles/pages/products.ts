import styled from 'styled-components';

export const SProductContainer = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  
  & img {
    width: 50%;
    object-fit: cover;
  }
`

export const SProductContent = styled.div`
  width: 100%;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const SPrice = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
  color: #666666;
`

export const SDescriptionList = styled.ul`
  list-style: none;
`

export const SDescriptionItem = styled.li`
  list-style-type: disc;
  margin-left: 20px;
  margin-top: 8px;
`
