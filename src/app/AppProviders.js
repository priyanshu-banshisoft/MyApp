// src/app/AppProviders.js
import React from 'react';
import { BaseApplicationProvider } from './BaseApplication';
import { GlobalStateProvider } from '../utils/GlobalState';
import { LoaderProvider } from '../components/GlobalLoader';
import {BottomSheetProvider} from '../../src/utils/BottomSheetUtils'
import { RootSiblingParent } from 'react-native-root-siblings';
import { DialogProvider } from '../utils/DialogProvider';



const AppProviders = ({ children }) => {
  return (
    <BaseApplicationProvider>
      <LoaderProvider>
        <BottomSheetProvider>
          <DialogProvider>
        <RootSiblingParent>
            <GlobalStateProvider>
              {children}
            </GlobalStateProvider>
          </RootSiblingParent>
          </DialogProvider>
        </BottomSheetProvider>
      </LoaderProvider>
    </BaseApplicationProvider>
  );
};

export default AppProviders;
