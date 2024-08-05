/* eslint-disable @next/next/no-img-element */

import { Avatar, Box, Chip, Divider, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { DATA } from '../../public/data';
import HeaderComponent from '../components/HeaderComponent';
import EmployeeInformation from '@/components/EmployeeInformationComponent';
import EmploymentTableComponent from '@/components/EmploymentTableComponents';
import ObjectivePersonalComponent from '@/components/ObjectivePersonalComponent';
import CoursesTrainingComponent from '@/components/CourseTrainingComponent';
import EducationComponent from '@/components/EducationComponent';
import ProjectsComponent from '@/components/ProjectComponent';
import FooterComponent from '@/components/FooterComponents';

const Page = () => {
  return (
    <>

      <HeaderComponent />
    
      {/* <Box className="page-footer">
        <img src="/Footer.png" alt="" width="100%" height="50px" />
      </Box> */}
      <FooterComponent />

      <Box component="table" sx={{ width: '100%' }}>
        <Box component="thead">
          <Box component="tr">
            <Box component="td">
              <Box className="page-header-space" />
            </Box>
          </Box>
        </Box>

        <Box component="tbody">
          <Box component="tr">
            <Box
              component="td"
              sx={{
                py: 2,
                px: 6,
              }}
            >
              <Stack direction="column" spacing={1} alignItems="stretch">
                <EmployeeInformation employee={DATA.employee} />
                <Stack direction="row" spacing={1} justifyContent="stretch">
                  <Stack direction="column" spacing={1} sx={{ flexBasis: '50%', pb: 4 }}>
                    <Typography variant="body1" sx={{ pt: 1 }}>
                      <strong>Employment</strong>
                    </Typography>
                    <EmploymentTableComponent employment={DATA.histories.employment} />
                  </Stack>
                  <Divider orientation="vertical" flexItem />
                  <ObjectivePersonalComponent biodata={DATA.employee.biodata} />
                </Stack>
                <Divider flexItem />
                <Stack direction="row" spacing={1} justifyContent="stretch" sx={{ pb: 2, pageBreakAfter: 'always' }}>
                  <CoursesTrainingComponent certifications={DATA.histories.certification} />
                  <Divider orientation="vertical" flexItem />
                  <EducationComponent education={DATA.histories.education} />
                </Stack>
                <ProjectsComponent projects={DATA.histories.project} />
                <Typography variant="caption" color="GrayText" sx={{ pt: 4, alignSelf: 'center' }}>
                  PT Padepokan Tujuh Sembilan
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Box>

        <Box component="tfoot">
          <Box component="tr">
            <Box component="td">
              <Box className="page-footer-space" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Page;
