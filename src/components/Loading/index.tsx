import { CircularProgress } from '@mui/material';

export const Loading = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <CircularProgress />
    </div>
  );
};
