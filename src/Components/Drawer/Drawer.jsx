import { useState } from 'react';
import {
  Drawer,
  Box,
  TextField,
  Button,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  Chip,
  Typography,
  Avatar,
  InputAdornment,
  Divider,
} from '@mui/material';
import Close from '@mui/icons-material/Close';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import drawerStyles from './Drawerstyle'; // Adjust the path as needed

export default function RightDrawer({ open, onClose }) {
  const [selectedManager, setSelectedManager] = useState('Steven');

  const handleClearSelection = () => {
    setSelectedManager('');
  };

  const list = () => (
    <Box sx={drawerStyles.container} role='presentation'>
      <Box sx={drawerStyles.header}>
        <Typography variant='body1' >
          Add Member
        </Typography>
      </Box>
      <Divider />
      
      <Typography variant='caption' sx={drawerStyles.sectionLabel}>Name</Typography>
      <TextField
        required
        placeholder='Type name'
        fullWidth={false}
        sx={drawerStyles.textField}
      />

      <Typography variant='caption' sx={drawerStyles.sectionLabel}>Email</Typography>
      <TextField
        required
        placeholder='Email'
        fullWidth={false}
        sx={drawerStyles.textField}
      />

      <Typography variant='caption' sx={drawerStyles.sectionLabel}>Date of Joining</Typography>
      <TextField
        type="date"
        required
        InputLabelProps={{ shrink: true,width:'35px' }}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <CalendarTodayIcon style={{ fontSize: '20px', color: '#9e9e9e' }} />
            </InputAdornment>
          ),
        }}
        sx={drawerStyles.dateField}
      />

      <Typography variant='caption' sx={drawerStyles.sectionLabel}>Department</Typography>
      <TextField
        placeholder='Select department'
        fullWidth
        sx={drawerStyles.textField}
      />

      <Typography variant='caption' sx={drawerStyles.sectionLabel}>Designation</Typography>
      <FormControl fullWidth required sx={{ '& .MuiInputBase-root': { height: '40px' } }}>
        <Select
          displayEmpty
          defaultValue=""
          inputProps={{ 'aria-label': 'Without label' }}
          sx={drawerStyles.selectField}
        >
          <MenuItem value="" disabled>Select designation</MenuItem>
          <MenuItem value='Manager'>Manager</MenuItem>
          <MenuItem value='Developer'>Developer</MenuItem>
          <MenuItem value='Designer'>Designer</MenuItem>
        </Select>
      </FormControl>

      <Typography variant='caption' sx={drawerStyles.sectionLabel}>Role</Typography>
      <FormControl fullWidth required sx={{ '& .MuiInputBase-root': { height: '40px' } }}>
        <Select
          displayEmpty
          defaultValue=""
          inputProps={{ 'aria-label': 'Without label' }}
          sx={drawerStyles.selectField}
        >
          <MenuItem value="" disabled>Select Role</MenuItem>
          <MenuItem value='Admin'>Admin</MenuItem>
          <MenuItem value='Editor'>Editor</MenuItem>
          <MenuItem value='Viewer'>Viewer</MenuItem>
        </Select>
      </FormControl>

      <Typography variant='caption' sx={drawerStyles.sectionLabel}>Reporting To</Typography>
      <FormControl fullWidth>
        <Select
          onChange={(e) => setSelectedManager(e.target.value)}
          value={selectedManager}
          displayEmpty
          renderValue={(selected) =>
            selected ? (
              <Typography>{selected}</Typography>
            ) : (
              <Typography>Manager name</Typography>
            )
          }
          sx={drawerStyles.selectField}
        >
          <MenuItem value="Steven">Steven</MenuItem>
          <MenuItem value="Alice">Alice</MenuItem>
          <MenuItem value="John">John</MenuItem>
        </Select>

        {selectedManager && (
          <Box mt={1} display="flex" alignItems="center" justifyContent="flex-start">
            <Chip
              avatar={
                <Avatar
                  src={
                    selectedManager === "Steven"
                      ? "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
                      : selectedManager === "Alice"
                      ? "https://via.placeholder.com/40?text=A"
                      : "https://via.placeholder.com/40?text=J"
                  }
                />
              }
              label={selectedManager}
              onDelete={handleClearSelection}
              deleteIcon={<Close />}
              sx={drawerStyles.chip}
            />
          </Box>
        )}
      </FormControl>

      <Box sx={drawerStyles.buttonContainer}>
        <Button variant='contained' onClick={onClose} sx={{ padding: '9px 20px', width: '184px', backgroundColor: '#49C792', textTransform: 'none' }}>
          Add Member
        </Button>
        <Button variant='outlined' color='error' onClick={onClose} sx={{ padding: '9px 20px', width: '184px', border: '1px solid #49C792', color: '#49C792', textTransform: 'none' }}>
          Cancel
        </Button>
      </Box>
    </Box>
  );

  return (
    <div>
      {open && (
        <IconButton onClick={onClose} sx={drawerStyles.closeButton}>
          <Close />
        </IconButton>
      )}
      <Drawer anchor='right' open={open} onClose={onClose}>
        {list()}
      </Drawer>
    </div>
  );
}