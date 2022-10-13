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



        /*
         
         * GetOne - Updating an annoucement 
         * /update/{id}
         * 
         * GetActive - Drivers
         * 
         * GetAll - Admin
         * Initial Annoucements
         * 
         * Delete
         * /delete/{id}
         * 
         * Save (Update / Create)
         * 
         * Reorder

         */

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
            announcementManager.Delete(announcementId);
            // Return the number of rows deleted (hopefully just one...)
            return new JsonResult( new { announcementId = announcementId });
        }

        [HttpPost("")]
        public JsonResult Save([FromBody()] Annoucement announcement)
        {
            announcementManager.Save(announcement);
            return new JsonResult(announcement);
        }
    }
}
