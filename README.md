# vrontend
Web frontend using Vue

> This boiller plate made for convenient preparation while
> starting new project.

# Table Of Contents
1. Usage
    * Getting Started
    * Directory Structure
2. Tech Stack
    * List
    * Auto Import

# Usage

## Getting Started
1. Clone the repository

```
git clone https://github.com/hadihammurabi/vrontend.git
```

2. Go to project directory

```
cd vrontend
```

3. Install dependencies needed

```
yarn
```

4. Start the dev server

```
yarn dev
```

## Directory Structure
<img width="279" alt="image" src="https://github.com/hadihammurabi/vrontend/assets/16364286/c9f9860d-b68e-45c8-8484-104730ef331b">

# Tech Stack

## List
This template includes utilities bellow.
Name | Description
-|-
Vue | Library/framework to do DOM manipulation
Vue Router | Library to do client-side routing (use history mode by default)
PrimeVue | Component library that have most of things needed
Axios | HTTP client to do network communication

## Auto Import
Several functions/components are auto-imported using:
* `unplugin-auto-import/vite`
* `unplugin-vue-components/vite`

Here specific things registered to be auto-imported.
* `vue`
* `vue-router`
* `./src/composable`
* `./src/component`
* `./src/page`

This configuration increase productivity because we no need to do import commont things any more.
We can use it directly.

Example:
```vue
<script lang="ts" setup>
const route = useRoute();
const fullPath = ref('');
onMounted(() => {
  fullPath.value = route.fullPath;
});
</script>

<template>
  {{ fullPath }} Me
</template>
```

