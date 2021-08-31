import styled from 'styled-components';

function CenterNode() {
  return <NodeWrap>이건 센터노드</NodeWrap>;
}

export default CenterNode;

const NodeWrap = styled.div`
  ${({ theme }) => theme.flexCenter};
  width: 8rem;
  height: 3.5rem;
  background-color: ${({ theme }) => theme.colors.greenPrimary};
  color: ${({ theme }) => theme.colors.centerNode};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  top: 50%;
  z-index: 1;
`;
