import { Module, DynamicModule, Global } from '@nestjs/common';
import * as SportradarMlbApi from './sportradar_mlb';
import * as SportradarNbaApi from './sportradar_nba';
import * as SportradarNflApi from './sportradar_nfl';
import { Configuration } from './sportradar_mlb';

interface SportConfig {
    basePath: string;
    apiKey: string;
}

interface ModuleConfig {
    mlb: SportConfig;
    nba: SportConfig;
    nfl: SportConfig;
}

@Global()
@Module({})
export class SportradarApiClientModule {
    static forRootAsync(options: {
        imports?: any[];
        useFactory: (...args: any[]) => Promise<ModuleConfig> | ModuleConfig;
        inject?: any[];
    }): DynamicModule {
        return {
            module: SportradarApiClientModule,
            imports: [
                SportradarMlbApi.ApiModule.forRootAsync({
                    imports: options.imports,
                    useFactory: async (...args: any[]) => sportradarApiConfigFactory((await options.useFactory(...args)).mlb),
                    inject: options.inject,
                }),
                SportradarNbaApi.ApiModule.forRootAsync({
                    imports: options.imports,
                    useFactory: async (...args: any[]) => sportradarApiConfigFactory((await options.useFactory(...args)).nba),
                    inject: options.inject,
                }),
                SportradarNflApi.ApiModule.forRootAsync({
                    imports: options.imports,
                    useFactory: async (...args: any[]) => sportradarApiConfigFactory((await options.useFactory(...args)).nfl),
                    inject: options.inject,
                }),
            ],
            exports: [
                SportradarMlbApi.ApiModule,
                SportradarNbaApi.ApiModule,
                SportradarNflApi.ApiModule,
            ],
        };
    }
}

function sportradarApiConfigFactory(config: SportConfig): Configuration {
    return new Configuration({
        basePath: config.basePath,
        apiKeys: { "api_key": config.apiKey },
    });
}
