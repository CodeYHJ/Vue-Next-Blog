import { createApp } from "vue";

import { router } from "@router/router";

import App from "./App";

import '@less/app.less'

const app = createApp(App);

app.use(router);

app.mount("#app");

