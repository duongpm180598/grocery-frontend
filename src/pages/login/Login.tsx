import {
  Box,
  Card,
  Typography,
  Grid,
  Container,
  Divider,
  Button,
  FormControl,
  TextField,
  Link
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import React, { useCallback } from 'react';

const MainContent = styled(Box)(
  ({ theme }) => `
      height: 100%;
      display: flex;
      flex: 1;
      overflow: auto;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  `
);

const LoginPage = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate('/ticket', { replace: true }),
    [navigate]
  );
  const onSubmit = (event) => {
    console.log(event);
  };

  return (
    <>
      <Helmet>
        <title>Đăng nhập</title>
      </Helmet>
      <MainContent>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '100vh' }}
        >
          <Container maxWidth="sm">
            <Card sx={{ textAlign: 'center', mt: 3, p: 4 }}>
              <Typography variant="h3">
                Hệ thống quản lý cửa hàng tạp hóa Duy Phát
              </Typography>
              <FormControl variant="outlined" fullWidth>
                <TextField required label="Tên đăng nhập" margin="normal" />
              </FormControl>
              <FormControl variant="outlined" fullWidth>
                <TextField
                  required
                  type="password"
                  label="Mật khẩu"
                  margin="normal"
                />
              </FormControl>
              <Button variant="outlined" type="submit" onClick={handleOnClick}>
                Đăng nhập
              </Button>
              <Divider sx={{ my: 4 }}>HOẶC</Divider>
              <Typography>
                Nếu chưa có tài khoản đăng ký tại <Link href="/">đây</Link>
              </Typography>
            </Card>
          </Container>
        </Grid>
      </MainContent>
    </>
  );
};

export default LoginPage;
