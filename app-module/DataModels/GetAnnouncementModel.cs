using System.ComponentModel.DataAnnotations;

namespace mobile_app_messaging_module.DataModels
{
    public class GetAnnouncementsModel
    {
        public Boolean includePrevious { get; set; }
        public Boolean includeActive { get; set; }
        public Boolean includeFuture { get; set; }
        public Boolean includeDraft { get; set; }
        public Boolean includePublished { get; set; }
        public string? searchText { get; set; }
    }
}