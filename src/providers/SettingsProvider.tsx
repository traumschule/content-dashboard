import { createContext, PropsWithChildren, useState } from "react";
import SettingsWidget, { Settings } from "../components/SettingsWidget";

export const SettingsContext = createContext<Settings>({});

export const SettingsProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [operatorKey, setOperatorKey] = useState<string>();
  return (
    <SettingsContext.Provider value={{ operatorKey }}>
      <SettingsWidget
        currentSettings={{ operatorKey: operatorKey || "" }}
        onSubmit={({ operatorKey }) =>
          setOperatorKey(operatorKey)
        }
      />
      {children}
    </SettingsContext.Provider>
  );
};
