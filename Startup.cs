using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


public class Startup
{
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
        //services.addControllers();

        //services.AddDbContext<aruizContext>(options =>
        //                options.UseSqlServer("Data Source=cse.unl.edu:3306; Initial Catalog=aruiz; User ID=aruiz; Password=uHVUeBooNA8"));


        //services.AddDbContextPool<aruizContext>(options => options
        //.UseMySql(
        //    Configuration.GetConnectionString("aruiz"),
        //    mySqlOptions => mySqlOptions.ServerVersion(new Version(10, 5, 4), ServerType.MariaDb)
        //);

        string _connectionString = Configuration.GetConnectionString("aruiz");
        services.AddDbContext<aruizContext>(
            options => options.UseMySql(
            _connectionString,
            ServerVersion.AutoDetect(_connectionString)
        ));
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }
    }


    //app.UseEndpoints(endpoints =>
    //      {
    //  #TODO
    //    });

}