import styled from 'styled-components';
import MenuIcon from '@src/assets/MenuIcon';

function MainHeader() {
  return (
    <MainHeaderWrap>
      <Logo>PinTree</Logo>
      <MenuWrap>
        <MenuIcon />
      </MenuWrap>
    </MainHeaderWrap>
  );
}

export default MainHeader;

const MainHeaderWrap = styled.header`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.serviceWidth.default};
  padding: 0.5rem ${({ theme }) => theme.paddings.sidePadding};
  display: flex;
  justify-content: space-between;
`;

const MenuWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  color: ${({ theme }) => theme.colors.greenPrimary};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
`;
