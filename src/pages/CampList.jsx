import Header from './admin/Header';
import styled from 'styled-components';
import Records from '../components/records/Records';

const CampList = () => {
  return (
    <div>
      <Header />
      <Container>&nbsp;</Container>
      <Records />
    </div>
  );
};

export default CampList;

export const Container = styled.div`
  width: 100%;
  height: 90px;
`;
