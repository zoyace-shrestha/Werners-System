using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using mobile_app_messaging_module.DataModels;
using mobile_app_messaging_module.Managers;
namespace mobile_app_messaging_module.Controllers
{

    [Route("[controller]")]
    [ApiController]
    public class AnnouncementController : ControllerBase
    {
        private readonly aruizContext _context;
        private readonly AnnouncementManager announcementManager;

        public AnnouncementController( aruizContext context )
        {
            _context = context;
            announcementManager = new AnnouncementManager(context);
        }

        [HttpPost("getAnnouncements")]
        public JsonResult GetAnnouncements([FromBody()] GetAnnouncementsModel getAnnouncementsModel)
        {
            return new JsonResult(announcementManager.GetList(getAnnouncementsModel));
        }

        [HttpGet("{announcementId}")]
        public JsonResult GetOne(int announcementId)
        {
            return new JsonResult(announcementManager.GetOne(announcementId));
        }

        [HttpDelete("delete/{announcementId}")]
        public JsonResult Delete(int announcementId)
        {
            var deleteCount = announcementManager.Delete(announcementId);
            return new JsonResult(new { deleteCount = deleteCount });
        }

        [HttpPost("create")]
        public JsonResult Create([FromBody()] Announcement announcement)
        {
            announcementManager.Create(announcement);
            return new JsonResult(announcement);
        }

        [HttpPost("update")]
        public JsonResult Update([FromBody()] Announcement announcement)
        {
            announcementManager.Update(announcement);
            return new JsonResult(announcement);
        }

        [HttpPost("reorder")]
        public JsonResult Reorder([FromBody()] List<Announcement> announcements)
        {
            announcementManager.Reorder(announcements);
            return new JsonResult(announcements);
        }

    }
}