using PropMaint.Common.Interfaces.Repositories;
using PropMaint.Common.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace PropMaint.Data.Repositories
{
    public class TestRepository : ITestRepository
    {
        public TestData Test()
        {
            return new TestData() { Text = "Test" };
        }
    }
}
