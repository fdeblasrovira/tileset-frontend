const defaultAttribute = {
  min: "-5",
  max: "5",
  defaultValue: "0",
  leftColor: "#1d3557",
  leftLabel: "Boring",
  rightColor: "#f4f3ee",
  rightLabel: "Amazing",
};

const radioQuestionList = [
  {
    type: "radio",
    question: "What's your favorite movie genre?",
    options: [
      { text: "Action", actions: [] },
      { text: "Romance", actions: [] },
      { text: "Drama", actions: [] },
      { text: "Horror", actions: [] },
      { text: "None of the above", actions: [] },
    ],
  },
  {
    type: "radio",
    question: "How old are you?",
    options: [
      { text: "0 ~ 18 years old", actions: [] },
      { text: "19 ~ 34 years old", actions: [] },
      { text: "35 ~ 49 years old", actions: [] },
      { text: "50 ~ 69 years old", actions: [] },
      { text: "70 ~ 99 years old", actions: [] },
    ],
  },
  {
    type: "radio",
    question: "Gender",
    options: [
      { text: "Male", actions: [] },
      { text: "Female", actions: [] },
      { text: "Other", actions: [] },
    ],
  },
  {
    type: "radio",
    question: "Love is",
    options: [
      { text: "Everything", actions: [] },
      { text: "Very important", actions: [] },
      { text: "Something I look for", actions: [] },
      { text: "Overrated", actions: [] },
      { text: "Unknown to me", actions: [] },
    ],
  },
];

const checkboxQuestionList = [
  {
    type: "checkbox",
    question: "What animals do you like? Select at least one option",
    options: [
      { text: "Dogs", actions: [] },
      { text: "Cats", actions: [] },
      { text: "Horses", actions: [] },
      { text: "Hamsters", actions: [] },
      { text: "Insects", actions: [] },
      { text: "Cows", actions: [] },
      { text: "Reptiles", actions: [] },
      { text: "Dolphins", actions: [] },
      { text: "I don't like animals", actions: [] },
    ],
  },
  {
    type: "checkbox",
    question: "Things I would do on a weekend",
    options: [
      { text: "Play sports", actions: [] },
      { text: "Play videogames", actions: [] },
      { text: "Read books", actions: [] },
      { text: "Hangout with friends", actions: [] },
    ],
  },
  {
    type: "checkbox",
    question: "I have seen",
    options: [
      { text: "Harry Potter", actions: [] },
      { text: "Pirates of the caribbean", actions: [] },
      { text: "Avatar", actions: [] },
      { text: "Frozen", actions: [] },
      { text: "Lord of the rings", actions: [] },
    ],
  },
];

const selectQuestionList = [
  {
    type: "select",
    question: "What country are you from?",
    options: [
      { text: "China", actions: [] },
      { text: "Korea", actions: [] },
      { text: "Germany", actions: [] },
      { text: "Japan", actions: [] },
      { text: "Spain", actions: [] },
      { text: "United States of America", actions: [] },
      { text: "United Kingdom", actions: [] },
      { text: "None of the above", actions: [] },
    ],
  },
  {
    type: "select",
    question: "I was born in",
    options: [
      { text: "70s", actions: [] },
      { text: "80s", actions: [] },
      { text: "90s", actions: [] },
      { text: "I don't want to answer", actions: [] },
    ],
  },
  {
    type: "select",
    question: "Main form of contact",
    options: [
      { text: "Phone call", actions: [] },
      { text: "Email", actions: [] },
      { text: "SMS", actions: [] },
      { text: "Postal service", actions: [] },
      { text: "Don't contact me", actions: [] },
    ],
  },
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const defaultRadioQuestion = function () {
  return radioQuestionList[getRandomInt(radioQuestionList.length)];
};

const defaultCheckboxQuestion = function () {
  return checkboxQuestionList[getRandomInt(checkboxQuestionList.length)];
};

const defaultSelectQuestion = function () {
  return selectQuestionList[getRandomInt(selectQuestionList.length)];
};

export default {
  defaultAttribute,
  defaultRadioQuestion,
  defaultCheckboxQuestion,
  defaultSelectQuestion,
};
