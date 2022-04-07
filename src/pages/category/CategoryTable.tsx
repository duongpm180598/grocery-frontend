import { FC, ChangeEvent, useState } from 'react';
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

import { CryptoOrder, CryptoOrderStatus } from 'src/models/crypto_order';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';

interface Filters {
  status?: CryptoOrderStatus;
}

const applyFilters = (
  cryptoOrders: CryptoOrder[],
  filters: Filters
): CryptoOrder[] => {
  return cryptoOrders.filter((cryptoOrder) => {
    let matches = true;

    if (filters.status && cryptoOrder.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  cryptoOrders: CryptoOrder[],
  page: number,
  limit: number
): CryptoOrder[] => {
  return cryptoOrders.slice(page * limit, page * limit + limit);
};

const CategoryTable: FC<any> = ({ categories }) => {
  const handleSearchProduct = (event) => {
    console.log(event);
    console.log(categories);
  };
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    status: null
  });
  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };
  const filteredCryptoOrders = applyFilters(categories, filters);
  const paginatedCryptoOrders = applyPagination(
    filteredCryptoOrders,
    page,
    limit
  );
  const theme = useTheme();
  return (
    <Card>
      <CardHeader
        action={
          <Box width={300}>
            <FormControl fullWidth variant="outlined">
              <TextField
                id="outlined-basic"
                label="Nhập mã sản phẩm"
                variant="outlined"
                onSubmitCapture={handleSearchProduct}
              />
            </FormControl>
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
              <TableCell align="right">Số lượng</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              hover
              // key={cryptoOrder.id}
              // selected={isCryptoOrderSelected}
            >
              <TableCell>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  color="text.primary"
                  gutterBottom
                  noWrap
                >
                  8873948573587
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
                  234092384
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
                  35,500
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
                  35,500
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
                  LĂN KHỬ MÙI
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
                  CHAI
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  color="text.primary"
                  gutterBottom
                  noWrap
                >
                  5
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
                      '&:hover': { background: theme.colors.error.lighter },
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
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          count={filteredCryptoOrders.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box>
    </Card>
  );
};

CategoryTable.propTypes = {
  cryptoOrders: PropTypes.array.isRequired
};

CategoryTable.defaultProps = {
  cryptoOrders: []
};

export default CategoryTable;
