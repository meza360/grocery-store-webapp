# Web API
Developed using
+ NetCore 6.0.7
+ C# 10
# Nuget Packages and dependencies
+ FluentValidation
+ MediatR

# Developing and testing
```powershell
PS ...\grocery-store-webapp\backend> dotnet run --project .\API\
```
This will attach your API to [](http://localhost:5000/) and [](https://localhost:5001/) by default.
If you want to change address and port binding, change the values in \\API\\Properties\launchSettings.json

# Building
## Windows IIS
Remove the URLs from the Program.cs file, cause you want to bind your API to an address in IIS settings
```csharp
//app.UrlAdd("http://localhost:5000");
//app.UrlAdd("https://localhost:5001");
```

```powershell
PS .\grocery-store-webapp\backend> dotnet build -c Release --self-contained=false -o .\buildApi\ -r win-x64
```

## Linux Nginx
You can keep the adress and por binding in the Program.cs file
```csharp
app.UrlAdd("http://localhost:5000");
app.UrlAdd("https://localhost:5001");
```

```powershell
PS .\grocery-store-webapp\backend> dotnet build -c Release --self-contained=false -o .\buildApi\ -r linux-x64
```