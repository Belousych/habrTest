import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Document {
  id: string;
  title: string;
  status: 'in-progress' | 'under-review' | 'completed';
}

const loadFromLocalStorage = (): Document[] => {
  if (typeof window !== 'undefined') {
    try {
      const data = localStorage.getItem('documents');
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }
  return [];
};

const saveToLocalStorage = (state: Document[]) => {
  // Ensure localStorage is accessed only on the client-side
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('documents', JSON.stringify(state));
    } catch {
      // Ignore write errors
    }
  }
};

const documentsSlice = createSlice({
  name: 'documents',
  initialState: loadFromLocalStorage(),
  reducers: {
    addDocument: (
      state,
      action: PayloadAction<{ title: string; status: 'in-progress' }>
    ) => {
      state.push({ id: Date.now().toString(), ...action.payload });
    },
    updateDocumentStatus: (
      state,
      action: PayloadAction<{
        id: string;
        status: 'in-progress' | 'under-review' | 'completed';
      }>
    ) => {
      const { id, status } = action.payload;
      const document = state.find((doc) => doc.id === id);
      if (document) {
        document.status = status;
      }
    },
  },
});

export const { addDocument, updateDocumentStatus } = documentsSlice.actions;

const store = configureStore({
  reducer: {
    documents: documentsSlice.reducer,
  },
});

store.subscribe(() => saveToLocalStorage(store.getState().documents));

export default store;
