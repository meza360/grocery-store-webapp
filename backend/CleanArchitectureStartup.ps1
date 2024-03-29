﻿mkdir API
mkdir Application
mkdir Domain
mkdir Persistence

Set-Location .\API\
dotnet new webapi
Set-Location ..

cd .\Application\
dotnet new classlib
cd ..

cd .\Domain\
dotnet new classlib
Set-Location ..

Set-Location .\Persistence\
dotnet new classlib
Set-Location ..

Set-Location .\API\
dotnet add reference ..\Application\
dotnet add reference ..\Persistence\
dotnet add package Swashbuckle.AspNetCore
dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package AutoMapper.Extensions.Microsoft.DependencyInjection
dotnet add package MediatR.Extensions.Microsoft.DependencyInjection
Set-Location ..

cd .\Application\
dotnet add reference ..\Persistence\
dotnet add reference ..\Domain\
dotnet add package Microsoft.EntityFrameworkCore;
dotnet add package AutoMapper.Extensions.Microsoft.DependencyInjection
dotnet add package MediatR.Extensions.Microsoft.DependencyInjection
rm Class1.cs
cd ..

cd .\Persistence\
dotnet add reference ..\Domain\
dotnet add package Microsoft.NETCore.App
dotnet add package Microsoft.EntityFrameworkCore.Design
rm Class1.cs
cd ..

cd .\Domain\
rm Class1.cs
cd ..

dotnet new sln
dotnet sln add .\API\
dotnet sln add .\Application\
dotnet sln add .\Domain\
dotnet sln add .\Persistence\