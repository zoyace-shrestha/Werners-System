namespace mobile_app_messaging_module.DataModels
{
    public class Annoucement
    {
        public int? announcementId { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? Type { get; set; }
        public string? Link { get; set; }
        public string? Background { get; set; }
        public DateOnly? PublishDate { get; set; }
        public DateOnly? ExpirationDate { get; set; }
        public string? CheckSum { get; set; }

    }
}
