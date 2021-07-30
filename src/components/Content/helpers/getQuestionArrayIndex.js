export function getQuestionIndexArray(numberOfQuestions) {
    const upperRandomizerBoundary = numericalQuestionList.length - 1;
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