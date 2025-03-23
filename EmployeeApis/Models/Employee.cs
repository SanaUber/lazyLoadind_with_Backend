using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
namespace EmployeeApi.Models
{
    public class Employee
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Range(0, double.MaxValue, ErrorMessage = "Salary must be positive.")]
        public decimal Salary { get; set; }

        
    }
}
