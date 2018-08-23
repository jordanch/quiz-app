import { AllHtmlEntities } from "html-entities"

const entities = new AllHtmlEntities()

/**
 * Strip out the fluff not needed for now.
 * Work with JS objects instead of JSON.
 * Rename properties to camelCase.
 * Set correct answers to boolean data type.
 * Decode HTML entities like &quot; etc.
 *
 * @export
 * @param {*} data
 * @returns
 */
export function handleApiData(data) {
  // TODO: handling unexpected input.
  return data.results.map((quizEntry) => ({
    category: quizEntry.category,
    question: entities.decode(quizEntry.question),
    correctAnswer: quizEntry.correct_answer === "True" ? true : false,
    incorrectAnswers: quizEntry.incorrect_answers,
    appId: hashCode(quizEntry.question),
    userAnswer: null
  }))
}

/**
 * Source: https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
 * Hash the question for a unique id, used internally by react.
 *
 * @param {*} str
 * @returns
 */
function hashCode(str) {
  return str
    .split("")
    .reduce(
      (prevHash, currVal) =>
        ((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0,
      0
    )
}
