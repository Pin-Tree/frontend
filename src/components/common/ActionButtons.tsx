import styled from 'styled-components';

function ActionButtons() {
  return (
    <>
      <InfoShadow>INFO</InfoShadow>
      <CheckBtn></CheckBtn>
      <EditBtn></EditBtn>
      <CancelBtn></CancelBtn>
      <PlusBtn></PlusBtn>
    </>
  );
}

export default ActionButtons;

const InfoShadow = styled.div`
  ${({ theme }) => theme.flexCenter};
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  background-color: ${({ theme }) => theme.colors.grayActionBtn};
  opacity: 0.85;
  position: absolute;
  top: 0;
  left: 0;
`;

const ActionBtn = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.colors.grayActionBtn};
  border-radius: 50%;
  position: absolute;
`;

const CheckBtn = styled(ActionBtn)`
  ${({ theme }) => theme.actionBtnPos.check}
`;

const CancelBtn = styled(ActionBtn)`
  ${({ theme }) => theme.actionBtnPos.cancel}
`;

const EditBtn = styled(ActionBtn)`
  ${({ theme }) => theme.actionBtnPos.edit}
`;

const PlusBtn = styled(ActionBtn)`
  ${({ theme }) => theme.actionBtnPos.plus}
`;
