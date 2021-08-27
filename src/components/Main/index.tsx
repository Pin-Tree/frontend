import styled from 'styled-components';
import MainBody from './MainBody';
import MainHeader from './MainHeader';

function Main() {
  return (
    <>
      <Wrap>
        <MainHeader />
      </Wrap>
      <Wrap>
        <MainBody />
      </Wrap>
    </>
  );
}

export default Main;

const Wrap = styled.main`
  padding: 0.5rem ${({ theme }) => theme.paddings.sidePadding};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayPrimary};
`;
