import styled from 'styled-components';
import CenterNode from './CenterNode';
import ChildNode from './ChildNode';

function Node() {
  return (
    <NodeWrap>
      <UpBranch>
        <ChildNode nodeText={'http balh'} />
      </UpBranch>
      <CenterNode />
      <DownBranch>
        <ChildNode nodeText={'http balh'} />
      </DownBranch>
    </NodeWrap>
  );
}

export default Node;

const NodeWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  position: relative;

  &:not(:first-child) {
    margin-left: 12rem;
  }
`;

const Branch = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-right: 2rem;
  width: auto;
  height: 12rem;
  transform: translateX(60%);
  background-color: transparent;
  position: absolute;
`;

const UpBranch = styled(Branch)`
  flex-direction: column;
  justify-content: flex-end;
  bottom: 5rem;
`;
const DownBranch = styled(Branch)`
  flex-direction: column;
  top: 5rem;
`;
