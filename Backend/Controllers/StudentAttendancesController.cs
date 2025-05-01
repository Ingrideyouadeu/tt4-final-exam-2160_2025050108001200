using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentAttendanceApi.Data;
using StudentAttendanceApi.Models;

namespace StudentAttendanceApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentAttendancesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public StudentAttendancesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/StudentAttendances
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StudentAttendance>>> GetStudentAttendances()
        {
            return await _context.StudentAttendances.ToListAsync();
        }

        // GET: api/StudentAttendances/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StudentAttendance>> GetStudentAttendance(int id)
        {
            var studentAttendance = await _context.StudentAttendances.FindAsync(id);

            if (studentAttendance == null)
            {
                return NotFound();
            }

            return studentAttendance;
        }

        // POST: api/StudentAttendances
        [HttpPost]
        public async Task<ActionResult<StudentAttendance>> PostStudentAttendance(StudentAttendance studentAttendance)
        {
            _context.StudentAttendances.Add(studentAttendance);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetStudentAttendance), new { id = studentAttendance.ID }, studentAttendance);
        }

        // PUT: api/StudentAttendances/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudentAttendance(int id, StudentAttendance studentAttendance)
        {
            if (id != studentAttendance.ID)
            {
                return BadRequest();
            }

            _context.Entry(studentAttendance).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentAttendanceExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/StudentAttendances/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudentAttendance(int id)
        {
            var studentAttendance = await _context.StudentAttendances.FindAsync(id);
            if (studentAttendance == null)
            {
                return NotFound();
            }

            _context.StudentAttendances.Remove(studentAttendance);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StudentAttendanceExists(int id)
        {
            return _context.StudentAttendances.Any(e => e.ID == id);
        }
    }
}
