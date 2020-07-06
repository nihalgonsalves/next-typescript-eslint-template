## next-typescript-eslint-template

![build status](https://github.com/nihalgonsalves/next-typescript-eslint-template/workflows/build/badge.svg)
![last commit](https://img.shields.io/github/last-commit/nihalgonsalves/next-typescript-eslint-template)
![license UNLICENSE](https://img.shields.io/github/license/nihalgonsalves/next-typescript-eslint-template?color=brightgreen)

Next + TypeScript + next-i18next template repository with typescript-eslint (airbnb config).

Dependabot keeps the dependencies up to date.

- **Build tool**: yarn (can be replaced with npm: `rm yarn.lock && npm install`)
- **Target Browser ES2020 version**: es2019 (see: http://kangax.github.io/compat-table/es2016plus/)
- **Structure**: `src/` for TypeScript source files and `build/` and `out/` for output
- Also includes a default `.editorconfig` with 2-space indents

Scripts:

- `yarn dev` run from source, auto-restarting
- `yarn lint` run eslint
- `yarn lint --fix` run eslint with auto-formatting
- `yarn build` build to optimised bundle
- `yarn start` run optimised bundle (PRD server)
- `yarn export` build and export static bundle
- `yarn serve` serve static bundle
- `yarn test` currently does nothing
