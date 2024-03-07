This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Create a next app

```
  npx create-next-app@latest ./

```

## Learning - components

```
   The components should be outside of app, only next.js related files & layout, pages should in app folder as according to 13.4 version
```

```
  Reusability/Dynamic - The concept of resuability/dynamic in react/next is by passing a props to the component.

```

```
  "use client" : Next.js Component by default is server side, use client must be specified by CSR components.

```

## Erros - Fixed

### Custom Imports issue

When defining your custom imports in tsconfig.json, you must match all paths after @components, using /\*, otherwise the resolver will not expect any further paths.

Therefore, change your paths to:

```
"paths": {
  "@app/*": ["./app/*"],
  "@assets/*": ["./assets/*"],
  "@components/*": ["./components/*"],
  "@styles/*": ["./styles/*"],
  "@utils/*": ["./utils/*"]
}

```

NB: The path linked to each @import should be the path of that directory; For example, if your @components are in the ./src/components directory, then change the path linked to @components to ["./src/components/*"]

checkout [Defining-custom-imports](https://stackoverflow.com/questions/75644589/cannot-find-module-components-or-its-corresponding-type-declarations-ts2)

### isolate modules error - fix

The correct way is to tell TypeScript what you want. If you don't want isolatedModules create tsconfig.json inside your test directory and add:

```
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "isolatedModules": false
  },
}

```

Adding "isolatedModules": true to the config and then cheating TypeScript checker by adding empty export {} smells bad code to me.
