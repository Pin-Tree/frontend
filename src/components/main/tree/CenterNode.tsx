import { useState } from 'react';
import styled from 'styled-components';

import ActionButtons from '@src/components/common/ActionButtons';

function CenterNode() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <NodeWrap onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      이건 센터노드
      {isHovering && <ActionButtons />}
    </NodeWrap>
  );
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
  position: relative;
`;
