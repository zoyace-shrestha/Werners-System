using System.ComponentModel.DataAnnotations;

namespace mobile_app_messaging_module.DataModels
{
    public class SignalRAnnouncementBroadcast
    {
        public BroadcastType broadcastType { get; set; }
        public Announcement announcement { get; set; }
    }

    public enum BroadcastType
    {
        Create,
        Update,
        Delete
    }

}