using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

public class aruizContext : IdentityDbContext<ApplicationUser>
    {
        public aruizContext(DbContextOptions<aruizContext> options)
            : base(options)
        {
        }

      //  public DbSet<Announcements> Announcements { get; set; }
    }
