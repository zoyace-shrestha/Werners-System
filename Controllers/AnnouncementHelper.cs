using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using mobile_app_messaging_module.DataModels;

namespace mobile_app_messaging_module.Helpers
{
	public class AnnouncementHelper
	{

		private readonly aruizContext _context;

		public AnnouncementHelper(aruizContext context)
		{
			_context = context;
		}

		//public AnnouncementHelper() { }

		//public List<Annoucement> GetAllAnnouncements()
		//{
		//	var context = new aruizContext();
		//	var announcements = context.Announcements.Select(x => new Annoucement()
		//	{
		//		 Insert Announcement fields.


		//	}).ToList();

		//	var announcements = new List<Annoucement>();

		//	return announcements;
		//}
	}
}