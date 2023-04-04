import { useState } from 'react';

import styled from 'styled-components';

import Step from 'pages/Home/Step';
import StepContent from 'pages/Home/stepContent';

const Container = styled.div<{ image: string }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 90%;
  min-height: 28rem;
  max-height: 70vh;
  margin: auto;
  padding: 2rem;
  background: linear-gradient(#0008, #0008), url("${({ image }) => image}");
  background-position: center, center;
  background-size: cover;
  border-radius: 3rem;
  transition: all 0.3s ease-in-out;

  ${({ theme }) => theme.media.tablet} {
    min-height: 30rem;
    max-height: 70vh;
  }

  ${({ theme }) => theme.media.mobile} {
    grid-template-columns: 1fr;
    min-height: 54rem;
  }
`;

const StepNumbers = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  margin-top: auto;
`;

const StepNumber = styled.p<{ selected: boolean }>`
  width: fit-content;
  height: fit-content;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 1.5rem;
  cursor: not-allowed;
  transition: all 0.3s ease-in-out;

  ${({ selected, theme }) =>
    selected
      ? `background-color: ${theme.colors.primary}`
      : `
        cursor: pointer;

        :hover {
          scale: 1.1;
        }

        :active {
          scale: 0.9;
        }
      `};
`;

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const currentStepContent = StepContent[currentStep];

  if (!currentStepContent) return null;

  return (
    <Container image={currentStepContent.backgroundImage}>
      <Step currentStepContent={currentStepContent} />
      <StepNumbers>
        {Object.keys(StepContent).map((key) => (
          <StepNumber
            key={key}
            selected={key === currentStep.toString()}
            onClick={() => setCurrentStep(Number(key))}
          >
            {key}
          </StepNumber>
        ))}
      </StepNumbers>
    </Container>
  );
};

export default Stepper;