import React from 'react';
import { Box, Divider, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import '../styles/courseTraining.css'

interface Certification {
  title: string;
  provider: string;
  date: string;
  duration: string;
  certificate: string;
}

interface CoursesTrainingComponentProps {
  certifications: Certification[];
}

const CoursesTrainingComponent: React.FC<CoursesTrainingComponentProps> = ({ certifications }) => (
  <Stack direction="column" spacing={1} className="courses-training-stack">
    <Typography variant="body1" className="courses-training-typography">
      <strong>Course, Training</strong>
    </Typography>
    <Table size="small">
      <TableHead>
        <TableRow>
          {['Title', 'Provider', 'Date', 'Duration', 'Certificate'].map((o) => (
            <TableCell key={o} className="courses-training-table-cell">
              <Typography variant="caption">
                <strong>{o}</strong>
              </Typography>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {certifications.map((o, i) => (
          <TableRow key={i}>
            <TableCell className="courses-training-table-cell">
              <Typography variant="caption">{o.title}</Typography>
            </TableCell>
            <TableCell className="courses-training-table-cell">
              <Typography variant="caption">{o.provider}</Typography>
            </TableCell>
            <TableCell className="courses-training-table-cell">
              <Typography variant="caption">{o.date}</Typography>
            </TableCell>
            <TableCell className="courses-training-table-cell">
              <Typography variant="caption">{o.duration}</Typography>
            </TableCell>
            <TableCell className="courses-training-table-cell">
              <Typography variant="caption">{o.certificate}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Stack>
);

export default CoursesTrainingComponent;
