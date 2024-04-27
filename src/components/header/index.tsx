import { Layout, Space, Typography } from 'antd';
import styles from './index.module.css';
import { LoginOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import CustomButton from '../custom-button';
import { Link, useNavigate } from 'react-router-dom';
import { Paths } from '../../paths';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/auth/authSlice';

const Header = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Layout.Header className={styles.header}>
      <Space className={styles.buttonContainer}>
        <TeamOutlined className={styles.icon} />
        <Link to={Paths.home}>
          <CustomButton type="ghost">
            <Typography.Title level={4}>Сотрудники</Typography.Title>
          </CustomButton>
        </Link>
      </Space>
      {user ? (
        <CustomButton type="ghost" icon={<LoginOutlined />} onClick={onLogoutClick}>
          Выйти
        </CustomButton>
      ) : (
        <Space className={styles.buttonContainer}>
          <Link to={Paths.register}>
            <CustomButton type="default" icon={<UserOutlined />}>
              Зарегистрироваться
            </CustomButton>
          </Link>
          <Link to={Paths.login}>
            <CustomButton type="default" icon={<LoginOutlined />}>
              Войти
            </CustomButton>
          </Link>
        </Space>
      )}
    </Layout.Header>
  );
};

export default Header;
