import React from 'react';
import { Stack, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import '../styles/objectivePersonal.css'
interface Biodata {
  profile: string;
  placeOfBirth: string;
  dateOfBirth: string;
  gender: string;
  religion: string;
  language: string;
}

interface ObjectivePersonalComponentProps {
  biodata: Biodata;
}

const ObjectivePersonalComponent: React.FC<ObjectivePersonalComponentProps> = ({ biodata }) => (
  <Stack direction="column" spacing={1} className="objective-personal-stack">
    <Typography variant="body1" className="objective-personal-typography">
      <strong>Objective</strong>
    </Typography>
    <Typography variant="body2">{biodata.profile}</Typography>
    <Typography variant="body1" className="objective-personal-typography">
      <strong>Personal Detail</strong>
    </Typography>
    <Table size="small">
      <TableBody>
        <TableRow>
          <TableCell className="objective-personal-table-cell">
            <Typography variant="caption">
              <strong>Place of Birth</strong>
            </Typography>
          </TableCell>
          <TableCell className="objective-personal-table-cell">
            <Typography variant="caption">{biodata.placeOfBirth}</Typography>
          </TableCell>
          <TableCell className="objective-personal-table-cell">
            <Typography variant="caption">
              <strong>Date of Birth</strong>
            </Typography>
          </TableCell>
          <TableCell className="objective-personal-table-cell">
            <Typography variant="caption">{biodata.dateOfBirth}</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="objective-personal-table-cell">
            <Typography variant="caption">
              <strong>Gender</strong>
            </Typography>
          </TableCell>
          <TableCell className="objective-personal-table-cell">
            <Typography variant="caption">{biodata.gender}</Typography>
          </TableCell>
          <TableCell className="objective-personal-table-cell">
            <Typography variant="caption">
              <strong>Religion</strong>
            </Typography>
          </TableCell>
          <TableCell className="objective-personal-table-cell">
            <Typography variant="caption">{biodata.religion}</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="objective-personal-table-cell">
            <Typography variant="caption">
              <strong>Language</strong>
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={4} className="objective-personal-table-cell">
            <Typography variant="caption">{biodata.language}</Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Stack>
);

export default ObjectivePersonalComponent;
