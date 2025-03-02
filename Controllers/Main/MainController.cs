using Microsoft.AspNetCore.Mvc;

namespace React.DotNet.EsBuild.Controllers.Main;

[RoutePrefix("main")]
public class MainController : Controller
{
    public IActionResult Index()
    {
        MainModel model = new MainModel("1.0.0");
        return View(model);
    }
}