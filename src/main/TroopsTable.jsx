import React, { useMemo, useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel } from "@mui/material";

const TroopsTable = ({ troops }) => {
    const [order, setOrder] = useState('desc');
    const [orderBy, setOrderBy] = useState('name');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const createSortHandler = (property) => (event) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    const handleChangePage = (_, newPage) => {
        setPage(newPage);
    }
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const visibleRows = useMemo(
        () =>
            troops
                .sort((a, b) => ((a[orderBy] > b[orderBy]) !== (order === 'asc')) ? -1 : 1)
                .slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage,
                ),
        [order, orderBy, page, rowsPerPage],
    );
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - troops.length) : 0;
    return (
        <Box>
            <TableContainer>
                <Table
                    sx={{ minWidth: 750 }}
                    aria-labelledby="tableTitle"
                    size='medium'
                >
                    <TableHead>
                        <TableRow>
                            <TableCell
                                align='left'
                                padding='normal'
                                sortDirection={orderBy === 'name' ? order : false}
                            >
                                <TableSortLabel
                                    active={orderBy === 'name'}
                                    direction={orderBy === 'name' ? order : 'asc'}
                                    onClick={createSortHandler('name')}
                                >
                                    Name
                                </TableSortLabel>
                            </TableCell>
                            <TableCell
                                align='left'
                                padding='normal'
                                sortDirection={orderBy === 'level' ? order : false}
                            >
                                <TableSortLabel
                                    active={orderBy === 'level'}
                                    direction={orderBy === 'level' ? order : 'asc'}
                                    onClick={createSortHandler('level')}
                                >
                                    Level
                                </TableSortLabel>
                            </TableCell>
                            <TableCell
                                align='left'
                                padding='normal'
                                sortDirection={orderBy === 'maxLevel' ? order : false}
                            >
                                <TableSortLabel
                                    active={orderBy === 'maxLevel'}
                                    direction={orderBy === 'maxLevel' ? order : 'asc'}
                                    onClick={createSortHandler('maxLevel')}
                                >
                                    Max Level
                                </TableSortLabel>
                            </TableCell>
                            <TableCell
                                align='left'
                                padding='normal'
                                sortDirection={orderBy === 'village' ? order : false}
                            >
                                <TableSortLabel
                                    active={orderBy === 'village'}
                                    direction={orderBy === 'village' ? order : 'asc'}
                                    onClick={createSortHandler('village')}
                                >
                                    Village
                                </TableSortLabel>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {visibleRows.map((row, index) => {
                            const labelId = `enhanced-table-checkbox-${index}`;
                            return (
                                <TableRow
                                    hover
                                    tabIndex={-1}
                                    key={row.id}
                                    sx={{ cursor: 'pointer' }}
                                >
                                    <TableCell
                                        component="th"
                                        id={labelId}
                                        scope="row"
                                        padding="none"
                                    >
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="left">{row.level}</TableCell>
                                    <TableCell align="left">{row.maxLevel}</TableCell>
                                    <TableCell align="left">{row.village}</TableCell>
                                </TableRow>
                            );
                        })}
                        {emptyRows > 0 && (
                            <TableRow
                                style={{
                                    height: 53 * emptyRows,
                                }}
                            >
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={troops.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Box>
    );
};

export default TroopsTable;
