<h1 p align="center">
🎉 Sportradar API Client
</h1>

<p align="center">
    <a href="https://gfay63.github.io/sportradar-api-client/"><b>Documentation & API Specification</b></a> •
    <a href="https://www.postman.com/sportradar-media-apis?tab=collections"><b>Sportradar Postman Collections</b></a>
</p>

<div align="center">

[![npm version](https://img.shields.io/npm/v/sportradar-api-client.svg)](https://www.npmjs.com/package/sportradar-api-client)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=sportradar-api-client&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=sportradar-api-client)
[![npm downloads](https://img.shields.io/npm/dm/sportradar-api-client.svg?style=flat-square)](https://npm-stat.com/charts.html?package=sportradar-api-client)
[![Known Vulnerabilities](https://snyk.io/test/npm/sportradar-api-client/badge.svg)](https://snyk.io/test/npm/sportradar-api-client)
![GitHub top language](https://img.shields.io/github/languages/top/gfay63/sportradar-api-client)
[![GitHub Sponsors](https://img.shields.io/github/sponsors/gfay63)](https://github.com/sponsors/gfay63)
</div>

Welcome to the comprehensive interface for the Sportradar API Client!

This package provides a seamless integration with the Sportradar API, allowing developers to fetch sports data with ease. It's been refactored and optimized to provide a straightforward experience. It is derived in part from the [Sportradar Postman Collections](https://www.postman.com/sportradar-media-apis?tab=collections) using Open API v3 [Open API Generator](https://openapi-generator.tech/).

> 🚨 Disclaimer
>
> While this package provides comprehensive access to the Sportradar API, due to the vastness and complexity of the APIs, not all use cases have been exhaustively tested or verified. Users are encouraged to test the package in their specific contexts and report any issues they encounter. Contributions and feedback are always welcome!

## 🌟 Why Use This?

- **Full Coverage**: This package offers complete access to the Sportradar API. No more partial implementations or missing features.
- **Optimized for Use**: The refactoring ensures that accessing and using the API is as intuitive and straightforward as possible.
- **Full documentation**: See [full documentation of the API Specification](https://gfay63.github.io/sportradar-api-client/).

## 🛠 Installation

```sh
npm install sportradar-api-client --save
```

## 🚀 Getting Started

### NestJS Implementation

To begin, you'll need your API keys for MLB, NBA, and NFL.

#### Synchronous Configuration - Using `forRoot`

You can configure the SportradarApiClientModule synchronously using the forRoot method:

```javascript
import { SportradarApiClientModule } from 'sportradar-api-client';

@Module({
  imports: [
    SportradarApiClientModule.forRoot({
      mlb: {
        apiKey: 'YOUR_MLB_API_KEY',
        basePath: 'YOUR_MLB_BASE_PATH',
      },
      nba: {
        apiKey: 'YOUR_NBA_API_KEY',
        basePath: 'YOUR_NBA_BASE_PATH',
      },
      nfl: {
        apiKey: 'YOUR_NFL_API_KEY',
        basePath: 'YOUR_NFL_BASE_PATH',
      },
    }),
  ],
})
export class AppModule {}
```

#### Asynchronous Configuration with ConfigService - Using `forRootAsync`

If you're using NestJS's ConfigModule and ConfigService to manage your application's configuration, you can configure the SportradarApiClientModule asynchronously:

```javascript
import { SportradarApiClientModule } from 'sportradar-api-client';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SportradarApiClientModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        mlb: {
          apiKey: configService.get<string>('MLB_API_KEY'),
          basePath: configService.get<string>('MLB_BASE_PATH'),
        },
        nba: {
          apiKey: configService.get<string>('NBA_API_KEY'),
          basePath: configService.get<string>('NBA_BASE_PATH'),
        },
        nfl: {
          apiKey: configService.get<string>('NFL_API_KEY'),
          basePath: configService.get<string>('NFL_BASE_PATH'),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  exports: [SportradarApiClientModule], 
})
export class AppModule {}
```

In the asynchronous configuration example, the ConfigService is used to retrieve the API keys and base paths from your environment or configuration files.

#### Using the Client in Your Service or Controller

After configuration, you can import `SportradarApiClientModule` into your module, then import the appropriate API (e.g. `SportradarMlbApi`) and inject the service `SportradarMlbApi.DefaultSportradarMlbApiService` (or the respective service for other sports) into your services or controllers. Here is an example accessing a few of the MLB API endpoints in a controller:

```ts
import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SportradarMlbApi } from 'sportradar-api-client';

@Controller('mlb')
export class MlbController {
    constructor(private readonly srMlbService: SportradarMlbApi.DefaultSportradarMlbApiService) {}

    @Get('leagueHierarchy')
    getLeagueHierarchy(): Observable<any> {
        return this.srMlbService.leagueHierarchy('en', 'json').pipe(
            map(apiResponse => {
                if (apiResponse.status !== 200) {
                    throw new HttpException(apiResponse.data, apiResponse.status);
                }
                return apiResponse.data;
            }),
            catchError(err => {
                throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
            })
        );
    }

    @Get('injuries')
    getInjuries(): Observable<any> {
        return this.srMlbService.injuries("en", "json").pipe(
            map(apiResponse => {
                if (apiResponse.status !== 200) {
                    throw new HttpException(apiResponse.data, apiResponse.status);
                }
                return apiResponse.data;
            }),
            catchError(err => {
                throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
            })
        );
    }
}
```

### Regular Node.js Implementation

For a non-NestJS implementation, you can directly use the services provided by the package.

```javascript
const { DefaultSportradarMlbApiService } = require('sportradar-api-client');

const mlbConfig = {
    apiKey: 'YOUR_MLB_API_KEY',
    basePath: 'https://api.sportradar.us/mlb/production/v7'
};

const mlbService = new DefaultSportradarMlbApiService(mlbConfig);

// Use mlbService to access all the MLB endpoint APIs
```

With these setups, you have the entire Sportradar API at your fingertips! Currently, the package supports MLB, NBA, and NFL. However, other sports can be added in the future.

## 📌 Features

- **Easy Initialization**: Set up and start using the client in no time.
- **Comprehensive API Access**: From MLB to NFL, access every aspect of the Sportradar API.
- **Efficient Error Handling**: Built-in logging and error handling mechanisms for smoother development.
- **Regular Updates**: Stay in sync with the official Sportradar API.
- **Expandable**: While the package currently supports MLB, NBA, and NFL, it's designed to be easily expandable to other sports in the future.

## 🤝 Contribute

Your insights and contributions can make this package even better! Check out our [CONTRIBUTING.md](./CONTRIBUTING.md) guide and be a part of this exciting project.

## 📖 Documentation

Our [library's documentation](https://gfay63.github.io/sportradar-api-client/) is generated using TypeDoc, ensuring that you get the most accurate and up-to-date information directly from the source code.

Happy coding! 🎉

### ⚖️ License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
