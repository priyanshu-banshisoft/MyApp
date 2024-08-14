// src/utils/BottomSheetUtils.js
import React, { createContext, useContext, useRef, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

// Create context for BottomSheet
const BottomSheetContext = createContext();

export const BottomSheetProvider = ({ children }) => {
  const [content, setContent] = useState(null);
  const bottomSheetRef = useRef(null);

  const showBottomSheet = (content) => {
    setContent(content);
    bottomSheetRef.current.open();
  };

  const hideBottomSheet = () => {
    bottomSheetRef.current.close();
  };

  return (
    <BottomSheetContext.Provider value={{ showBottomSheet, hideBottomSheet }}>
      {children}
      <RBSheet
        ref={bottomSheetRef}
        height={200}
        openDuration={250}
        closeDuration={250}
        customStyles={{
          container: styles.modalContent,
        }}
        onClose={hideBottomSheet}
      >
        {content}
      </RBSheet>
    </BottomSheetContext.Provider>
  );
};

export const useBottomSheet = () => useContext(BottomSheetContext);

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
