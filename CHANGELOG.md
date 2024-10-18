# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [0.2.0] - 2024-10-18

### Added
- Conversion of relevant strings to `bigint` alongside large numerical values.
- Response types for the `getChartRates` operation.
- Mechanism for free requests to `tonapi` through the client, providing this capability to dApps.
- `x-tonapi-client` header for requests specifying the client version.

- Simplified client initialization process using a single initializer.
- Parsing of API errors to eliminate the need for boilerplate code.

## [0.1.0] - 2024-08-16

### Added
- Initial release of the `@ton-api/client` with basic API interaction functions.

## [Unreleased]

### Added
- Description of future changes.