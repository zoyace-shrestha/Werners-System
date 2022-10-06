using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace mobile-app-messaging-module.Controllers
{
    [Route("[controller]")]
    [ApiController]

public class AnnouncementsController : AnnouncementController
{
    private readonly IAnnouncementHelper _announcementHelper;

    public AnnouncementsController(IAnnouncementHelper announcementHelper)
    {
        _announcementHelper = announcementHelper;
    }

    [HttpGet("")]
    public async Task<IAnnouncementResult> GetAllAnnouncements()
    {
        var announcements = await _announcementHelper.GetAllAnnouncementsAsync();
        return OK(announcements);
    }
}
}
