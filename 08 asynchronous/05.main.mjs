import { promiseExecutor } from "./06.utils.mjs";

async function promiseAsyncAwait() {
    try {
        console.log("start!");
        const result = await promiseExecutor()
        console.log(result)
    } catch (error) {
        console.log(error);
    } finally {
        console.log("End.");
    }
}

promiseAsyncAwait()