import PropTypes from 'prop-types';
import { SectionContainer, Title } from 'components/Section.styled';

export const Section = ({ title, children }) => (
  <SectionContainer>
    <Title>{title}</Title>
    {children}
  </SectionContainer>
);

Section.propType = {
  title: PropTypes.string.isRequired,
};
