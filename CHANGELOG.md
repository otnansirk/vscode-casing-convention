# Change Log

All notable changes to the "casing-convention" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [Unreleased]


## [v2.0.0] - 2024-12-29

### Refactor
- Folder and file structure

### New Features
- Translation
    + Hover translation
    + Selection translation
    + Code action translation

### Improvement
- Change message toast to status bar
- Upgrade compiler option to ES2022
- Improve style formating for Json as type (Go struct)

### Fixed Bug
- Snake case transform
- Lower case handle tab and camelCase
- Upper case handle tab and camelCase

### Deprecated
- json2Params move to object2Params
- Array helper move to arrayTools
- uuidTools move to uuidUniverse

## [v1.5.0] - 2024-12-14

### New Features
- JSON as Type (Go Struct)
- UUID Universe
    + Generate uuid v1
    + Generate uuid v4
    + Generate uuid v6
    + Generate uuid v7
    + Generate uuid Nil / Empty

## [v1.4.0] - 2024-12-01

### New Features
- JSON Minify
- JSON Beautify
- JSON to Object JS
- Object JS to JSON

### Fixed
- Unit test for JSON parse
- Numbered line by line only if there are characters other than space
- Standardize file names

## [v1.3.0] - 2024-07-12

### New Features
- JSON Stringify 
- JSON Parse

## [v1.2.2] - 2024-07-04

### New Features
- Text to numbered text line by lines


## [v1.1.2] - 2023-07-03

### Fixed Bug
- Text to Capital case
- Standard capitalization all selected text (Multi lines)


## [v1.1.1] - 2023-10-05

### Fixed Bug
- Json to array PHP and the opposite
- Can't format numeric value
- Can't format boolean value


## [v1.1.0] - 2023-10-05

### New Features
- json 2 php array
- php array 2 json


## [v1.0.0] - 2023-05-16

### Added
- Add workflow: unit test and code coverage badge
- Create handler: kebabCase, screamCase, lowerCaseFirst, titleCase, upperCaseFirst
- Remove depedencies: lower-case-first, title-case, upper-case-first
- Add all features to convert text.
- This CHANGELOG file to hopefully serve as an evolving example of a standardized open source project CHANGELOG.
- Create README
- Create LICENSE
- Initial commit

[Unreleased]: https://github.com/otnansirk/vscode-casing-convention/compare/v2.0.0...HEAD
[v1.0.0]: https://github.com/otnansirk/vscode-casing-convention/releases/tag/v1.0.0
[v1.1.0]: https://github.com/otnansirk/vscode-casing-convention/releases/tag/v1.1.0
[v1.1.1]: https://github.com/otnansirk/vscode-casing-convention/releases/tag/v1.1.1
[v1.1.2]: https://github.com/otnansirk/vscode-casing-convention/releases/tag/v1.1.2
[v1.2.2]: https://github.com/otnansirk/vscode-casing-convention/releases/tag/v1.2.2
[v1.3.0]: https://github.com/otnansirk/vscode-casing-convention/releases/tag/v1.3.0
[v1.4.0]: https://github.com/otnansirk/vscode-casing-convention/releases/tag/v1.4.0
[v1.5.0]: https://github.com/otnansirk/vscode-casing-convention/releases/tag/v1.5.0
[v2.0.0]: https://github.com/otnansirk/vscode-casing-convention/releases/tag/v2.0.0