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

function TreeHeader() {
  const classes = useStyles();

  return (
    <PaddingWrap>
      <TreeHeaderWrap>
        <TreeInfo>
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
        </TreeInfo>
        <Buttons>
          <button>공유</button>
          <button>편집</button>
        </Buttons>
      </TreeHeaderWrap>
    </PaddingWrap>
  );
}

export default TreeHeader;

const PaddingWrap = styled.div`
  margin: 0 auto;
  max-width: 1760px;
  padding: 0 5rem;
`;

const TreeHeaderWrap = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 4rem;
  height: 10rem;
  position: relative;
`;

const ProgressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TreeInfo = styled.div`
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
  position: absolute;
  right: 0;
  bottom: 1.5rem;

  button {
    margin-left: 2rem;
    height: 1.5rem;
    background: ${({ theme }) => theme.colors.grayButton};
    border: 1px solid ${({ theme }) => theme.colors.grayPrimary};
    border-radius: 0.5rem;
  }
`;
