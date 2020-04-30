using Dapper;
using Microsoft.Extensions.Configuration;
using PropMaint.Common.Interfaces.Repositories;
using PropMaint.Common.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;
using System.Threading.Tasks;

namespace PropMaint.Data.Repositories
{
    public class PeopleRepository : Repository, IPeopleRepository
    {
        public PeopleRepository(IConfiguration config) : base(config)
        {
        }

        public async Task<IEnumerable<Person>> GetPeople()
        {
            string sql = "SELECT [UId], [Forename], [Surname], [DateOfBirth], [OtherNames], [PictureUri] FROM People";

            using (var connection = new SqlConnection(GetConnectionString()))
            {
                var res = await connection.QueryAsync<Person>(sql);
                return res;
            }
        }
    }
}

