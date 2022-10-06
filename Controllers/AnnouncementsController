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
    private readonly IAnnouncementRepo _announcementRepo;

    public AnnouncementsController(IAnnouncementRepo announcementRepo)
    {
        _announcementRepo = announcementRepo;
    }

    [HttpGet("")]
    public async Task<IAnnouncementResult> GetAllAnnouncements()
    {
        var announcements = await _announcementRepo.GetAllAnnouncementsAsync();
        return OK(announcements);
    }
}
}
