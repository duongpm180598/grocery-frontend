import { FC, ChangeEvent, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Tooltip,
  Divider,
  Box,
  FormControl,
  TextField,
  Card,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Typography,
  useTheme,
  CardHeader,
  TablePagination
} from '@mui/material';

import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import { getListProducts, getProductByBarcode } from 'src/api/product';
import { Loading } from 'src/components/Loading';

const ProductTable: FC<any> = () => {
  const theme = useTheme();
  const [products, setProducts] = useState<any>(null);
  const [pagination, setPagination] = useState({ page: 0, pageSize: 25 });
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(25);
  const [filter, setFilter] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
    setPagination({ ...pagination, page: newPage });
    fetchListProduct(pagination);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
    setPagination({ ...pagination, pageSize: limit });
    fetchListProduct(pagination);
  };
  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  };
  const handleSearchProduct = (event) => {
    event.preventDefault();
    const data = {
      data: [],
      page: 1,
      pageSize: 25,
      total: 1,
      totalPage: 1
    };
    if (filter) {
      getProductByBarcode(filter)
        .then((res) => {
          data.data = res.data;
          setProducts(data);
        })
        .catch((error) => {});
    } else {
      data.data = [];
      setProducts(data);
    }
  };
  const fetchListProduct = (pagination) => {
    setLoading(true);
    const params = {
      page: pagination.page + 1,
      pageSize: pagination.pageSize
    };
    getListProducts(params)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchListProduct(pagination);
  }, []);
  return (
    <Card>
      <CardHeader
        action={
          <Box width={300}>
            <form noValidate onSubmit={handleSearchProduct}>
              <FormControl fullWidth variant="outlined">
                <TextField
                  id="outlined-basic"
                  label="Nhập mã sản phẩm"
                  variant="outlined"
                  onChange={onChangeFilter}
                />
              </FormControl>
            </form>
          </Box>
        }
      />
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Mã vạch</TableCell>
              <TableCell>Tên sản phẩm</TableCell>
              <TableCell align="right">Giá nhập</TableCell>
              <TableCell align="right">Giá bán</TableCell>
              <TableCell>Loại sản phẩm</TableCell>
              <TableCell>Đơn vị</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products
              ? products.data.map((product) => (
                  <TableRow hover key={product.barcode}>
                    <TableCell>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {product.barcode}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {product.name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        align="right"
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {product.importPrice}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        align="right"
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {product.exportPrice}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {product.category}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {product.unit}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Tooltip title="Sửa" arrow>
                        <IconButton
                          sx={{
                            '&:hover': {
                              background: theme.colors.primary.lighter
                            },
                            color: theme.palette.primary.main
                          }}
                          color="inherit"
                          size="small"
                        >
                          <EditTwoToneIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Xóa" arrow>
                        <IconButton
                          sx={{
                            '&:hover': {
                              background: theme.colors.error.lighter
                            },
                            color: theme.palette.error.main
                          }}
                          color="inherit"
                          size="small"
                        >
                          <DeleteTwoToneIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          count={products?.total ? products.total : 25}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[25, 50, 75, 100]}
        />
      </Box>
    </Card>
  );
};

export default ProductTable;
