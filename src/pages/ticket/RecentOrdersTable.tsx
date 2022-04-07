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
  CardHeader
} from '@mui/material';

import { CryptoOrder, CryptoOrderStatus } from 'src/models/crypto_order';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { getProductByBarcode } from 'src/api/product';

interface RecentOrdersTableProps {
  className?: string;
  cryptoOrders: CryptoOrder[];
}

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

const RecentOrdersTable: FC<RecentOrdersTableProps> = ({ cryptoOrders }) => {
  const [filter, setFilter] = useState('');
  const [products, setProducts] = useState();
  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  };
  const handleSearchProduct = (event) => {
    event.preventDefault();
    if (filter) {
      getProductByBarcode(filter)
        .then((res) => {
          setProducts(res);
        })
        .catch((error) => {});
    } else {
      setProducts(null);
    }
  };
  const theme = useTheme();
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
        title="Danh sách sản phẩm"
      />
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Mã vạch</TableCell>
              <TableCell>Tên sản phẩm</TableCell>
              <TableCell>Loại sản phẩm</TableCell>
              <TableCell>Đơn vị</TableCell>
              <TableCell align="right">Số lượng</TableCell>
              <TableCell align="right">Giá bán</TableCell>
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
              <TableCell align="right">
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
            <TableRow>
              <TableCell colSpan={5}>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  color="text.primary"
                  gutterBottom
                  noWrap
                >
                  Tổng
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
                  100000
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

RecentOrdersTable.propTypes = {
  cryptoOrders: PropTypes.array.isRequired
};

RecentOrdersTable.defaultProps = {
  cryptoOrders: []
};

export default RecentOrdersTable;
