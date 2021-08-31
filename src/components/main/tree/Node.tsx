import styled from 'styled-components';
import CenterNode from './CenterNode';

function Node() {
  return (
    <NodeWrap>
      <UpBranch>
        <BranchNode>What is HTTP?</BranchNode>
        <BranchNode>What is HTTP?</BranchNode>
        <BranchNode>블라브라</BranchNode>
        <BranchNode>블라브라</BranchNode>
        <BranchNode>블라브라</BranchNode>
        <BranchNode>블라브라</BranchNode>
      </UpBranch>
      <CenterNode />
      <DownBranch>
        <BranchNode>블라브라</BranchNode>
        <BranchNode>이거는 머시기 머시기</BranchNode>
        <BranchNode>이거는 머시기 머시기</BranchNode>
        <BranchNode>이거는 머시기 머시기</BranchNode>
        <BranchNode>블라브라</BranchNode>
        <BranchNode>블라브라</BranchNode>
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

const BranchNode = styled.div`
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  width: max-content;
  background-color: ${({ theme }) => theme.colors.branchNode};
  position: relative;

  &::before {
    content: '';
    height: 100%;
    width: 0.2rem;
    background-color: ${({ theme }) => theme.colors.graySecondary};
    top: 0;
    left: 0;
    position: absolute;
  }
`;
