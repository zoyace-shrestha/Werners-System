using mobile_app_messaging_module.DataModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

public interface IAnnouncementHelper
{
    List<Annoucement> GetAllAnnouncementsAsync();
}
