import React  from 'react';
import styled from 'styled-components';

  function Counter() {
    const [count, setCount] = React.useState(0);

    const smallIncrement = function() {
      setCount(count + 1);
    }
    
    const smallDecrement = function() {
      setCount(count - 1);
    }
    
    const largeIncrement = function() {
      setCount(count + 10);
    }
    
    const largeDecrement = function() {
      setCount(count - 10);
    }

    const reset = function() {
      setCount(0);
    }
    
    const randomNum = function() {
      setCount(Math.floor(Math.random() * 100) + 1);
    }
    

    return (
      <>
        <Wrapper>
          <Card>
            <CountUpdate>Count: {count}</CountUpdate>
            <ButtonContainer>
              <Button onClick={smallIncrement}>
                Add 1
              </Button>
              <Button onClick={smallDecrement}>
                Minus 1
              </Button>
              <Button onClick={largeIncrement}>
                Add 10
              </Button>
              <Button onClick={largeDecrement}>
                Minus 10
              </Button>
              <Button onClick={randomNum}>
                Random 
              </Button>
              <Button onClick={reset}>
                Reset
              </Button>
            </ButtonContainer>
          </Card>
        </Wrapper>
      </>
    );
  }

  const CountUpdate = styled.p`
    font-size: 3rem;
    font-weight: 500;
  `;

  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
  `;

  const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 425px;
  background: hsl(0deg 0% 100%);;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 15px 0px hsl(0deg 0% 83%), -5px -5px 15px 0px hsl(0deg 0% 83%);
`;

  const ButtonContainer  = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-items: center;
  `;

  const Button = styled.button`
	background: hsl(45deg 100% 50%);
	color: hsl(0deg 0% 0%);
	padding: 20px 20px;
	border-radius: 8px;
	border: none;
	font-size: 1.5rem;
    font-weight: 900;
	cursor: pointer;

    &:hover {
        background: hsl(0deg 0% 0%);
        color: hsl(0deg 0% 100%);
    }
`;
export default Counter;