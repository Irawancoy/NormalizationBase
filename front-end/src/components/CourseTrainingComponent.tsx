import { Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

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
  <Stack direction="column" spacing={1} sx={{ flexBasis: '50%', pb: 4 }}>
    <Typography variant="body1" sx={{ pt: 1 }}>
      <strong>Course, Training</strong>
    </Typography>
    <Table size="small">
      <TableHead>
        <TableRow>
          {['Title', 'Provider', 'Date', 'Duration', 'Certificate'].map((o) => (
            <TableCell key={o} sx={{ p: 0 }}>
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
            <TableCell sx={{ p: 0 }}>
              <Typography variant="caption">{o.title}</Typography>
            </TableCell>
            <TableCell sx={{ p: 0 }}>
              <Typography variant="caption">{o.provider}</Typography>
            </TableCell>
            <TableCell sx={{ p: 0 }}>
              <Typography variant="caption">{o.date}</Typography>
            </TableCell>
            <TableCell sx={{ p: 0 }}>
              <Typography variant="caption">{o.duration}</Typography>
            </TableCell>
            <TableCell sx={{ p: 0 }}>
              <Typography variant="caption">{o.certificate}</Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Stack>
);

export default CoursesTrainingComponent;
