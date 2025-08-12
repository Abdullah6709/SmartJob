import React from 'react';
import {
  Box,
  Button,
  Stack,
  Divider,
  useTheme
} from '@mui/material';
import TabsPanel from './TabsPanel';

const RequiterDetails = ({ requiter, onClose }) => {
  const theme = useTheme();

  return (
    <Box>
      <TabsPanel requiter={requiter} onClose={onClose} />
      
      <Divider sx={{ mx: 3 }} />
      
      <Box p={3}>
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button 
            variant="outlined" 
            color="error"
            sx={{
              px: 4,
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 600
            }}
          >
            Reject
          </Button>
          <Button 
            variant="contained" 
            color="primary"
            sx={{
              px: 4,
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 600,
              boxShadow: theme.shadows[2],
              '&:hover': {
                boxShadow: theme.shadows[4]
              }
            }}
          >
            Accept Contact
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default RequiterDetails;