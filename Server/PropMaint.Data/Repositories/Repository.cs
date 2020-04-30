using Microsoft.Extensions.Configuration;
using PropMaint.Common.Interfaces.Repositories;
using System;
using System.Collections.Generic;
using System.Text;

namespace PropMaint.Data.Repositories
{
    public class Repository : IRepository
    {
        private readonly IConfiguration _config;

        public Repository(IConfiguration config)
        {
            _config = config;
        }

        public string GetConnectionString()
        {
            return _config.GetConnectionString("DbConnection");
        }
    }
}
