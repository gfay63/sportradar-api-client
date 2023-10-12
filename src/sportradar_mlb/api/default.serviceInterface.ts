/**
 * Sportradar MLB API
 * Sportradar is the Official Provider of real-time MLB statistics. The data collection comes direct from the MLB operations teams on-venue. This provides lightning speed and the highest-quality stats available to power your baseball experiences. All MLB games – including Spring Training – feature full coverage.  The MLB API is consistent in structure, format, and behavior with our other League Specific APIs. Our primary feeds return schedules, standings, team/player data, and real-time scores.  Our other MLB feeds provide a host of complimentary statistics and information, including:  *   Injuries *   Pitch metrics *   League leaders *   Venues *   Depth charts *   Season statistics *   Seasonal splits       Real-time customers are also offered three delivery Push Feeds to enhance speed.  An extra package containing MLB Statcast data is also available. This package includes:  *   **Premium Deeper Pitch Data** featuring spin rate, vertical and horizontal movement and more specific pitch types *   **Premium Hit Data** including exit velocity, launch angle, spin rate and project home run distance *   **Premium Play Level Statcast** Data containing deeper information on fielding and base-running performance       The easiest way to get started with the API is to click the fork button to fork this collection to your own workspace and use Postman to send requests.  # Overview  1.  You need a valid API Key to send requests to the API endpoints. You can get your free trial key by registering an account and creating an application from our [Developer Portal](https://developer.sportradar.com/). 2.  Once you have your sport specific key, replace the value `{Your API Key}` with your API key and click the save icon (or click the Meatballs Menu and select \"Save\") 3.  By default, responses to every request are sent in JSON. If you prefer XML, you can change the variable by clicking the \"Variables\" tab and replacing the Current Value for format to xml. 4.  Select an endpoint from the MLB v7 menu on the left, then click \"Send\" on the resulting screen. 5.  The API calls will respond with appropriate [HTTP response codes](https://developer.sportradar.com/docs/read/Home#http-response-codes) for all requests. Within Postman Client, when a response is received, the status code is highlighted and is accompanied by a help text that indicates the possible meaning of the response code. A 200 OK indicates all went well, while 4XX or 5XX response codes indicate an error from the requesting client or our API servers respectively. 6.  Data for the requested endpoint is displayed in the Body section below.       # Other Resources  The [API Map](https://developer.sportradar.com/docs/read/baseball/MLB_v7#mlb-api-map) on our Developer Portal illustrates how to obtain the parameters you will need to access the API.  The [Statistics Summary](https://developer.sportradar.com/files/Sportradar_MLB_v7_Statistics_Summary.pdf) provides a high-level overview of all the data points provided within the whole API, giving you an “at a glance” view of the data we offer.  The [Documentation](https://developer.sportradar.com/files/Sportradar_MLB_v7_Statistics_Feeds.pdf) provides a list of endpoints for the API with basic descriptions. When applicable, we include information on the Coverage Levels provided for the API. This document also includes descriptions of each data point and information about where each data point can be found within the API.  [Frequently Asked Questions](https://developer.sportradar.com/docs/read/baseball/MLB_v7#frequently-asked-questions) about the API can be found on the Developer Portal and in the Documentation mentioned above.  The [Change Log](https://developer.sportradar.com/files/MLB_API_v7_Change_Log.pdf) provides a list of changes and updates to this version of the API since the initial release of the API version.  If you need further information, contact our support team:   Email: [support@sportradar.com](mailto:support@sportradar.com)
 *
 * The version of the OpenAPI document: 7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Observable } from 'rxjs';



import { Configuration } from '../configuration';


export interface DefaultSportradarMlbApiServiceInterface {
    defaultHeaders: {};
    configuration: Configuration;

    /**
    * Daily Boxscore
    * Inning-by-inning scoring breakdown, top-level runs, hits and errors by team, as well as details on run-scoring events for all games on a given MLB defined day.
    * @param locale (Required) Locale used for translations
    * @param year (Required) Year in 4 digit format
    * @param month (Required) Locale used for translations
    * @param day (Required) Locale used for translations
    * @param format 
    */
    dailyBoxscore(locale: string, year: number, month: number, day: number, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Daily Change Log
    * Provides IDs and timestamps for teams, players, game statistics, schedules, and standings that have been modified on a given date. To receive the data updates, use these unique IDs to pull relevant API feeds.
    * @param locale (Required) Locale used for translations
    * @param year (Required) Year in 4 digit format
    * @param month (Required) Month in 2 digit format
    * @param day (Required) Day in 2 digit format
    * @param format 
    */
    dailyChangeLog(locale: string, year: number, month: number, day: number, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Daily Schedule
    * The date, time and location for all games on a given MLB defined day.
    * @param locale (Required) Locale used for translations
    * @param year (Required) Year in 4 digit format
    * @param month (Required) Month in 2 digit format
    * @param day (Required) Day in 2 digit format
    * @param format 
    */
    dailySchedule(locale: string, year: number, month: number, day: number, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Daily Summary
    * Team lineups as well as team and player statistics for all games on a given MLB defined day.
    * @param locale (Required) Locale used for translations
    * @param year (Required) Year in 4 digit format
    * @param month (Required) Month in 2 digit format
    * @param day (Required) Day in 2 digit format
    * @param format 
    */
    dailySummary(locale: string, year: number, month: number, day: number, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Daily Transactions
    * Information concerning all transactions taking place on a given MLB defined day.
    * @param locale (Required) Locale used for translations
    * @param year (Required) Year in 4 digit format
    * @param month (Required) Month in 2 digit format
    * @param day (Required) Day in 2 digit format
    * @param format 
    */
    dailyTransactions(locale: string, year: number, month: number, day: number, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Game Boxscore
    * Inning-by-inning scoring breakdown, hits and errors by team, win/loss results, as well as details on run-scoring events for a given game.
    * @param locale (Required) Locale used for translations
    * @param game_id (Required) ID of a game
    * @param format 
    */
    gameBoxscore(locale: string, game_id: string, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Game Extended Summary
    * Inning-by-inning scoring, key game events, lineups, and team and player statistics for the given game and season-to-date.
    * @param locale (Required) Locale used for translations
    * @param game_id (Required) ID of a game
    * @param format 
    */
    gameExtendedSummary(locale: string, game_id: string, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Game Summary
    * Team lineups as well as team and player statistics for a given game.
    * @param locale (Required) Locale used for translations
    * @param game_id (Required) ID of a game
    * @param format 
    */
    gameSummary(locale: string, game_id: string, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Glossary
    * Full text descriptions for pitch ids, player status ids, outcome ids, and game status ids.
    * @param locale (Required) Locale used for translations
    * @param format 
    */
    glossary(locale: string, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Injuries
    * Information concerning all current injuries across the league.
    * @param locale (Required) Locale used for translations
    * @param format 
    */
    injuries(locale: string, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * League Depth Chart
    * Current depth chart positions for every MLB team.
    * @param locale (Required) Locale used for translations
    * @param format 
    */
    leagueDepthChart(locale: string, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * League Hierarchy
    * Provides top-level information for each team, including league and division distinction, and venue information.
    * @param locale (Required) Locale used for translations
    * @param format 
    */
    leagueHierarchy(locale: string, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * League Leaders
    * AL, NL, and MLB leader information for various hitting and pitching statistics.
    * @param locale (Required) Locale used for translations
    * @param year (Required) Year in 4 digit format
    * @param season_type (Required) Season type as Regular (REG)
    * @param format 
    */
    leagueLeaders(locale: string, year: number, season_type: string, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * League Schedule
    * Complete schedule information for a given season, including venue and broadcast info.
    * @param locale (Required) Locale used for translations
    * @param year (Required) Year in 4 digit format
    * @param season_type (Required) Season type as Preseason (PRE), Regular (REG), Postseason (PST), or All-Star Game (AST)
    * @param format 
    */
    leagueSchedule(locale: string, year: number, season_type: string, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Play by Play
    * Detailed, real-time information on every pitch and game event.
    * @param locale (Required) Locale used for translations
    * @param game_id (Required) ID of a game
    * @param format 
    */
    playByPlay(locale: string, game_id: string, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Player Profile
    * Player biographical information, including current and historical seasonal statistics and splits.
    * @param locale (Required) Locale used for translations
    * @param player_id (Required) ID of a player
    * @param format 
    */
    playerProfile(locale: string, player_id: string, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Rankings
    * League and division rank for each team, including post season clinching status.
    * @param locale (Required) Locale used for translations
    * @param year (Required) Year in 4 digit format
    * @param season_type (Required) Season type as Regular (REG)
    * @param format 
    */
    rankings(locale: string, year: number, season_type: string, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Seasonal Pitch Metrics
    * Detailed metrics on pitch type, velocity, and results for a given pitcher by season.
    * @param locale (Required) Locale used for translations
    * @param player_id (Required) ID of a player
    * @param format 
    */
    seasonalPitchMetrics(locale: string, player_id: string, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Seasonal Splits
    * Detailed splits for a given team and all players on the roster.
    * @param locale (Required) Locale used for translations
    * @param year (Required) Year in 4 digit format
    * @param season_type (Required) Season type as Regular (REG) or Postseason (PST)
    * @param team_id (Required) ID of a team
    * @param format 
    */
    seasonalSplits(locale: string, year: number, season_type: string, team_id: string, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Seasonal Statistics
    * Detailed season-to-date stats for given team and all players on the roster.
    * @param locale (Required) Locale used for translations
    * @param year (Required) Year in 4 digit format
    * @param season_type (Required) Season type as Preseason (PRE), Regular (REG), or Postseason (PST)
    * @param team_id (Required) ID of a team
    * @param format 
    */
    seasonalStatistics(locale: string, year: number, season_type: string, team_id: string, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Seasonal Transactions
    * Information concerning all transactions taking place in a given MLB season.
    * @param locale (Required) Locale used for translations
    * @param year (Required) Year in 4 digit format
    * @param format 
    */
    seasonalTransactions(locale: string, year: number, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Seasons
    * Provides a complete list of historical season information available in the API.
    * @param locale (Required) Locale used for translations
    * @param format 
    */
    seasons(locale: string, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Series Schedule
    * Postseason participant information as well as the date, time, location, and other event details for every match-up taking place for the entire postseason.
    * @param locale (Required) Locale used for translations
    * @param year (Required) Year in 4 digit format
    * @param season_type (Required) Season type as Postseason (PST)
    * @param format 
    */
    seriesSchedule(locale: string, year: number, season_type: string, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Series Statistics
    * Detailed series-to-date stats for a given team and all players on the roster.
    * @param locale (Required) Locale used for translations
    * @param series_id (Required) ID of a season
    * @param team_id (Required) ID of a team
    * @param format 
    */
    seriesStatistics(locale: string, series_id: string, team_id: string, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Series Summary
    * Team and player statistics for a given postseason series.
    * @param locale (Required) Locale used for translations
    * @param series_id (Required) ID of a series
    * @param format 
    */
    seriesSummary(locale: string, series_id: string, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Standings
    * Detailed standings information for each MLB division.
    * @param locale (Required) Locale used for translations
    * @param year (Required) Year in 4 digit format
    * @param season_type (Required) Season type as Preseason (PRE) or Regular (REG)
    * @param format 
    */
    standings(locale: string, year: number, season_type: string, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Statcast Leaders
    * Statcast leader information for various hitting and pitching statistics.
    * @param locale (Required) Locale used for translations
    * @param year (Required) Year in 4 digit format
    * @param season_type (Required) Season type as Regular (REG)
    * @param format 
    */
    statcastLeaders(locale: string, year: number, season_type: string, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Team Depth Charts
    * Current depth chart for all positions on a given team.
    * @param locale (Required) Locale used for translations
    * @param team_id (Required) ID of a team
    * @param format 
    */
    teamDepthCharts(locale: string, team_id: string, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Team Profile
    * Top-level team information including all players currently on the 25-man roster, 40-man roster, or expected to join the team.
    * @param locale (Required) Locale used for translations
    * @param team_id (Required) ID of a team
    * @param format 
    */
    teamProfile(locale: string, team_id: string, format: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Venues
    * Provides the name, location, and capacity of each venue, along with the dimensions of each field.
    * @param locale (Required) Locale used for translations
    * @param format 
    */
    venues(locale: string, format: string, extraHttpRequestParams?: any): Observable<{}>;

}