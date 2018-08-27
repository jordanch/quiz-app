export function isUserCorrect(quizEntity) {
	return quizEntity.userAnswer === quizEntity.correctAnswer
}
