import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import '../styles/employmentTable.css'

interface Employment {
  employer: string;
  position: string;
  from: string;
  to: string;
}

interface EmploymentTableComponentProps {
  employment: Employment[];
}

const EmploymentTableComponent: React.FC<EmploymentTableComponentProps> = ({ employment }) => (
  <Table size="small">
    <TableHead>
      <TableRow>
        <TableCell className="employment-table-cell" />
        <TableCell className="employment-table-head-cell">
          <Typography variant="caption" className="employment-table-cell-strong">
            From
          </Typography>
        </TableCell>
        <TableCell className="employment-table-head-cell">
          <Typography variant="caption" className="employment-table-cell-strong">
            To
          </Typography>
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {employment.map((o, i) => (
        <TableRow key={i}>
          <TableCell className="employment-table-cell">
            <Typography variant="body2" className="employment-table-cell-strong">
              {o.employer}
            </Typography>
            <Typography variant="caption" className="employment-table-cell-caption">
              {o.position}
            </Typography>
          </TableCell>
          <TableCell className="employment-table-cell">
            <Typography variant="caption">{o.from}</Typography>
          </TableCell>
          <TableCell className="employment-table-cell">
            <Typography variant="caption">{o.to}</Typography>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default EmploymentTableComponent;
