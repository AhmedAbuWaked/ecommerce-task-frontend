import { ReactNode } from 'react';
import { Spin } from 'antd';

export interface IPageProps {
  isLoading: boolean;
  children: ReactNode | ReactNode[];
}

const Page = ({ isLoading, children }: IPageProps) => {
  return <div>{isLoading ? <Spin /> : children}</div>;
};

export default Page;
