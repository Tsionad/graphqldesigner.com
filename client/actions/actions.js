import * as types from './action-types.js';

// -------------------------- Welcome and Intro ----------------------------//

export const chooseDatabase = dbName => ({
  type: types.CHOOSE_DATABASE,
  payload: dbName
});

export const handleSnackbarUpdate = status => ({
  type: types.HANDLE_SNACKBAR_UPDATE,
  payload: status
});

// ----------------------------- Schema App --------------------------------//
// export const tablesToMongoFormat = () => ({
//   type: types.TABLES_TO_MONGO_FORMAT
// })

export const openTableCreator = () => ({
  type: types.OPEN_TABLE_CREATOR
});

export const saveTableDataInput = () => ({
  type: types.SAVE_TABLE_DATA_INPUT
});

export const deleteTable = tableIndex => ({
  type: types.DELETE_TABLE,
  payload: tableIndex
});

export const addField = fieldName => ({
  type: types.ADD_FIELD,
  payload: fieldName
});

export const deleteField = tableIndex => ({
  type: types.DELETE_FIELD,
  payload: tableIndex
});

export const addFieldClicked = tableIndex => ({
  type: types.ADD_FIELD_CLICKED,
  payload: tableIndex
});

export const saveFieldInput = database => ({
  type: types.SAVE_FIELD_INPUT,
  payload: database
});

export const handleFieldsUpdate = field => ({
  type: types.HANDLE_FIELDS_UPDATE,
  payload: field
});

export const handleFieldsSelect = field => ({
  type: types.HANDLE_FIELDS_SELECT,
  payload: field
});

export const handleTableNameChange = tableName => ({
  type: types.HANDLE_TABLE_NAME_CHANGE,
  payload: tableName
});

export const handleTableID = () => ({
  type: types.HANDLE_TABLE_ID
});

export const handleSelectedTable = tableIndex => ({
  type: types.HANDLE_SELECTED_TABLE,
  payload: tableIndex
});

export const handleNewProject = reset => ({
  type: types.HANDLE_NEW_PROJECT,
  payload: reset
});

// ----------------------------- Query App -------------------------------//

export const createQuery = query => ({
  type: types.CREATE_QUERY,
  payload: query
});

export const openCreateQuery = () => ({
  type: types.OPEN_CREATE_QUERY
})

export const handleSubQueryChange = field => ({
  type: types.HANDLE_SUBQUERY_CHANGE,
  payload: field
})

export const handleNewQueryChange = field => ({
  type: types.HANDLE_NEW_QUERY_CHANGE,
  payload: field
})