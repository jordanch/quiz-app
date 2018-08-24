/**
 * Request trivia data from API.
 * If an error occurs, the error is thrown.
 *
 * @export
 * @returns
 */
export function getQuizData() {
  return fetch(
    `https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`
  ).then(
    (response) => response.json(),
    (error) => {
      console.log("An error occurred.", error)
      // throw the error so calling context and chain handlers.
      throw new Error(error)
    }
  )
}
