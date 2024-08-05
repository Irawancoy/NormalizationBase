import React from 'react';
import { Stack, Table, TableBody, TableCell, Box, Chip, TableRow, Typography } from '@mui/material';
import '../styles/project.css';

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
  <Stack direction="row" spacing={1} justifyContent="stretch" className="projects-stack">
    <Stack direction="column" spacing={1} sx={{ flexBasis: '100%', pb: 4 }}>
      <Typography variant="body1" sx={{ pt: 1 }}>
        <strong>Project</strong>
      </Typography>
      {projects.map((o, i) => (
        <Box key={i} className="project-item">
          <Stack direction="row" spacing={1}>
            <Chip label={i + 1} className="project-chip" />
            <Table size="small">
              <TableBody>
                <TableRow>
                  <TableCell className="project-table-cell project-table-cell-width-100">
                    <Typography variant="caption">
                      <strong>Project Name</strong>
                    </Typography>
                  </TableCell>
                  <TableCell colSpan={5} className="project-table-cell">
                    <Typography variant="body2">{o.projectName}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="project-table-cell">
                    <Typography variant="caption">
                      <strong>Role</strong>
                    </Typography>
                  </TableCell>
                  <TableCell className="project-table-cell">
                    <Typography variant="body2">{o.role}</Typography>
                  </TableCell>
                  <TableCell className="project-table-cell project-table-cell-width-50">
                    <Typography variant="caption">
                      <strong>From</strong>
                    </Typography>
                  </TableCell>
                  <TableCell className="project-table-cell project-table-cell-width-50">
                    <Typography variant="body2">{o.from}</Typography>
                  </TableCell>
                  <TableCell className="project-table-cell project-table-cell-width-50">
                    <Typography variant="caption">
                      <strong>To</strong>
                    </Typography>
                  </TableCell>
                  <TableCell className="project-table-cell project-table-cell-width-50">
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
                    <TableCell className="project-table-cell">
                      <Typography variant="caption">
                        <strong>{dName}</strong>
                      </Typography>
                    </TableCell>
                    <TableCell colSpan={5} className="project-table-cell">
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
