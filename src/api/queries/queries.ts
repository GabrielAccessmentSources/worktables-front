import mondaySdk from "monday-sdk-js";
const monday = mondaySdk();
export const FETCH_LOCATIONS =  monday.api(`query { boards { id, name, items { id, name} }} `).then(res => {
    return res.data;
});