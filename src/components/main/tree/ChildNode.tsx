import styled from 'styled-components';

type NodeText = {
  nodeText: string;
};

function ChildNode({ nodeText }: NodeText) {
  return <ChildNodeWrap>{nodeText}</ChildNodeWrap>;
}

export default ChildNode;

const ChildNodeWrap = styled.div`
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
