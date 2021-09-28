import styled from 'styled-components';
import CenterNode from './CenterNode';
import ChildNode from './ChildNode';

function Node() {
  return (
    <NodeWrap>
      <NodeContainer>
        <UpBranchBox>
          <UpBranch>
            <ChildNode nodeText={'http balh'} />
            <ChildNode nodeText={'asdfasdfasdfasdfasfasasdfasfasfasfasdf'} />
            <ChildNode nodeText={'asdfasdfsadfsadafsadfsafas'} />
            <ChildNode nodeText={'asdf'} />
          </UpBranch>
        </UpBranchBox>
        <CenterNode />
        <DownBranchBox>
          <DownBranch>
            <ChildNode nodeText={'http balh'} />
            <ChildNode nodeText={'asdfasdfasdfasdfasfasasdfasfasfasfasdf'} />
          </DownBranch>
        </DownBranchBox>
      </NodeContainer>
    </NodeWrap>
  );
}

export default Node;

const NodeWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const NodeContainer = styled.div`
  height: 100%;
  min-width: 25rem;
  display: flex;
  align-items: center;
  position: relative;
`;

const BranchBox = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
`;

const UpBranchBox = styled(BranchBox)`
  display: flex;
  flex-direction: column-reverse;
  top: 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayPrimary};
`;

const DownBranchBox = styled(BranchBox)`
  bottom: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.grayPrimary};
`;

const Branch = styled.div`
  transform: translateX(25%);
`;

const UpBranch = styled(Branch)`
  margin-bottom: 2rem;
`;
const DownBranch = styled(Branch)`
  margin-top: 2rem;
`;
