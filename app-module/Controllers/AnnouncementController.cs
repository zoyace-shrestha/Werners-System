using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using mobile_app_messaging_module.DataModels;
using mobile_app_messaging_module.Managers;

namespace mobile_app_messaging_module.Controllers
{

    [Route("[controller]")]
    [ApiController]
    public class AnnouncementController : ControllerBase
    {
        private readonly IHubContext<BroadcastHub> _hubContext;
        private readonly aruizContext _context;
        private readonly AnnouncementManager announcementManager;

        public AnnouncementController( IHubContext<BroadcastHub> hubContext, aruizContext context )
        {
            _hubContext = hubContext;
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

            int deleteCount = 0;
            try
            {
                deleteCount = announcementManager.Delete(announcementId);
                if (deleteCount > 0)
                {
                    SignalRAnnouncementBroadcast signalRAnnouncementBroadcast = new SignalRAnnouncementBroadcast();
                    signalRAnnouncementBroadcast.broadcastType = BroadcastType.Delete;
                    Announcement announcement = new Announcement();
                    announcement.idAnnouncements = announcementId;
                    signalRAnnouncementBroadcast.announcement = announcement;
                    _hubContext.Clients.All.SendAsync("Created", signalRAnnouncementBroadcast);
                }
            }
            catch
            {
                throw;
            }

            return new JsonResult(new { deleteCount = deleteCount });
        }

        [HttpPost("create")]
        public JsonResult Create([FromBody()] Announcement announcement)
        {
            try
            {
                announcementManager.Create(announcement);
                if (announcementManager.shouldBroadcastAnnouncement(announcement))
                {
                    SignalRAnnouncementBroadcast signalRAnnouncementBroadcast = new SignalRAnnouncementBroadcast();
                    signalRAnnouncementBroadcast.broadcastType = BroadcastType.Create;
                    signalRAnnouncementBroadcast.announcement = announcement;
                    _hubContext.Clients.All.SendAsync("Created", signalRAnnouncementBroadcast);
                }
            }
            catch
            {
                throw;
            }

            return new JsonResult(announcement);
        }

        [HttpPost("update")]
        public JsonResult Update([FromBody()] Announcement announcement)
        {
            try
            {
                announcementManager.Update(announcement);
                if (announcementManager.shouldBroadcastAnnouncement(announcement))
                {
                    SignalRAnnouncementBroadcast signalRAnnouncementBroadcast = new SignalRAnnouncementBroadcast();
                    signalRAnnouncementBroadcast.broadcastType = BroadcastType.Update;
                    signalRAnnouncementBroadcast.announcement = announcement;
                    _hubContext.Clients.All.SendAsync("Created", signalRAnnouncementBroadcast);
                }
            }
            catch
            {
                throw;
            }

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