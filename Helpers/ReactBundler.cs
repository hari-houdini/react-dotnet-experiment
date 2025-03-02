using System.Text;
using System.Text.Json;
using Microsoft.AspNetCore.Html;

namespace React.DotNet.EsBuild.Helpers;

public class ReactBundler
{
    private static HtmlString GetFormattedScriptTag(string scriptId, string innerHtml)
    {
        StringBuilder html = new StringBuilder();
        
        html.Append($"<script id=\"__{scriptId}_REACT_APP__\" type=\"application/json\">");
        html.Append(innerHtml);
        html.Append("</script>");
        
        return new HtmlString(html.ToString());
    }

    public static HtmlString RenderScript(string scriptId, string innerHtml = "")
    {
        if (string.IsNullOrWhiteSpace(scriptId))
        {
            throw new ArgumentNullException($"ID should be a va;id unique string - {nameof(scriptId)}");
        }
        return GetFormattedScriptTag(scriptId, innerHtml);
    }
}

public class ReactArgRecord
{
    public string ReactArgJson { get; private set; } = "{}";

    private string _appendJson<T>(T argDictionary)
    {
        string openJson = ReactArgJson.Remove(ReactArgJson.Length - 1, 1);
        if (openJson.Length > 0 && openJson[^1] != '{')
        {
            openJson += ',';
        }

        string jsonString = JsonSerializer.Serialize(argDictionary);
        string truncatedJson = jsonString[1..^1];

        ReactArgJson = openJson + truncatedJson + '}';
        return ReactArgJson;
    }

    public string AddData(string key, bool value)
    {
        Dictionary<string, bool> data = new Dictionary<string, bool> { { key, value } };
        return _appendJson(data);
    }
    
    public string AddData(string key, int value)
    {
        Dictionary<string, int> data = new Dictionary<string, int> { { key, value } };
        return _appendJson(data);
    }
    
    public string AddData(string key, float value)
    {
        Dictionary<string, float> data = new Dictionary<string, float> { { key, value } };
        return _appendJson(data);
    }
    
    public string AddData(string key, string value)
    {
        Dictionary<string, string> data = new Dictionary<string, string> { { key, value } };
        return _appendJson(data);
    }
    
    public string AddData<TVal>(string key, TVal value)
    where TVal : struct
    {
        Dictionary<string, TVal> data = new Dictionary<string, TVal> { { key, value } };
        return _appendJson(data);
    }
}