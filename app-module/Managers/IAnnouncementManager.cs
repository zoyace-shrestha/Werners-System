using mobile_app_messaging_module.DataModels;

public interface IAnnouncementManager
{
    public Announcement? GetOne(int announcementID);

    public List<Announcement> GetAll();

    public List<Announcement>? GetActive();

    public int Delete(int announcementID);

    public Announcement Create(Announcement announcement);

    public Announcement Update(Announcement announcement);
}