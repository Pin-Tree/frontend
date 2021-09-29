import styled from 'styled-components';

function NodeDetailInfo() {
  return (
    <InformationWrap>
      <InfoContainer>
        <div>
          <button>도서</button>
          <button>강의</button>
          <button>아티클</button>
        </div>
        <CardContainer>
          <Card>
            <img src="https://via.placeholder.com/150" alt="" />
            <TextBox>
              <h3>프로그래머의 길, 멘토에게 묻다</h3>
              <span>데이브 로버 머시기</span>
              <span>인사이트 머시기 2015년</span>
              <span>정가 125124</span>
              <span>판매가 123123</span>
            </TextBox>
          </Card>
          <Card>
            <img src="https://via.placeholder.com/150" alt="" />
            <TextBox>
              <h3>프로그래머의 길, 멘토에게 묻다</h3>
              <span>데이브 로버 머시기</span>
              <span>인사이트 머시기 2015년</span>
              <span>정가 125124</span>
              <span>판매가 123123</span>
            </TextBox>
          </Card>
          <Card>
            <img src="https://via.placeholder.com/150" alt="" />
            <TextBox>
              <h3>프로그래머의 길, 멘토에게 묻다</h3>
              <span>데이브 로버 머시기</span>
              <span>인사이트 머시기 2015년</span>
              <span>정가 125124</span>
              <span>판매가 123123</span>
            </TextBox>
          </Card>
          <Card>
            <img src="https://via.placeholder.com/150" alt="" />
            <TextBox>
              <h3>프로그래머의 길, 멘토에게 묻다</h3>
              <span>데이브 로버 머시기</span>
              <span>인사이트 머시기 2015년</span>
              <span>정가 125124</span>
              <span>판매가 123123</span>
            </TextBox>
          </Card>
        </CardContainer>
      </InfoContainer>
    </InformationWrap>
  );
}

export default NodeDetailInfo;

const InformationWrap = styled.section`
  padding: inherit;
  width: 100%;
  height: 100%;
  max-width: inherit;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.yellowPrimary};
  overflow: hidden;
`;

const CardContainer = styled.ul`
  padding: 0.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const Card = styled.li`
  padding: 0.5rem;
  display: flex;
  height: 15rem;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;
