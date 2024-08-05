import { Avatar, Box, Stack, Typography } from '@mui/material';

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
  <Stack direction="row" alignItems="center" spacing={2}>
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h5" sx={{ py: 1 }}>
        <strong>{employee.name}</strong>
      </Typography>
      <Typography variant="subtitle1">{employee.position}</Typography>
      <Typography variant="subtitle2">{employee.email}</Typography>
    </Box>
    <Avatar src={employee.image} sx={{ height: 150, width: 150 }}>
      Talent Image
    </Avatar>
  </Stack>
);

export default EmployeeInformationComponent;
