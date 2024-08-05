import { Stack, Table, TableBody, TableCell, Box, Chip, TableRow, Typography } from '@mui/material';

interface Project {
  projectName: string;
  role: string;
  from: string;
  to: string;
  customer: string;
  projectDescription: string;
  technicalInformation: string;
  jobDescription: string;
}

interface ProjectsComponentProps {
  projects: Project[];
}

const ProjectsComponent: React.FC<ProjectsComponentProps> = ({ projects }) => (
  <Stack direction="row" spacing={1} justifyContent="stretch" sx={{ pt: 2 }}>
    <Stack direction="column" spacing={1} sx={{ flexBasis: '100%', pb: 4 }}>
      <Typography variant="body1" sx={{ pt: 1 }}>
        <strong>Project</strong>
      </Typography>
      {projects.map((o, i) => (
        <Box key={i} sx={{ pt: 1, pb: 3 }}>
          <Stack direction="row" spacing={1}>
            <Chip label={i + 1} sx={{ flexBasis: 50 }} />
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell sx={{ width: 100, p: 0 }}>
                    <Typography variant="caption">
                      <strong>Project Name</strong>
                    </Typography>
                  </TableCell>
                  <TableCell colSpan={5} sx={{ p: 0 }}>
                    <Typography variant="body2">{o.projectName}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ p: 0 }}>
                    <Typography variant="caption">
                      <strong>Role</strong>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ p: 0 }}>
                    <Typography variant="body2">{o.role}</Typography>
                  </TableCell>
                  <TableCell sx={{ width: 50, p: 0 }}>
                    <Typography variant="caption">
                      <strong>From</strong>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ width: 50, p: 0 }}>
                    <Typography variant="body2">{o.from}</Typography>
                  </TableCell>
                  <TableCell sx={{ width: 50, p: 0 }}>
                    <Typography variant="caption">
                      <strong>To</strong>
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ width: 50, p: 0 }}>
                    <Typography variant="body2">{o.to}</Typography>
                  </TableCell>
                </TableRow>
                {[
                  ['Customer', 'customer'],
                  ['Project Description', 'projectDescription'],
                  ['Technical Information', 'technicalInformation'],
                  ['Job Description', 'jobDescription'],
                ].map(([dName, pName]) => (
                  <TableRow key={pName}>
                    <TableCell sx={{ p: 0 }}>
                      <Typography variant="caption">
                        <strong>{dName}</strong>
                      </Typography>
                    </TableCell>
                    <TableCell colSpan={5} sx={{ p: 0 }}>
                      <Typography variant="body2">{o[pName as keyof Project]}</Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Stack>
        </Box>
      ))}
    </Stack>
  </Stack>
);

export default ProjectsComponent;
