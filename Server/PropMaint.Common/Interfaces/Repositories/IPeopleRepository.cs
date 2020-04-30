using PropMaint.Common.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PropMaint.Common.Interfaces.Repositories
{
    public interface IPeopleRepository
    {
        Task<IEnumerable<Person>> GetPeople();
    }
}
