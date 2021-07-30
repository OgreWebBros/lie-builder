import Randomizer from "react-randomizer";
import { numericalQuestionList } from "../../../assets/constants/bulkQuestionList"

export function getQuestionIndexArray(neededSelections) {
    const upperRandomizerBoundary = numericalQuestionList.length - 1;
    const questionIndexs = [];
    const questionsChosenArray = [];
    let randomQuestionsSelection;

    do {
    randomQuestionsSelection = Randomizer.randomNumber(0, upperRandomizerBoundary);
    if (!questionIndexs.includes(randomQuestionsSelection))
    questionIndexs.push(randomQuestionsSelection);
    } while(questionIndexs.length < neededSelections);

    return questionIndexs;
};
