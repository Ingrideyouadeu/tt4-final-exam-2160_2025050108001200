# stage 1 (BUILD)
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ./Backend/ ./
RUN dotnet restore
RUN dotnet publish -c Release -o /app

# stage 2 (RUNTIME)
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
COPY --from=build /app ./
ENTRYPOINT ["dotnet", "AttendanceApi.dll"]
