import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';

// thunks for async firebase operations
export const getMounts = createAsyncThunk(
  'mount_info/getMounts',
  (thunkAPI) => {
    return firestore()
      .collection('mount_info')
      .get()
      .then((querySnapshot) => {
        const mounts = [];
        querySnapshot.forEach((doc) => {
          mounts.push(doc.data());
        });
        return mounts;
        // return querySnapshot.docs;
      })
      .catch((error) => {
        console.log(error);
        return thunkAPI.rejectValue(error);
      });
  },
);

export const mountsSlice = createSlice({
  name: 'mount_info',
  initialState: {isLoading: false, error: null, mounts: null},
  reducers: {},
  extraReducers: (builder) => {
    // When we send a request,
    // getMounts.pending is fired
    builder.addCase(getMounts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    // When a server responses with data,
    // 'getMounts.fullfilled' is fired
    builder.addCase(getMounts.fulfilled, (state, {payload}) => {
      state.mounts = payload;
      state.isLoading = false;
    });

    // When a server responses with an error:
    builder.addCase(getMounts.rejected, (state, {payload}) => {
      if (payload) {
        state.error = payload;
      }
      state.isLoading = false;
    });
  },
});

// export const {updateMounts} = mountsSlice.actions;

export default mountsSlice.reducer;
