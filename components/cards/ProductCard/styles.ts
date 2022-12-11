import styled from 'styled-components';

export const SContainer = styled.article<{ title: string }>`
  width: 100%;
  overflow: hidden;

  &::after {
    height: 100px;
    width: 100px;
    content: '${({ title }) => title}';
  }

  & img {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
  }
`
