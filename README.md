## Getting Started
My personal template using the following technologies:
- Next.js + PWA
- Typescript
- Storybook v6+
- React.js
- Styled Components
- Jest + React Testing Library
- Eslint + Prettier + Editorconfig

## You can create a project based on this boilerplate using:
```bash
  yarn create next-app -e https://github.com/dutradotdev/my-boilerplate
```
## Do not forget
- Change the manifest.json before use
- Delete de initial component, snapshot and test

## Commands

### To create your components
```bash
yarn generate <component_name>
```
This will create:
- index.tsx
- style.ts
- tests.tsx
- stories.tsx
### To run the project in the dev mode
```bash
yarn dev
```

### To build project
```bash
yarn build
```

### To start the project
```bash
yarn start
```

### To lint the project
```bash
yarn lint
```

### To run tests
```bash
yarn test
yarn test:watch
```

### To run storybook
```bash
yarn storybook
```

### To build storybook in order to publish
```bash
yarn build-storybook
```


