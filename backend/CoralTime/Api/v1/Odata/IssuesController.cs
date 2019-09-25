using AutoMapper;
using CoralTime.BL.Interfaces;
using Microsoft.AspNet.OData;
using Microsoft.AspNet.OData.Routing;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using static CoralTime.Common.Constants.Constants.Routes;
using static CoralTime.Common.Constants.Constants.Routes.OData;

namespace CoralTime.Api.v1.Odata
{
    [Route(BaseODataControllerRoute)]
    [Authorize]
    public class IssuesController : BaseODataController<IssuesController, IIssuesService>
    {
        public IssuesController(IIssuesService service, IMapper mapper, ILogger<IssuesController> logger)
            : base(logger, mapper, service) { }


        // GET: api/v1/odata/Issues
        [HttpGet]
        public IActionResult Get() => new ObjectResult(_service.GetIssues());
    }
}