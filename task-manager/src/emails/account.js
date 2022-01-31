const sgMail = require("@sendgrid/mail");

// const sendgridAPIKey =
//   "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";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "gimhanravi@gmail.com",
    subject: "This is subject",
    text: `Welcome ${name}.`,
  });
  // .then(() => {
  //   console.log("Message sent");
  // })
  // .catch((error) => {
  //   console.log(error.response.body);
  // });
};

const cancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "gimhanravi@gmail.com",
    subject: "This is subject",
    text: `Good Bye! ${name}.`,
  });
  // .then(() => {
  //   console.log("Message sent");
  // })
  // .catch((error) => {
  //   console.log(error.response.body);
  // });
};

module.exports = {
  sendWelcomeEmail,
  cancelationEmail,
};
