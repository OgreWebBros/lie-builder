import Randomizer from "react-randomizer";

export function getQuestionIndexArray(numberOfQuestions, possibleQuestions) {
    const upperRandomizerBoundary = possibleQuestions- 1;
    const newQuestionIndex= [];
    let randomQuestionsSelection;

    do {
    randomQuestionsSelection = Randomizer.randomNumber(0, upperRandomizerBoundary);
    if (!newQuestionIndex.includes(randomQuestionsSelection))
    newQuestionIndex.push(randomQuestionsSelection);
    } while(newQuestionIndex.length < numberOfQuestions);

    this.setState({
     questionIndex: newQuestionIndex
    });
};