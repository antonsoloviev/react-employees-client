import { Alert } from 'antd';
import React from 'react';

type Props = {
  message?: string;
};

const ErrorMessage = ({ message }: Props) => {
  if (!message) {
    return null;
  } else {
    return <Alert message={message} type="error" />;
  }
};

export default ErrorMessage;
