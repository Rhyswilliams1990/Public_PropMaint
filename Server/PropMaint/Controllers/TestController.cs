using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PropMaint.Common.Interfaces.Services;
using PropMaint.Common.Models;

namespace PropMaint.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        private readonly ITestService testService;

        public TestController(ITestService testService)
        {
            this.testService = testService;
        }

        [HttpOptions("{id}")]
        public IActionResult PreflightRoute(int id)
        {
            return NoContent();
        }

        [HttpOptions]
        public IActionResult PreflightRoute()
        {
            return NoContent();
        }

        [Authorize]
        [EnableCors]
        [HttpGet]
        public ActionResult<TestData> Get()
        {
            return Ok(testService.Test());
        }
    }
}