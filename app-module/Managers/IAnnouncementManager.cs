using mobile_app_messaging_module.DataModels;

public interface IAnnouncementManager
{
    public List<Announcement>? GetList(GetAnnouncementsModel getAnnouncementsModel);

    public Announcement? GetOne(int announcementID);

    public int Delete(int announcementID);

    public Announcement Create(Announcement announcement);

    public Announcement Update(Announcement announcement);

    public bool shouldBroadcastAnnouncement(Announcement announcement);
}