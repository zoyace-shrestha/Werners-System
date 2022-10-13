using System.ComponentModel.DataAnnotations;

namespace mobile_app_messaging_module.DataModels
{
    public class Annoucement
    {
        [Key]
        public int idAnnoucements { get; set; }
        public string? title { get; set; }
        public string? description { get; set; }
        public string? type { get; set; }
        public string? link { get; set; }
        public string? background { get; set; }
        public DateOnly? publishDate { get; set; }
        public DateOnly? expirationDate { get; set; }
        public string? checkSum { get; set; }

    }
}
