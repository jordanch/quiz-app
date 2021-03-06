# What is this?

This is my repo for the g2i React assessment. It is a 10 question trivia app. Find the assessment [here](https://gist.github.com/severnsc/e09f4f8742b7dd91af9c422d6f210a57)

# How is this app assessed?

The code and functionality will be assessed on the following criteria:

- Functionality
- Code Format
- Project Structure
- Scalability
- Maintainability
- Use of industry best practices

# What is provided?

- wireframes
- functional requirement
- API endpoint to fetch trivia data

# What needs developing?

See REQUIREMENTS.md for a basic understanding (was created for me to flesh out requirements)

# What is missing / can be impproved?

- There is no error handling for the API request. The code and UI should handle network or server error properly.
- There are some hard assumptions in the code, such as that there will always be 10 question-answer pairs.
- Route guarding (logic around when the user should be redirected) could be improved
- Testing is limited to
    - snapshots of presentational components
    - end-to-end testing of the application
- Testing could improve if the following were tested:
    - State management and reducers
    - Improve end-to-end tests with mock data that can be asserted
- The app could benefit from further styling to make it more "productised"; some styles are in stylesheets and some are taking advantage of material-ui's withStyles utility which injects into <head>. With more time I'd like to use styled-components across the board, to contain style and behaviour.

# Setup

Note: Developed and tested using Node.js v8.11.1 and NPM v5.6.0 - please use the same versions.

## Install dependencies

1. `cd` into root dir
2. `npm install`

To run development build:

1.  `npm run start` to run development build

Or run production build:

1.  `npm run build` to build for production
2. `cd build`
3. Serve files with webserver from here. I like to use serve. `npm i -g serve` then `serve .`

# Tested on

- Chrome v68 on Mac
- Chrome v68 on iPhone 6

