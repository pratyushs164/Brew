const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  databaseId: String(import.meta.env.VITE_APPWRITE_DB_ID),
  watchlistId: String(import.meta.env.VITE_APPWRITE_WATCHLIST_ID),
};
export default conf;
