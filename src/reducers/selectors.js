export const getPageLoading = (state) => state.appReducer.loading || false;
export const getPageError = (state) => state.appReducer.error || false;
export const getBooks = (state) => state.appReducer.books || [];