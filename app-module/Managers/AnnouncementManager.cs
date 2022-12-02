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

        public List<Announcement>? GetList(GetAnnouncementsModel getAnnouncementsModel)
        {
            // Retrieve all of the announcements
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

            // Remove the announcements if they do not fit the request parameters

            if(!getAnnouncementsModel.includePrevious) { announcements.RemoveAll(isPrevious); }

            if(!getAnnouncementsModel.includeActive) { announcements.RemoveAll(isActive); }

            if(!getAnnouncementsModel.includeFuture) { announcements.RemoveAll(isFuture); }

            // Looking for both draft and published announcements

            if(!getAnnouncementsModel.includeDraft) { announcements.RemoveAll(isDraft); }

            if(!getAnnouncementsModel.includePublished) { announcements.RemoveAll(isPublished); }

            return announcements;
        }

        private static bool isDraft(Announcement announcement)
        {
            return announcement.isDraft == true;
        }

        private static bool isPublished(Announcement announcement)
        {
            return announcement.isDraft == false;
        }

        private static bool isPrevious(Announcement announcement)
        {
            return announcement.expirationDate < DateTime.Now && announcement.expirationDate != new DateTime(1970, 1, 1);
        }

        private static bool isActive(Announcement announcement)
        {
            return announcement.publishDate < DateTime.Now && (announcement.expirationDate > DateTime.Now || announcement.expirationDate == new DateTime(1970, 1, 1));
        }

        private static bool isFuture(Announcement announcement)
        {
            return announcement.publishDate > DateTime.Now;
        }


        public Announcement? GetOne(int announcementID)
        {
            var announcement = _context.Announcements.Where(e => e.idAnnouncements == announcementID).FirstOrDefault();
            return announcement;
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