# Next.js 13 Notes


## Installation

See https://beta.nextjs.org/docs/installation.

### System Requirements

- Node.js 16.8 or later.

### Automatic Installation

```sh
npx create-next-app@latest --experimental-app
```

### Manual Installation

```sh
npm install next@latest react@latest react-dom@latest eslint-config-next@latest
```

**package.json**

```json5
{
  ...
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

**next.config.js**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
```
