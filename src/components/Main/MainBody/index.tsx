import styled from 'styled-components';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    background: '#e0e0e0',
    width: '40vw',
    height: '1.5rem',
    'border-radius': '1rem',
  },
});

function MainBody() {
  const classes = useStyles();

  return (
    <MainbodyWrap>
      <TreeInformation>
        <h2>Front-End</h2>
        <ProgressContainer>
          <LinearProgress
            variant={'determinate'}
            value={40}
            classes={{
              root: classes.root,
            }}
          />
          <span>45%</span>
        </ProgressContainer>
      </TreeInformation>
      <Buttons>
        <button>공유</button>
        <button>편집</button>
      </Buttons>
    </MainbodyWrap>
  );
}

export default MainBody;

const MainbodyWrap = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 4rem;
  height: 8rem;
`;

const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TreeInformation = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 0.5rem;
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }

  span {
    padding: 0.5rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100%;

  button {
    margin-left: 2rem;
    height: 1.5rem;
    background: ${({ theme }) => theme.colors.grayButton};
    border: 1px solid ${({ theme }) => theme.colors.grayPrimary};
    border-radius: 0.5rem;
  }
`;
