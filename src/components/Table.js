import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const countryData = require('../data/raw.json');

const columns = [
    {
        id: 'country',
        label: 'Country',
        width: '20%',
        align: 'left',
    },
    {
        id: 'confirmed',
        label: 'Confirmed',
        align: 'right',
        width: '30%',
        color: '#3498db',
        format: (value) => value.toLocaleString(),
    },
    // {
    //     id: 'newConfirmed',
    //     label: 'New Cases',
    //     align: 'right',
    //     width: '20%',
    //     color: '#3498db',
    //     format: (value) => value.toLocaleString(),
    // },
    {
        id: 'deceased',
        label: 'Deceased',
        align: 'right',
        width: '25%',
        color: '#e74c3c',
        format: (value) => value.toLocaleString(),
    },
    // {
    //     id: 'newDeceased',
    //     label: 'New Cases',
    //     align: 'right',
    //     width: '15%',
    //     color: '#e74c3c',
    //     format: (value) => value.toLocaleString(),
    // },
    {
        id: 'recovered',
        label: 'Recovered',
        align: 'right',
        width: '25%',
        color: '#16a085',
        format: (value) => value.toLocaleString(),
    },
];

function compareConfirmed(a, b) {
    const countryA = a.confirmed
    const countryB = b.confirmed

    let comparison = 0;
    if (countryA < countryB) {
        comparison = 1;
    } else if (countryA > countryB) {
        comparison = -1;
    }
    return comparison;
}

function getCountryData() {
    let rows = []
    for (var country in countryData) {
        let latestData = countryData[country].length - 1
        let row = {
            country: country,
            confirmed: countryData[country][latestData].confirmed,
            recovered: countryData[country][latestData].recovered,
            deceased: countryData[country][latestData].deaths,
            // newConfirmed: (countryData[country][latestData].confirmed - countryData[country][latestData - 1].confirmed),
            // newDeceased: (countryData[country][latestData].deaths - countryData[country][latestData - 1].deaths),
        }
        rows.push(row)
    }
    rows.sort(compareConfirmed)
    return rows
}

const rows = getCountryData()

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 840,
    },
});

export default function TrackingTable() {

    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ width: column.width }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align} style={{ color: column.color }}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
