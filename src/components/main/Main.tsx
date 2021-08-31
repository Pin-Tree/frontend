import styled from 'styled-components';
import MainHeader from './MainHeader';
import GuideTree from './tree/GuideTree';
import TreeHeader from './tree/TreeHeader';

function Main() {
  return (
    <>
      <Wrap>
        <MainHeader />
      </Wrap>
      <Wrap>
        <TreeHeader />
      </Wrap>
      <GuideTree />
    </>
  );
}

export default Main;

const Wrap = styled.section`
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayPrimary};
`;
