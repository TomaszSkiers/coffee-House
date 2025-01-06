import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box } from '@mui/material';

export const FormContextProvider = ({ children, schema, onSubmit, ...props }) => {
  const methods = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <Box  
        onSubmit={methods.handleSubmit(onSubmit)} 
        {...props}
    >
        {children}
      </Box>
    </FormProvider>
  );
};
