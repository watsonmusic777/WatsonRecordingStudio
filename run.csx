#r "System.Net"
#r "System.Net.Mail"

using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

public static async Task<object> Run(HttpRequestMessage req, TraceWriter log)
{
    log.Info("Contact form received.");

    // Read form data
    var data = await req.Content.ReadAsFormDataAsync();

    string name = data["name"];
    string email = data["email"];
    string type = data["type"];
    string message = data["message"];

    // Build email body
    string body = 
        $"New Contact Form Submission:\n\n" +
        $"Name: {name}\n" +
        $"Email: {email}\n" +
        $"Inquiry Type: {type}\n\n" +
        $"Message:\n{message}";

    // SMTP settings (Zoho)
    var client = new SmtpClient("smtp.zoho.com", 587)
    {
        Credentials = new NetworkCredential("booking@watsonrecordingstudio.com", "Jolly$7890"),
        EnableSsl = true
    };

    // Build email
    var mail = new MailMessage();
    mail.From = new MailAddress("booking@watsonrecordingstudio.com");
    mail.To.Add("booking@watsonrecordingstudio.com");
    mail.Subject = "New Contact Form Submission";
    mail.Body = body;

    // Send email
    client.Send(mail);

    // Return success
    return req.CreateResponse(HttpStatusCode.OK, "Message sent successfully.");
}
