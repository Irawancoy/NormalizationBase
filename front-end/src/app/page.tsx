/* eslint-disable @next/next/no-img-element */
import { Box, Divider, Stack, Typography } from '@mui/material';
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
      <Stack spacing={2} className="container">
        <EmployeeInformation employee={DATA.employee} />
        <Stack direction="row" spacing={1} justifyContent="stretch">
          <Stack direction="column" spacing={1} sx={{ flexBasis: '50%' }}>
            <Typography variant="body1" className="headerSpacing">
              <strong>Employment</strong>
            </Typography>
            <EmploymentTableComponent employment={DATA.histories.employment} />
          </Stack>
          <Divider orientation="vertical" flexItem className="verticalDivider" />
          <ObjectivePersonalComponent biodata={DATA.employee.biodata} />
        </Stack>
        <Divider />
        <Stack direction="row" spacing={1} justifyContent="stretch" sx={{ pb: 2 }}>
          <CoursesTrainingComponent certifications={DATA.histories.certification} />
          <Divider orientation="vertical" flexItem className="verticalDivider" />
          <EducationComponent education={DATA.histories.education} />
        </Stack>
        <ProjectsComponent projects={DATA.histories.project} />
        <Typography variant="caption" className="captionText">
          PT Padepokan Tujuh Sembilan
        </Typography>
      </Stack>
      <FooterComponent />
    </>
  );
};

export default Page;
