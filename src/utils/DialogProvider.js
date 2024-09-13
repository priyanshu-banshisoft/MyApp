// src/utils/DialogProvider.js
import React, { createContext, useContext, useState } from 'react';
import { Modal, View, StyleSheet } from 'react-native';

// Create context for the dialog
const DialogContext = createContext();

// Dialog Provider component
export const DialogProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [dialogContent, setDialogContent] = useState(null);

  // Function to show the dialog with custom content
  const showDialog = (content) => {
    setDialogContent(content);
    setIsVisible(true);
  };

  // Function to hide the dialog
  const hideDialog = () => {
    setIsVisible(false);
    setDialogContent(null);
  };

  return (
    <DialogContext.Provider value={{ showDialog, hideDialog }}>
      {children}
      <Modal
        visible={isVisible}
        transparent
        animationType="fade"
        onRequestClose={hideDialog}
      >
        <View style={styles.overlay}>
          <View style={styles.dialog}>
            {/* Render the custom content passed to showDialog */}
            {dialogContent}
          </View>
        </View>
      </Modal>
    </DialogContext.Provider>
  );
};

// Custom hook to use the dialog
export const useDialog = () => useContext(DialogContext);

// Styles for the dialog
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialog: {
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
