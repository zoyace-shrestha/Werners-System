using mobile_app_messaging_module.DataModels;

namespace mobile_app_messaging_module.Managers
{
    public class AnnouncementManager : IAnnouncementManager
    {
        private readonly aruizContext _context;
        public AnnouncementManager(aruizContext context)
        {
            _context = context;
        }


        public Announcement? GetOne(int announcementID)
        {
            var announcement = _context.Announcements.Where(e => e.idAnnouncements == announcementID).FirstOrDefault();
            return announcement;
        }

        public List<Announcement> GetAll()
        {

            var announcements = _context.Announcements.Select(x => new Announcement()
            {
                idAnnouncements = x.idAnnouncements,
                title = x.title,
                description = x.description,
                type = x.type,
                link = x.link,
                background = x.background,
                publishDate = x.publishDate,
                expirationDate = x.expirationDate,
                isDraft = x.isDraft,
            }).ToList();

            return announcements;
        }

        public List<Announcement>? GetActive()
        {
            var announcements = _context.Announcements.Where(e => e.publishDate < DateTime.Now && e.expirationDate > DateTime.Now).ToList();
            return announcements;
        }

        public int Delete(int announcementID)
        {

            var announcementCount = _context.Announcements.Where(e => e.idAnnouncements == announcementID).Count();

            if (announcementCount > 0)
            {
                var announcement = new Announcement();
                announcement.idAnnouncements = announcementID;
                _context.Remove(announcement);
                _context.SaveChanges();
            }

            return announcementCount;
        }

        public Announcement Create(Announcement announcement)
        {


            // TODO: Add announcement validation information here
            // Ask Sponsors what fields are required for an announcement to be valid

            // _context.Entry(announcement).State = Microsoft.EntityFrameworkCore.EntityState.Added;
            _context.Add(announcement);
            _context.SaveChanges();
            _context.Entry(announcement).State = Microsoft.EntityFrameworkCore.EntityState.Detached;
            _context.SaveChanges();
            return announcement;
        }


        public Announcement Update(Announcement announcement)
        {


            // TODO: Add announcement validation information here
            // Ask Sponsors what fields are required for an announcement to be valid

            _context.Update(announcement);
            _context.SaveChanges();
            return announcement;
        }
    }
}