namespace Microsoft.AspNetCore.Mvc;

// public class RoutePrefixAttribute(string prefix) : RouteAttribute(prefix)
public class RoutePrefixAttribute : RouteAttribute
{
    public RoutePrefixAttribute(string prefix) : base(prefix)
    {
        
    }
}