using mobile_app_messaging_module.Controllers;
using mobile_app_messaging_module.Managers;
using mobile_app_messaging_module.DataModels;
using Moq;
using System;

namespace AnnouncementController_Test
{
    public class AnnouncementControllerTestBase
    {
        protected AnnouncementController announcementController { get; set; }

        protected Mock<IAnnouncementManager> AnnouncementManagerMock { get; set; }

        public AnnouncementControllerTestBase()
        {
            AnnouncementManagerMock = new Mock<IAnnouncementManager>();
            AnnouncementManagerMock
                .Setup(s => s.GetOne(It.IsAny<int>()))
                .Returns(MockAnnouncement);
        }

        protected void CreateController()
        {
            announcementController = new AnnouncementController(
                AnnouncementManagerMock.Object);
        }

        public Announcement MockAnnouncement
        {
            get
            {
                return new Announcement()
                {
                    idannouncements = 25
                };
            }
        }
    }
}