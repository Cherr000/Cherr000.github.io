using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using PakengTest.Models;
using System.Net;
using System.Net.Mail;

namespace PakengTest.Controllers
{
    public class HomeController : Controller
    {
        public async System.Threading.Tasks.Task<ActionResult> Index(EmailFormModel model)
        {
            if (ModelState.IsValid)
            {
                var body = "<p>Email From: {0} ({1})</p><p>Message:</p><p>{2}</p>";
                var message = new MailMessage();
                message.To.Add(new MailAddress("chuhawj000@gmail.com"));  // replace with valid value 
                message.From = new MailAddress("chuhawj000@gmail.com");  // replace with valid value
                message.Subject = "Your email subject";
                message.Body = string.Format(body, model.FromName, model.FromEmail, model.Message);
                message.IsBodyHtml = true;

                using (var smtp = new SmtpClient())
                {
                    var credential = new NetworkCredential
                    {
                        UserName = "chuhawj000@gmail.com",  // replace with valid value
                        Password = "Dwedwe1234@"  // replace with valid value
                    };
                    smtp.Credentials = credential;
                    smtp.Host = "smtp.gmail.com";
                    smtp.Port = 587;
                    smtp.EnableSsl = true;


                    await smtp.SendMailAsync(message);
                    TempData["AlertMessage"] = "Your message has been sent. We will get back to you as soon as possible. Thank You";
                    return View();
                    //var script = "$('#message').html('Message from Server');";
                    //return JavaScript(script);
                }
            }
            return View(model);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}