using Microsoft.AspNetCore.Mvc;
using EmployeeApi.Models;
 
using Microsoft.EntityFrameworkCore;
using EmployeeApis.Data;


namespace EmployeeApi.Controller
{
   
        [Route("api/[controller]")]
        [ApiController]
        public class EmployeesController : ControllerBase
        {
            private readonly AppDbContext _context;

            public EmployeesController(AppDbContext context)
            {
                _context = context;
            }
        // GET: api/employees
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Employee>>> GetEmployees()
        {
            return await _context.Employees.ToListAsync();
        }

    }
}
