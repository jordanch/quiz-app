import { AllHtmlEntities } from "html-entities"

const entities = new AllHtmlEntities()

/**
 * Strip out the fluff not needed for now.
 * 1. Parse to JS. 2. Rename props tocamelCase.
 * 3. Set correctAnswers to boolean data type.
 * 4. Decode HTML entities like &quot; etc.
 *
 * @export
 * @param {array} data
 * @returns
 */
export function handleApiData(data) {
	// TODO: handling unexpected input.
	return data.results.map((quizEntry) => ({
		category: quizEntry.category,
		question: entities.decode(quizEntry.question),
		correctAnswer: quizEntry.correct_answer === "True" ? true : false,
		appId: hashCode(quizEntry.question),
		userAnswer: null
	}))
}

/**
 * Source: https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
 * Hash the question for a unique id, used internally by react.
 *
 * @param {string} str
 * @returns {number}
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
