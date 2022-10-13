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
            return new Annoucement();
        }

        public Annoucement Save(Annoucement annoucement)
        {
            return new Annoucement();
        }

    }
}
