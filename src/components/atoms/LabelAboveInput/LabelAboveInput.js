import styled from 'styled-components';

export const LabelAboveInput = styled.label`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.blue};
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 0 0 0.25em 0;
  text-transform: uppercase;
`;
