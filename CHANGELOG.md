# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [0.3.1] - 2025-01-09

### Added
- Support for prefixItems from openapi 3.1.0 in schema
- Example for using Emulation in the client

### Fixed
- Corrected type mismatch for operations with inline response schemas (not defined via $ref in components) in OpenAPI. Key transformations from snake_case to camelCase are now properly reflected in the types, making them usable.
- Resolved an internal issue that caused generation failures when the response format was not application/json.

## [0.3.0] - 2024-11-19

### Fixed
- Fixed issue where errors without a json method or with invalid JSON responses caused unhandled exceptions.
- Properly apply custom fetch from ApiConfig #201

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