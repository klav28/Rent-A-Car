export const getCars = state => state.cars.items;

export const getIsLoading = state => state.cars.isLoading;

export const getError = state => state.cars.error;

// export const getSortedContacts = state => {
//   return getContacts(state)
//     .slice()
//     .sort((a, b) => (a.contactName < b.contactName ? -1 : 1));
// };

// export const getFilter = state => state.filter.filter;

// export const getFilteredContacts = state =>
//   getSortedContacts(state).filter(el =>
//     el.contactName.toLowerCase().includes(getFilter(state).toLowerCase())
//   );
