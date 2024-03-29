import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 15%;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
