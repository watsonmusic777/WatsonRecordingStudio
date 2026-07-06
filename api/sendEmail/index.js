const { EmailClient } = require("@azure/communication-email");

module.exports = async function (context, req) {
    try {
        const client = new EmailClient(process.env.ACE_CONNECTION_STRING);

        const message = {
            senderAddress: "<YOUR-SENDER-EMAIL>",
            content: {
                subject: req.body.subject,
                plainText: req.body.message
            },
            recipients: {
                to: [
                    { address: "<YOUR-RECEIVING-EMAIL>" }
                ]
            }
        };

        const poller = await client.beginSend(message);
        const result = await poller.pollUntilDone();

        context.res = {
            status: 200,
            body: { success: true, result }
        };
    } catch (err) {
        context.res = {
            status: 500,
            body: { success: false, error: err.message }
        };
    }
};
