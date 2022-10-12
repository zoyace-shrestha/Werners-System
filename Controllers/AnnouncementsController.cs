using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using mobile_app_messaging_module.DataModels;

namespace mobile_app_messaging_module.Controllers
{

    [Route("[controller]")]
    [ApiController]

    public class AnnouncementsController : ControllerBase
        {
        private readonly AnnouncementHelper _announcementHelper;

        public AnnouncementsController(AnnouncementHelper announcementHelper)
        {
            _announcementHelper = announcementHelper;
        }

        [HttpGet("")]
        public List<Annoucement> GetAllAnnouncements()
        {
            var announcements = _announcementHelper.GetAllAnnouncementsAsync();
            return announcements;
        }
        //[HttpGet("")]
        //public List<Annoucement> GetAllAnnouncements()
        //{
        //    var announcements = await _announcementHelper.GetAllAnnouncementsAsync();
        //    return OK(announcements);
        //}

    }
}
