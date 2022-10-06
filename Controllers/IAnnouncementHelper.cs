using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

public interface IAnnouncementHelper
{
    Task<List<AnnouncementModel>> GetAllAnnouncementsAsync();
}
