import React from 'react';
import { Avatar, Box, Stack, Typography } from '@mui/material';
import '../styles/employeeInfo.css'

interface Employee {
  name: string;
  position: string;
  email: string;
  image: string;
}

interface EmployeeInformationProps {
  employee: Employee;
}

const EmployeeInformationComponent: React.FC<EmployeeInformationProps> = ({ employee }) => (
  <Stack direction="row" alignItems="center" className="employee-information-stack">
    <Box className="employee-information-box">
      <Typography variant="h5" className="employee-information-name">
        <strong>{employee.name}</strong>
      </Typography>
      <Typography variant="subtitle1">{employee.position}</Typography>
      <Typography variant="subtitle2">{employee.email}</Typography>
    </Box>
    <Avatar src={employee.image} className="employee-information-avatar">
      Talent Image
    </Avatar>
  </Stack>
);

export default EmployeeInformationComponent;
