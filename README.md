# 🎉 Sportradar API Client

Welcome to the comprehensive interface for the Sportradar API Client!

This package provides a seamless integration with the Sportradar API, allowing developers to fetch sports data with ease. It's been refactored and optimized to provide a straightforward experience.

> 🚨 Disclaimer
>
> While this package provides comprehensive access to the Sportradar API, due to the vastness and complexity of the APIs, not all use cases have been exhaustively tested or verified. Users are encouraged to test the package in their specific contexts and report any issues they encounter. Contributions and feedback are always welcome!

## 🌟 Why Use This?

- **Full Coverage**: This package offers complete access to the Sportradar API. No more partial implementations or missing features.
- **Optimized for Use**: The refactoring ensures that accessing and using the API is as intuitive and straightforward as possible.
- **Full documentation**: See [full documentation of the API Specification](YOUR_URL_HERE).

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
})
export class AppModule {}
```

In the asynchronous configuration example, the ConfigService is used to retrieve the API keys and base paths from your environment or configuration files.

#### Using the Client in Your Service or Controller

After configuration, you can inject the `SportradarMlbApiClientService` (or the respective service for other sports) into your services or controllers:

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

Our library's documentation is generated using TypeDoc, ensuring that you get the most accurate and up-to-date information directly from the source code.

Happy coding! 🎉

### ⚖️ License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
