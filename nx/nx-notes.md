# Nx Notes

Nx is a smart build system and task orchestrator that understands how your code is built, used, and shared. It helps teams scale confidently by running only what’s needed, enforcing best practices, and keeping builds fast and reliable—both locally and in CI. Nx also structures your metadata to power consistent, AI-assisted workflows across your entire development pipeline.

## Installation

See https://nx.dev/docs/getting-started/installation for details.

### Starter Repository

```sh
npx create-nx-workspace@latest
```

**Prerequistites**

- `gh` command. (Probably depends on the CI provider choice.)
- Others? (Probably. I haven't discovered them yet.)

**Prompts**

- Organization name. Used as the root directory of the monorepo. Will be used to suggest to create a repo at https://github.com/new?name=<org-name> (depending on choices of other prompts (I assume the CI provider affects this.).)
- Stack options.
- Prettier.
- AI agents.
- CI provider.

**Stack Options**

- None: Configures a TypeScript/JavaScript monorepo.
- React: Configures a React application with your framework of choice.
- Vue: Configures a Vue application with your framework of choice.
- Angular: Configures an Angular application with modern tooling.
- Node: Configures a Node API application with your framework of choice.

**Options**

- Use Prettier?
- AI agents:
  + Claude Code
  + OpenAI Codex
  + GitHub Copilot for VSCode
  + Cursor
  + Gemini
- CI Provider:
  + GitHub Actions
  + Gitlab
  + Azure DevOps
  + BitBucket Pipelines
  + Circle CI
 
