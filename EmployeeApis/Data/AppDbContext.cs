﻿using EmployeeApi.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
namespace EmployeeApis.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Employee> Employees { get; set; }
         
    }

}
