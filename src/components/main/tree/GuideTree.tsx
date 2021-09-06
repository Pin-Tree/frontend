import styled from 'styled-components';
import { useRef, WheelEvent } from 'react';

import Node from './Node';

function GuideTree() {
  const wheelX = useRef<HTMLDivElement | null>(null);

  const handleMouseWheel = (e: WheelEvent) => {
    if (!wheelX.current) return;
    const movement = 500;
    const isWheelDown = e.deltaY > 0 ? true : false;
    const currentWheel = wheelX.current;

    if (!isWheelDown) {
      if (currentWheel.scrollLeft === 0) return;
      currentWheel.scrollLeft -= movement;
    }

    if (isWheelDown) {
      currentWheel.scrollLeft += movement;
    }
  };

  return (
    <TreeWrap>
      <TreeContainer onWheel={handleMouseWheel} ref={wheelX}>
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
