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
            var query = from a in _context.Announcements
                        orderby a.priority
                        select a;
            
            
            var announcements = query.ToList();

        

            // Remove the announcements if they do not fit the date parameters

            if(!getAnnouncementsModel.includePrevious) { announcements.RemoveAll(isPrevious); }

            if(!getAnnouncementsModel.includeActive) { announcements.RemoveAll(isActive); }

            if(!getAnnouncementsModel.includeFuture) { announcements.RemoveAll(isFuture); }

            // Remove the announcements if they do not fit the publish parameters

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
            _context.Add(announcement);
            _context.SaveChanges();
            _context.Entry(announcement).State = Microsoft.EntityFrameworkCore.EntityState.Detached;
            _context.SaveChanges();
            return announcement;
        }


        public Announcement Update(Announcement announcement)
        {
            _context.Update(announcement);
            _context.SaveChanges();
            return announcement;
        }

        public List<Announcement> Reorder(List<Announcement> announcements)
        {
            _context.UpdateRange(announcements);
            _context.SaveChanges();
            return announcements;
        }

    }
}