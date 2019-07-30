const AssistantV2 = require("ibm-watson/assistant/v2");

const watsonAssistant = new AssistantV2({
  version: '',
  iam_apikey: '',
  url: ''
});

module.exports = watsonAssistant;
