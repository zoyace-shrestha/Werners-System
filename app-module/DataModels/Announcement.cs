using System.ComponentModel.DataAnnotations;

namespace mobile_app_messaging_module.DataModels
{
    public class Announcement
    {
        [Key]
        public int idAnnouncements { get; set; }
        public string? title { get; set; }
        public string? description { get; set; }
        public string? type { get; set; }
        public string? link { get; set; }
        public string? background { get; set; }
        public DateTime? publishDate { get; set; }
        public DateTime? expirationDate { get; set; }
        public Boolean? isDraft { get; set; }
        public int? priority { get; set; }
    }
}
