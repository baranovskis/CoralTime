using CoralTime.BL.Interfaces;
using CoralTime.Common.Attributes;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using static CoralTime.Common.Constants.Constants.Routes;

namespace CoralTime.Api.v1
{
    [Route(BaseControllerRoute)]
    [ServiceFilter(typeof(CheckSecureHeaderNotificationFilter))]
    public class NotificationsController : BaseController<NotificationsController, INotificationService>
    {
        private readonly IConfiguration _config;

        public NotificationsController(INotificationService service, ILogger<NotificationsController> logger, IConfiguration config)
            : base(logger, service)
        {
            _config = config;
        }

        [HttpGet]
        [Route(ByProjectSettingsRoute)]
        public async Task<IActionResult> ByProjectSettings()
        {
            await _service.ByProjectSettingsAsync(_config["BaseUrl"]);
            return Ok();
        }

        [HttpGet]
        [Route(SendWeeklyTimeEntryUpdatesRoute)]
        public async Task<IActionResult> SendWeeklyTimeEntryUpdates()
        {
            await _service.SendWeeklyTimeEntryUpdatesAsync(_config["BaseUrl"]);
            return Ok();
        }
    }
}