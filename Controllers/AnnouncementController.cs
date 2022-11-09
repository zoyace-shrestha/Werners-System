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

        public AnnouncementController(aruizContext context)
        {
            _context = context;
            announcementManager = new AnnouncementManager(context);
        }


        [HttpGet("{annoucementId}")]
        public JsonResult GetOne(int annoucementId)
        {
            return new JsonResult(announcementManager.GetOne(annoucementId));
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
            return new JsonResult( new { deleteCount = deleteCount });
        }

        [HttpPost("create")]
        public JsonResult Create([FromBody()] Annoucement announcement)
        {
            announcementManager.Create(announcement);
            return new JsonResult(announcement);
        }


        [HttpPost("update")]
        public JsonResult Update([FromBody()] Annoucement announcement)
        {
            announcementManager.Update(announcement);
            return new JsonResult(announcement);
        }

        /*
         * Test Endpoint used to generate test announcements
         * Remove when complete
         */
        [HttpGet("generateTitles")]
        public JsonResult generateTitles()
        {
            var list = new List<Annoucement>();
            var tomorrow = DateTime.Now;
            tomorrow.AddDays(1);
            var ann = new Annoucement()
            {
                title = "Title",
                description = "Description",
                type = "Type",
                link = "Link",
                background = "Background",
                publishDate = DateTime.Now,
                expirationDate = tomorrow,
                isDraft = true,
            };
            list.Add(ann);
            _context.AddRange(list);
            _context.SaveChanges();
            return new JsonResult(list);
        }

    }
}
