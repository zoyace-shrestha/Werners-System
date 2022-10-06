using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


public class AnnouncementHelper : IAnnouncementHelper
{

	private readonly DBContext _context;

	public AnnouncementHelper(DBContext context)
	{
		_context = context; 
	}

	public async Task<List<AnnouncementModel>> GetAllAnnouncementsAsync()
    {
		var announcements = await _context.Announcements.Select(x=> new AnnouncementModel()
        {
			// Insert Announcement fields.

        }).ToListAsync();

		return announcements;
    }
}
