import {  Stack, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';

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
  <Stack direction="column" spacing={1} sx={{ flexBasis: '50%', pb: 4 }}>
    <Typography variant="body1" sx={{ pt: 1 }}>
      <strong>Objective</strong>
    </Typography>
    <Typography variant="body2">{biodata.profile}</Typography>
    <Typography variant="body1" sx={{ pt: 1 }}>
      <strong>Personal Detail</strong>
    </Typography>
    <Table size="small">
      <TableBody>
        <TableRow>
          <TableCell sx={{ p: 0 }}>
            <Typography variant="caption">
              <strong>Place of Birth</strong>
            </Typography>
          </TableCell>
          <TableCell sx={{ p: 0 }}>
            <Typography variant="caption">{biodata.placeOfBirth}</Typography>
          </TableCell>
          <TableCell sx={{ p: 0 }}>
            <Typography variant="caption">
              <strong>Date of Birth</strong>
            </Typography>
          </TableCell>
          <TableCell sx={{ p: 0 }}>
            <Typography variant="caption">{biodata.dateOfBirth}</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={{ p: 0 }}>
            <Typography variant="caption">
              <strong>Gender</strong>
            </Typography>
          </TableCell>
          <TableCell sx={{ p: 0 }}>
            <Typography variant="caption">{biodata.gender}</Typography>
          </TableCell>
          <TableCell sx={{ p: 0 }}>
            <Typography variant="caption">
              <strong>Religion</strong>
            </Typography>
          </TableCell>
          <TableCell sx={{ p: 0 }}>
            <Typography variant="caption">{biodata.religion}</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={{ p: 0 }}>
            <Typography variant="caption">
              <strong>Language</strong>
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell colSpan={4} sx={{ p: 0 }}>
            <Typography variant="caption">{biodata.language}</Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Stack>
);

export default ObjectivePersonalComponent;
