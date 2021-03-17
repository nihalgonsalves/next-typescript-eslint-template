# next-typescript-eslint-template

![build status](https://github.com/nihalgonsalves/next-typescript-eslint-template/workflows/build/badge.svg)
![last commit](https://img.shields.io/github/last-commit/nihalgonsalves/next-typescript-eslint-template)
![license UNLICENSE](https://img.shields.io/github/license/nihalgonsalves/next-typescript-eslint-template?color=brightgreen)

Next + TypeScript + next-i18next template repository with typescript-eslint (airbnb config).

Dependabot keeps the dependencies up to date.

- **Build tool**: yarn (can be replaced with npm: `rm yarn.lock && npm install`)
- **Target Browser ES version support**: es2019 (see: <http://kangax.github.io/compat-table/es2016plus/>)
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

## additional setup

> ℹ️ This SSH setup is required so that checks can run on dependency PRs. Other pushes by a GitHub Actions token do not trigger workflows.

For the dependency update workflow to work, you must setup a Deploy Key.

- Create an SSH key for the dependency update workflow:
  - To generate a key pair, use `ssh-keygen -t ed25519 -C "actions@github.com"`
  - Copy the public key (starts with `ssh-ed25519 AAAA...`) and add it as a new deploy key (`https://github.com/moia-dev/<your-repo>/settings/keys/new`). Make sure to tick "Allow write access", as the workflow needs to push a new branch with the updates.
  - Copy the private key (starts with `-----BEGIN OPENSSH PRIVATE KEY-----`) and save it as a new secret (`https://github.com/moia-dev/<your-repo>/settings/secrets/actions/new`) called `ACTIONS_DEPLOY_KEY`
  - 🚨 Make sure to delete the keys from your local machine once done
