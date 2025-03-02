namespace React.DotNet.EsBuild.Controllers.Main;

public class MainModel(string version)
{
    public string Version { get; set; } = version;
    public Guid BuildNumber { get; set; } = Guid.NewGuid();
    public string BuildDate { get; set; } = DateTime.Now.ToString("MM/dd/yyyy");
}