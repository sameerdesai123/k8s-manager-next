import { ipcMain } from "electron";
import { kubeConfig, kubeApi } from "./k8s-client";

ipcMain.on("ready", async (event, arg) => {
    const context = kubeConfig.getContextObject(kubeConfig.getCurrentContext());
    event.reply("current-context", context.name);
    event.reply("current-cluster", context.cluster);
    event.reply("current-user", context.user);
    event.reply("current-namespace", context.namespace);
});

const eventsRegistry = {
    "ping": "pong"
};

export {
    eventsRegistry,
}