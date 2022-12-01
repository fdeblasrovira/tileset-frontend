const defaultAttribute = {
  min: "-5",
  max: "5",
  defaultValue: "0",
  leftColor: "#1d3557",
  leftLabel: "Boring",
  rightColor: "#f4f3ee",
  rightLabel: "Amazing",
};

const defaultRadioQuestion = {
  type: "radio",
  question: "What's your favorite movie genre?",
  options: [
    { text: "Action", actions: [] },
    { text: "Romance", actions: [] },
    { text: "Drama", actions: [] },
    { text: "Horror", actions: [] },
    { text: "None of the above", actions: [] },
  ],
};

const defaultCheckboxQuestion = {
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
};

const defaultSelectQuestion = {
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
};

export default {
  defaultAttribute,
  defaultRadioQuestion,
  defaultCheckboxQuestion,
  defaultSelectQuestion
};
