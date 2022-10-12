using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using mobile_app_messaging_module.DataModels;

public class AnnouncementHelper : IAnnouncementHelper
{

	private readonly aruizContext _context;

	public AnnouncementHelper(aruizContext context)
	{
		_context = context; 
	}

	public List<Annoucement> GetAllAnnouncementsAsync()
    {
		var announcements = _context.Announcements.Select(x => new Annoucement()
		{
			// Insert Announcement fields.

		}).ToList();

		return announcements;
    }
}
