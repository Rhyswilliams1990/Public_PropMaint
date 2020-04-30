using PropMaint.Common.Interfaces.Repositories;
using PropMaint.Common.Interfaces.Services;
using PropMaint.Common.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace PropMaint.Service.Services
{
    public class TestService : ITestService
    {
        private readonly ITestRepository testRepository;

        public TestService(ITestRepository testRepository)
        {
            this.testRepository = testRepository;
        }

        public TestData Test()
        {
            return testRepository.Test();
        }
    }
}
