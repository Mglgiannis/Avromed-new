import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';

export default function SettingsButton({ sx }) {
  return (
    <Typography variant="overline" sx={{ color: '#009688', ...sx }}>
      AVROMED HOSPITAL
    </Typography>
  );
}

SettingsButton.propTypes = {
  sx: PropTypes.object,
};
