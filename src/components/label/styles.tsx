import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

export const StyledLabel = styled(Box)(({ theme, options }) => {
  const lightMode = theme.palette.mode === 'light';

  const filledVariant = options.variant === 'filled';

  const outlinedVariant = options.variant === 'outlined';

  const softVariant = options.variant === 'soft';

  const defaultStyle = {
    ...(options.color === 'default' && {
      // FILLED
      ...(filledVariant && {
        color: lightMode ? theme.palette.common.white : theme.palette.grey[800],
        backgroundColor: theme.palette.text.primary,
      }),
      // OUTLINED
      ...(outlinedVariant && {
        backgroundColor: 'transparent',
        color: theme.palette.text.primary,
        border: `2px solid ${theme.palette.text.primary}`,
      }),
      // SOFT
      ...(softVariant && {
        color: theme.palette.text.secondary,
        backgroundColor: alpha(theme.palette.grey[500], 0.16),
      }),
    }),
  };

  const colorStyle = {
    ...(options.color !== 'default' && {
      // FILLED
      ...(filledVariant && {
        color: theme.palette[options.color].contrastText,
        backgroundColor: theme.palette[options.color].main,
      }),
      // OUTLINED
      ...(outlinedVariant && {
        backgroundColor: 'transparent',
        color: theme.palette[options.color].main,
        border: `2px solid ${theme.palette[options.color].main}`,
      }),
      // SOFT
      ...(softVariant && {
        color: theme.palette[options.color][lightMode ? 'dark' : 'light'],
        backgroundColor: alpha(theme.palette[options.color].main, 0.16),
      }),
    }),
  };

  return {
    height: 24,
    minWidth: 24,
    lineHeight: 0,
    borderRadius: 6,
    cursor: 'default',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    display: 'inline-flex',
    justifyContent: 'center',
    textTransform: 'capitalize',
    padding: theme.spacing(0, 0.75),
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightBold,
    transition: theme.transitions.create('all', {
      duration: theme.transitions.duration.shorter,
    }),
    ...defaultStyle,
    ...colorStyle,
  };
});
