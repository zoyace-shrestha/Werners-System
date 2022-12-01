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
        // private readonly IAnnouncementManager AnnouncementManager;

        private readonly aruizContext _context;
        private readonly AnnouncementManager announcementManager;

        public AnnouncementController( aruizContext context )
        {
            _context = context;
            announcementManager = new AnnouncementManager(context);
        }


        [HttpGet("{announcementId}")]
        public JsonResult GetOne(int announcementId)
        {
            return new JsonResult(announcementManager.GetOne(announcementId));
        }


        [HttpGet("getAll")]
        public JsonResult GetAll()
        {
            return new JsonResult(announcementManager.GetAll());
        }


        [HttpGet("getActive")]
        public JsonResult GetActive()
        {
            return new JsonResult(announcementManager.GetActive());
        }

        [HttpDelete("delete/{announcementId}")]
        public JsonResult Delete(int announcementId)
        {
            var deleteCount = announcementManager.Delete(announcementId);
            // Return the number of rows deleted (hopefully just one...)
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

    }
}