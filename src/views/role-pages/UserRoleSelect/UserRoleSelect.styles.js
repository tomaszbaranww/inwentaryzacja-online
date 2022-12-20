import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media ${({ theme }) => theme.breakpoints.mobileOnly} {
    grid-template-columns: 1fr;
  }
`;
