import { Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

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
  <Stack direction="column" spacing={1} sx={{ flexBasis: '50%', pb: 4 }}>
    <Typography variant="body1" sx={{ pt: 1 }}>
      <strong>Education</strong>
    </Typography>
    <Table size="small">
      <TableHead>
        <TableRow>
          {['School', 'Degree', 'Subject', 'From', 'To'].map((o) => (
            <TableCell key={o} sx={{ p: 0 }}>
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
            <TableCell sx={{ p: 0 }}>
              <Typography variant="caption">{o.school}</Typography>
            </TableCell>
            <TableCell sx={{ p: 0 }}>
              <Typography variant="caption">{o.degree}</Typography>
            </TableCell>
            <TableCell sx={{ p: 0 }}>
              <Typography variant="caption">{o.subject}</Typography>
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
  </Stack>
);

export default EducationComponent;
