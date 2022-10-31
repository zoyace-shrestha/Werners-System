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
        services.AddControllersWithViews();

        //services.AddSingleton<IConfiguration>(Configuration);
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

        app.UseHttpsRedirection();

        app.UseStaticFiles();

        app.UseRouting();

        //app.UseAuthorization();

        //endpoints

        app.UseEndpoints(endpoints => {
            endpoints.MapControllers();
            //endpoints.MapControllerRoute(
            //    name: "default",
            //    pattern: "{controller}/{action=Index}/{id?}");
        });

    }
}