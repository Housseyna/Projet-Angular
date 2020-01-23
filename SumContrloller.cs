using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace appNbAPI.Controllers
{

    [ApiController]
    [Route("api/[controller]")]


    public class SumController : ControllerBase
        {
                // Get api/values
                [HttpGet]
                public ActionResult<int>Get([FromQuery] int a, [FromQuery] int b)
                    {
                        
                        return (a + b);
                    }
        }

        //public ActionResult<IEnumerable<string>> Get()
       // {
        //    return new string[] { "value1", "value2" };
       // }

        // Other code omitted...
  
}