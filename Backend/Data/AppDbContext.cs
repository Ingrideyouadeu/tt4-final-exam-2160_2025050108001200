using Microsoft.EntityFrameworkCore;
using StudentAttendanceApi.Models;

namespace StudentAttendanceApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<StudentAttendance> StudentAttendances { get; set; }
    }
}
