import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

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
        <TableCell sx={{ p: 0 }} />
        <TableCell width="50" sx={{ p: 0 }}>
          <Typography variant="caption">
            <strong>From</strong>
          </Typography>
        </TableCell>
        <TableCell width="50" sx={{ p: 0 }}>
          <Typography variant="caption">
            <strong>To</strong>
          </Typography>
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {employment.map((o, i) => (
        <TableRow key={i}>
          <TableCell sx={{ p: 0 }}>
            <Typography variant="body2">
              <strong>{o.employer}</strong>
            </Typography>
            <Typography variant="caption">{o.position}</Typography>
          </TableCell>
          <TableCell sx={{ p: 0 }}>
            <Typography variant="caption">{o.from}</Typography>
          </TableCell>
          <TableCell sx={{ p: 0 }}>
            <Typography variant="caption">{o.to}</Typography>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default EmploymentTableComponent;
