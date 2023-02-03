import { Box, NativeBaseProvider } from 'native-base';
import { Home } from './src/pages/Home';

import { theme } from './src/styles/theme';

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex="1" bg={theme.colors.primary[100]}>
        <Home />
      </Box>
    </NativeBaseProvider>
  );
}
