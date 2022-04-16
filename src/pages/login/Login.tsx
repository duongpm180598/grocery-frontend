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
import React, { useCallback, useRef } from 'react';
import { login, setLocalStorage } from 'src/api/auth';

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
  const handleNavigate = useCallback(
    () => navigate('/ticket', { replace: true }),
    [navigate]
  );
  const [form, setForm] = React.useState({
    email: '',
    password: ''
  });

  const handleChangeForm = (formControl) => (event) => {
    setForm({ ...form, [formControl]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    login(form)
      .then((res) => {
        if (res.data) {
          setLocalStorage(res.data);
          handleNavigate();
        }
      })
      .catch((err) => {});
  };

  return (
    <>
      <Helmet>
        <title>Đăng nhập - Tạp hóa Duy Phát</title>
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
              <form noValidate autoComplete="off" onSubmit={onSubmit}>
                <FormControl variant="outlined" fullWidth>
                  <TextField
                    required
                    label="Tên đăng nhập"
                    margin="normal"
                    onChange={handleChangeForm('email')}
                  />
                </FormControl>
                <FormControl variant="outlined" fullWidth>
                  <TextField
                    required
                    type="password"
                    label="Mật khẩu"
                    margin="normal"
                    onChange={handleChangeForm('password')}
                  />
                </FormControl>
                <Button variant="outlined" type="submit">
                  Đăng nhập
                </Button>
              </form>
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
