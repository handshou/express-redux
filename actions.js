// action.js

export const NEW_TAB = "NEW_TAB";
export const CLOSE_TAB = "CLOSE_TAB";

let nextTabId = 0;

export function newTab(content) {
  return { type: NEW_TAB, id: nextTabId++, content };
}

export function closeTab(id) {
  return { type: CLOSE_TAB, id };
}
