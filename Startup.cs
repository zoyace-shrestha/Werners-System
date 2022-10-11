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
		Configuartion = configuration;
	}

	public IConfiguration Configuration { get; }

	public void ConfigureServices(IServiceCollection services)
    {
		//services.addControllers();

		services.AddDbContext<aruizContext>(options =>
					options.UseMySQL(Configuration.GetConnectionString("aruiz")));
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
