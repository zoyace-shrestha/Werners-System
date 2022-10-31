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


        public Annoucement? GetOne(int announcementID)
        {
            var announcement = _context.Announcements.Where(e => e.idAnnoucements == announcementID).FirstOrDefault();
            return announcement;
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
                isDraft = x.isDraft,
            }).ToList();

            return announcements;
        }

        public List<Annoucement>? GetActive()
        {
            var announcements = _context.Announcements.Where(e => e.publishDate < DateTime.Now && e.expirationDate > DateTime.Now).ToList();
            return announcements;
        }

        public int Delete(int announcementID)
        {

            var announcementCount = _context.Announcements.Where(e => e.idAnnoucements == announcementID).Count();

            if (announcementCount > 0)
            {
                var announcement = new Annoucement();
                announcement.idAnnoucements = announcementID;
                _context.Remove(announcement);
                _context.SaveChanges();
            }

            return announcementCount;
        }

        public Annoucement Create(Annoucement annoucement)
        {
         

            // TODO: Add announcement validation information here
            // Ask Sponsors what fields are required for an announcement to be valid

            _context.Entry(annoucement).State = Microsoft.EntityFrameworkCore.EntityState.Added;
            _context.SaveChanges();
            return annoucement;
        }


        public Annoucement Update(Annoucement annoucement)
        {
 

            // TODO: Add announcement validation information here
            // Ask Sponsors what fields are required for an announcement to be valid

            _context.Update(annoucement);
            _context.SaveChanges();
            return annoucement;
        }
    }
}
