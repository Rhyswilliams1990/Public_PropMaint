using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using PropMaint.Common.Interfaces.Services;
using PropMaint.Common.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PropMaint.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : Controller
    {
        private readonly IPeopleService peopleService;

        public PeopleController(IPeopleService peopleService)
        {
            this.peopleService = peopleService;
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
        public async Task<ActionResult<IEnumerable<Person>>> Get()
        {
            return Ok(await peopleService.GetPeople());
        }
    }
}
