import styled from 'styled-components';
import Node from './Node';

function GuideTree() {
  return (
    <TreeWrap>
      <TreeContainer>
        <Node />
        <Node />
        <Node />
        <Node />
        <Node />
        <Node />
        <CenterLine />
      </TreeContainer>
    </TreeWrap>
  );
}

export default GuideTree;

const TreeWrap = styled.section`
  padding: 0.7rem 5rem;
  height: 70%;
  max-width: ${({ theme }) => theme.serviceWidth.default};
`;

const TreeContainer = styled.div`
  position: relative;
  height: 100%; // 추후 조정
  display: flex;
  align-items: center;
  overflow-x: scroll;
`;

const CenterLine = styled.div`
  position: absolute;
  width: 100vw;
  top: 50%;
  background-color: ${({ theme }) => theme.colors.grayPrimary};
  height: 2px;
`;
