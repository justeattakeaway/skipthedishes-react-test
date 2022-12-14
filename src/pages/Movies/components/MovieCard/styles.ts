import styled from 'styled-components';

export const MovieCardWrapper = styled.div`
  width: 100%;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.divider};
  border-radius: 3px;
`;

export const MovieCardImage = styled.div<{ src: string }>`
  height: 300px;
  background: url('${(props) => props.src}') no-repeat center;
  background-size: cover;
  border-radius: 3px 3px 0 0;
`;

export const MovieCardBody = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: ${(props) => props.theme.spacing.md};
`;

export const MovieCardTitle = styled.h2`
  color: ${(props) => props.theme.colors.text};
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
  margin-bottom: 4px;
`;

export const MovieCardEpisode = styled.h3`
  color: ${(props) => props.theme.colors.text};
  font-size: 12px;
  font-weight: 600;
  line-height: 12px;
`;

export const MovieCardDetailsTitle = styled.h4`
  color: ${(props) => props.theme.colors.secondaryText};
  font-size: 12px;
  font-weight: 600;
  line-height: 12px;
  margin-bottom: ${(props) => props.theme.spacing.sm};
`;

export const MovieCardDetailsItem = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
`;

export const MovieCardDetails = styled.div`
  padding: ${(props) => `${props.theme.spacing.md} 0`};

  ${MovieCardDetailsItem}:not(:last-of-type) {
    margin-bottom: ${(props) => props.theme.spacing.md};
  }
`;

export const MovieCardAction = styled.span`
  color: ${(props) => props.theme.colors.secondaryText};
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  line-height: 12px;
  margin-top: ${(props) => props.theme.spacing.md};
`;
