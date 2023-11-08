export default {
  email: {
    enabled: true,
    config: {
      provider: "sendmail",
      settings: {
        defaultFrom: "daan@ef2.nl",
        defaultReplyTo: "daan@ef2.nl",
        testAddress: "daan@ef2.nl",
      },
    },
  },
  "api-forms": {
    enabled: true,
    resolve: "./src/plugins/api-forms",
  },
};
