# Grocery Store UMG
Grocery store small website, intented to provide modern and highly available features, hosted in Microsoft Azure.
# Azure hosting preview(under maintenance)
[http://umg-appsite.eastus.cloudapp.azure.com/](http://umg-appsite.eastus.cloudapp.azure.com/)

<img width=400px src="./thumbprints/Home.png" alt="Home page"/>
<img width=400px src="./thumbprints/ProdDetails.png" alt="Product Details page"/>
<img width=400px src="./thumbprints/ShoppingCart.png" alt="Shooping cart details page"/>
<img width=400px src="./thumbprints/PaymentDetails.png" alt="Payment page"/>
<img width=400px src="./thumbprints/AccountDetails.png" alt="Account payment methods details"/>
<img width=400px src="./thumbprints/LoadingPage.png" alt="Page loader"/>

# Features
* PDF invoice generation.
* Account management(Sign-up and Sign-in).
* Shopping cart persistent on session.
# Dashboard
| CodeFactor Grade  |
|   :--------------:|
| [![cf-badge]][cf-site]

[cf-site]: https://www.codefactor.io/repository/github/meza360/grocery-store-webapp
[cf-badge]: https://www.codefactor.io/repository/github/meza360/grocery-store-webapp/badge
# For development guide
[Read the docs(EN_US)](./docs/en_US/)
[Read the docs(ES_GT)](./docs/es_GT/)

# Deploying
See our guide in [linux-basic-administration](https://www.google.com) to deploy your app on a server environment using [Nginx](https://www.nginx.com/) and [NetCore Runtime Environment](https://dotnet.microsoft.com/en-us/download)
# Clean architecture
* API/Application/Persistence/Domain - C#/NetCore 6
* Database - Oracle 21g/Oracle 21c/Oracle RAC OneNode/High Availability
* Presentation - ReactJS/Typescript/MobX/React bootstrap
    * Development environment: Windows 10, SQL Server 2019 Developer Edition, IIS.