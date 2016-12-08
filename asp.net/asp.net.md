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

**Adding Controllers to Your Application**

* Add a `Controllers` folder to the root of your project.
* Add a file similar to the following to the new Controllers folder.

```csharp
// Controllers/MyController.cs
using Microsoft.AspNet.Mvc;

namespace MyApp.Controllers
{
  public class MyController : Controller
  {
    // GET: /<controller>/
    public IActionResult Index()
    {
      return View();
    }
    ...
  }
}
```

**Adding Views to Your Application**

* Add a `Views` folder to the root of your project.
* Add a folder named `Shared` to contain reusable view pieces such as layouts.
* Add a folder matching the name of your controller (`My` for the controller above) to the `Views` folder.
* Add a file matching the name of your controller's action method (`Index` for the controller above) with the `.cshtml` extension to the corresponding controller folder.
* Use the Razor syntax in the file.

```html
<!-- Views/Shared/_Layout.cshtml -->
<!DOCTYPE html>
<html>
  <head>
  ...
  </head>
  <body>
    ...
    @RenderBody()
    ...
  </body>
</html>
```

```html
<!-- Views/My/Index.cshtml -->
@{
  Layout = "_Layout";
}
<p>This is the My#Index body.</p>
```

**Adding Data to Your Application**

There are a couple options to passing data to your application.

* Option 1: (No type safety or Intellisense)
  - Add properties to the `ViewBag` in the controller.
  - Access properties of the `ViewBag` in the view.

```csharp
// Controllers/MyController.cs
using Microsoft.AspNet.Mvc;

namespace MyApp.Controllers
{
  public class MyController : Controller
  {
    // GET: /<controller>/
    public IActionResult Index()
    {
      ViewBag.Title = "My Title";
      ViewBag.Name = "Me, a name, I call myself";
      return View();
    }
    ...
  }
}
```

```html
<!-- Views/My/Index.cshtml -->
@{
  Layout = "_Layout";
}
<h1>@ViewBag.Title</h1>
<p>I am @ViewBag.Name</p>
```

* Option 2: (Type safety and intellisense)
  - Add a `Models` folder to the root of your project.
  - Create a class to represent the model.
  - Instantiate an object of the model class.
  - Pass the model object to the `View` method.
  - Declare the type of the model.

```csharp
// Models/MyModel.cs
using System;

namespace MyApp.Models
{
  public class MyModel
  {
    public string Title { get; set; }
    public string Name { get; set; }
    ...
  }
}
```

```csharp
// Controllers/MyController.cs
using Microsoft.AspNet.Mvc;

namespace MyApp.Controllers
{
  public class MyController : Controller
  {
    // GET: /<controller>/
    public IActionResult Index()
    {
      var MyModel model = new MyModel();
      model.Title = "My Title";
      model.Name = "Me, a name, I call myself";
      return View(model);
    }
    ...
  }
}
```

```html
<!-- Views/My/Index.cshtml -->
@model = MyApp.Models.Post;
@{
  Layout = "_Layout";
}
<h1>@Model.Title</h1>
<p>I am @Model.Name</p>
```
