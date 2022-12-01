using mobile_app_messaging_module.Controllers;
using mobile_app_messaging_module.Managers;
using mobile_app_messaging_module.DataModels;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using Microsoft.Extensions.Logging;
using Moq;
using Microsoft.AspNetCore.Mvc;

namespace AnnouncementController_Test
{
    public class AnnouncementControllerTest : AnnouncementControllerTestBase
    {
        [Fact]
        public void GetOne_Should_Call_AnnouncementManager_GetOne_With_AnnouncementId()
        {
            CreateController();

            // Call method with mock data.
            var mockAnnouncementId = 42;
            announcementController.GetOne(mockAnnouncementId);

            // Verify that method was called with appropriate params within the method that you are testing.
            AnnouncementManagerMock.Verify(s => s.GetOne(mockAnnouncementId));
        }

        [Fact]
        public void GetOne_Should_Get_Announcement_With_AnnouncementId()
        {
            CreateController();

            // Call method with mock data and verify that it is returning the correct data.
            var result = announcementController.GetOne(42).Value?.ToString();
            var mockAnnouncementData = new JsonResult(MockAnnouncement).Value?.ToString();

            Assert.Equal(result, mockAnnouncementData);
        }
    }
}