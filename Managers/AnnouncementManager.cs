using mobile_app_messaging_module.DataModels;

namespace mobile_app_messaging_module.Managers
{
    public class AnnouncementManager
    {
        private readonly aruizContext _context;
        public AnnouncementManager(aruizContext context)
        {
            _context = context;
        }


        public Annoucement GetOne(int announcementID)
        {
            return new Annoucement();
        }

        public List<Annoucement> GetAll()
        {

            var announcements = _context.Announcements.Select(x => new Annoucement()
            {
                idAnnoucements = x.idAnnoucements,
                title = x.title,
                description = x.description,
                type = x.type,
                link = x.link,
                background = x.background,
                publishDate = x.publishDate,
                expirationDate = x.expirationDate,
                checkSum = x.checkSum

            }).ToList();

            return announcements;
        }

        public List<Annoucement> GetActive()
        {
            return new List<Annoucement>();
        }

        public Annoucement Delete(int announcementID)
        {
            var announcement = new Annoucement();
            announcement.idAnnoucements = announcementID;
            _context.Remove(announcement);
            _context.SaveChanges();
            return announcement;
        }

        public Annoucement Create(Annoucement annoucement)
        {
            var newAnnouncement = new Annoucement
            {
                title = annoucement.title,
                description = annoucement.description,
                type = annoucement.type,
                link = annoucement.link,
                background = annoucement.background,
                publishDate = annoucement.publishDate,
                expirationDate = annoucement.expirationDate,
                checkSum = "0" // Hash Method Here
            };

            // TODO: Add announcement validation information here
            // Ask Sponsors what fields are required for an announcement to be valid

            _context.Entry(newAnnouncement).State = Microsoft.EntityFrameworkCore.EntityState.Added;
            _context.SaveChanges();
            return newAnnouncement;
        }

        public Annoucement Save(Annoucement annoucement)
        {
            return new Annoucement();
        }

    }
}
