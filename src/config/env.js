require("dotenv").config();

const environment_variables = {
  assistantId: process.env.ASSISTANT_ID,
  iamApikey: process.env.ASSISTANT_IAM_APIKEY,
  url: process.env.ASSISTANT_IAM_URL,
  version: "2019-07-01",
  port: process.env.PORT
};

module.exports = environment_variables;
