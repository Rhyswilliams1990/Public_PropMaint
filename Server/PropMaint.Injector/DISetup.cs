using Microsoft.Extensions.DependencyInjection;
using PropMaint.Common.Interfaces.Repositories;
using PropMaint.Common.Interfaces.Services;
using PropMaint.Data.Repositories;
using PropMaint.Service.Services;
using System;
using System.Collections.Generic;
using System.Text;

namespace PropMaint.Injector
{
    public class DISetup
    {
        public static void SetupDependencies(IServiceCollection services)
        {
            services.AddTransient<ITestService, TestService>();
            services.AddTransient<ITestRepository, TestRepository>();
            services.AddTransient<IPeopleService, PeopleService>();
            services.AddTransient<IPeopleRepository, PeopleRepository>();
            services.AddTransient<IRepository, Repository>();
        }
    }
}
