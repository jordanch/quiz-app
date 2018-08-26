# Application requirements.

## Top level view

10 question, true or false, trivia app.

## Low level requirements

### Data

[API endpoint](https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean)

GET response data structure:

```json
        {
            "category": "Entertainment: Books",
            "type": "boolean",
            "difficulty": "hard",
            "question": "Harry Potter was born on July 31st, 1980.",
            "correct_answer": "True",
            "incorrect_answers": [
                "False"
            ]
        },
```

This app is specific to `type: "boolean"` questions. each trivia question-answer object
has a member for the correct answer and a member for the incorrect *answers*.

### UI

The game's flow is as follows:

Start screen --> Question 1. screen ... Question 10. screen -->  Results screen.

3 screens are required.





