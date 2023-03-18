# E-commerce App

Web App for view world products and it have the ability to add or edit you cart items,
also it have the ability to checkout your orders.

The app is for client side only and built with React js with ant design as ui library displaying kind of products

## Creator

Ahmed ELsaikaly

## Table of Contents

1. [Usage](#Usage)
1. [Folder structure](#folder-structure)
1. [Used Dependencies](#Dependencies)

## Usage

> To start the project you need to:
> in the root directory terminal:

```sh
    npm install
    npm start
```

To make a build for the project,

```sh
    npm run build
```

## folder-structure

```
countries-finder
├── README.md
│── package.json
│── craco.config.js
│── tsconfig.paths.json
│── tsconfig.json
├── public
│  ├── index.html
│  ├── manifest.json
│  └── robots.txt
├── src
│  ├── App.js
│  ├── index.js
│  ├── router.tsx
│  ├── constants
│  │    ├── apiEndPoints.ts
│  │    ├── axiosClient.ts
│  │    └── fallback.ts
│  │    └── index.ts
│  │    └── menuList.ts
|  |
│  ├── components
│  │    ├── Container
│  │    │   ├── index.tsx
│  │    │   └── index.module.scss
│  │    ├── Image
│  │    │   ├── index.tsx
│  │    ├── Loader
│  │    │   ├── index.tsx
│  │    ├── Page
│  │    │   ├── index.tsx
│  │    ├── ProductCard
│  │    │   ├── index.tsx
│  │    │   └── index.module.scss
│  │    ├── ProtectedRoute
│  │    │   ├── index.tsx
│  │    ├── suspense-loader
│  │    │   ├── index.tsx
│  │    │   └── index.module.scss
│  │    └── index.ts
│  │
│  ├── pages
│  │    ├── CartItem
│  │    │   └── index.tsx
│  │    ├── Orders
│  │    │   └── index.tsx
│  │    ├── products
│  │    │   └── index.tsx
│  │    ├── Register
│  │    │   └── index.tsx
│  │    ├── Login
│  │    │   ├── index.tsx
│  │    │   └── styles.module.scss
│  │    └── not-found
│  │       └── index.js
│  │
│  ├── Store
│  │    ├── auth.store.tsx
│  │    ├── cart.store.tsx
│  │    ├── index.ts
│  │    ├── loading.store.tsx
│  │    ├── products.store.tsx
│  │    └── utils.ts
|  |
│  ├── layouts
│  │    ├── base-layout
│  │    │   ├── index.tsx
│  │    │   └── index.module.scss
│  │    └── index.ts
|  |
│  ├── models
│  │    ├── common.ts
│  │    ├── products.ts
│  │    ├── index.ts
│  │    └── user.ts
|  |
│  ├── utils
│  │    ├── localStorageHelper.ts
│  │    └── index.ts
│  │
│  │
└──└──  styles
        ├── global.scss
        └── main.scss
        └── mixins.scss
        └── variables.scss
```

## Dependencies

- [axios](https://www.npmjs.com/package/axios)
- [@craco/craco](https://www.npmjs.com/package/@craco/craco)
- [zustand](https://www.npmjs.com/package/@reduxjs/toolkit)
- [antd](https://www.npmjs.com/package/antd)
- [@ant-design/icons](https://www.npmjs.com/package/react-redux)
- [node-sass](https://www.npmjs.com/package/node-sass)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
