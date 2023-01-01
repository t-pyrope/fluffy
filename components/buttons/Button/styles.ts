import styled from "styled-components";

export const SButton = styled.button<{ variant: 'contained' | 'outlined', size: 'small' | 'medium' }>`
  padding: ${({ size }) => size === 'small' ? '8px 12px' : '12px'};
  border-radius: 0;
  color: ${({ variant }) => variant === 'contained' ? '#fff' : '#131313'};
  background: ${({ variant }) => variant === 'contained' ? '#131313' : 'transparent'};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  cursor: pointer;
  font-size: ${({ size }) => size === 'small' ? '1rem' : '1.3rem'};
`
