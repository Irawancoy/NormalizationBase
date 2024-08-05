import React from 'react';
import { Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import '../styles/education.css'

interface Education {
  school: string;
  degree: string;
  subject: string;
  from: string;
  to: string;
}

interface EducationComponentProps {
  education: Education[];
}

const EducationComponent: React.FC<EducationComponentProps> = ({ education }) => (
  <Stack direction="column" spacing={1} className="education-stack">
    <Typography variant="body1" className="education-typography">
      <strong>Education</strong>
    </Typography>
    <Table size="small">
      <TableHead>
        <TableRow>
          {['School', 'Degree', 'Subject', 'From', 'To'].map((o) => (
            <TableCell key={o} className="education-table-cell">
              <Typography variant="caption">
                <strong>{o}</strong>
              </Typography>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {education.map((o, i) => (
          <TableRow key={i}>
            <TableCell className="education-table-cell">
              <Typography variant="caption">{o.school}</Typography>
            </TableCell>
            <TableCell className="education-table-cell">
              <Typography variant="caption">{o.degree}</Typography>
            </TableCell>
            <TableCell className="education-table-cell">
              <Typography variant="caption">{o.subject}</Typography>
            </TableCell>
            <TableCell className="education-table-cell">
              <Typography variant="caption">{o.from}</Typography>
            </TableCell>
            <TableCell className="education-table-cell">
              <Typography variant="caption">{o.to}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Stack>
);

export default EducationComponent;
