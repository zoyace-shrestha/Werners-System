using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using mobile_app_messaging_module.DataModels;
using mobile_app_messaging_module.Helpers;

namespace mobile_app_messaging_module.Controllers
{

    [Route("[controller]")]
    [ApiController]

    public class AnnouncementsController : ControllerBase
    {
        //private readonly Helpers.AnnouncementHelper _announcementHelper;
        private readonly aruizContext _context;

        //public AnnouncementsController(Helpers.AnnouncementHelper announcementHelper)
        //{
        //    _announcementHelper = announcementHelper;
        //}

        public AnnouncementsController(aruizContext context)
        {
            _context = context;
        }

        //private readonly IConfiguration configuration; 

        //public AnnouncementsController(IConfiguration config) { 
        //    configuration = config;
        //}

        [HttpGet("")]
        public List<Annoucement> GetAllAnnouncements()
        {
            //var announcementHelper = new AnnouncementHelper();
            //var announcements = announcementHelper.GetAllAnnouncements();

            var announcements = _context.Announcements.Select(x => new Annoucement()
            {
                idAnnoucements = x.idAnnoucements,
                title = x.title,
                description = x.description,
                type = x.type,
                link = x.link,
                background = x.background,
                publishDate = x.publishDate,
                expirationDate = x.expirationDate,
                checkSum = x.checkSum

            }).ToList();

            return announcements;
        }

        [HttpGet("test")]
        public JsonResult test()
        {
            return new JsonResult(new { message = "test" });
            //return new JsonResult(new { message = "test", config = configuration, connectionString = configuration.GetConnectionString("aruiz")});
        }

    }
}
