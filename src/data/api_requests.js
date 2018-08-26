// prefer the use of XMLHttpRequest for cypress's sake.
function makeRequest(method, url) {
	return new Promise(function(resolve, reject) {
		var xhr = new XMLHttpRequest()
		xhr.open(method, url)
		xhr.onload = function() {
			if (this.status >= 200 && this.status < 300) {
				resolve(xhr.response)
			} else {
				reject({
					status: this.status,
					statusText: xhr.statusText
				})
			}
		}
		xhr.onerror = function() {
			reject({
				status: this.status,
				statusText: xhr.statusText
			})
		}
		xhr.send()
	})
}

/**
 * Request trivia data from API.
 * If an error occurs, the error is thrown.
 *
 * @export
 * @returns
 */
export function getQuizData() {
	return makeRequest(
		"GET",
		`https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean`
	)
		.then((response) => JSON.parse(response))
		.catch((err) => console.log(err))
}
