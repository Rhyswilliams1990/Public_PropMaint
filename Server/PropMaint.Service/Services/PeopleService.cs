using PropMaint.Common.Interfaces.Repositories;
using PropMaint.Common.Interfaces.Services;
using PropMaint.Common.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PropMaint.Service.Services
{
    public class PeopleService : IPeopleService
    {
        private readonly IPeopleRepository peopleRepository;

        public PeopleService(IPeopleRepository peopleRepository)
        {
            this.peopleRepository = peopleRepository;
        }

        public Task<IEnumerable<Person>> GetPeople()
        {
            return peopleRepository.GetPeople();
        }
    }
}
