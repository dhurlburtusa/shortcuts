# ASP.NET Cheat Sheet

The following is about ASP.NET version 5.

## Installation

Install Visual Studio Community edition.  Checkout https://www.visualstudio.com/.


## ASP.NET MVC

The following is about ASP.NET MVC version 6.

**Adding ASP.NET MVC to Your Application**

Add the following two lines to your Startup.cs file to enable the ASP.NET MVC middleware.

```csharp
// Startup.cs
namespace MyApp
{
  public class Startup
  {
    public void ConfigureServices(IServiceCollection services)
    {
      ...
      services.AddMvc();
      ...
    }
    
    public void Configure(IApplicationBuilder app)
    {
      ...
      app.UseMvc(routes => routes.MapRoute("Default", "{controller=Home}/{action=Index}/{id?}"));
      ...
    }
  }
}
```
