import { Switch, Redirect, withRouter } from 'react-router-dom';
import React, { Suspense, useState, useEffect } from 'react';
import AuthRoute from './hoc/AuthRoute';
import css from './App.module.scss';
import { Icon, Menu, Button } from 'antd';

//Banner
const Banner = React.lazy(() => {
  return import('./pages/Banner/Banner');
});
//News
const News = React.lazy(() => {
  return import('./pages/News/News');
});
//Payment
const Payment = React.lazy(() => {
  return import('./pages/Payment/Payment');
});
//Monitor
const Monitor = React.lazy(() => {
  return import('./pages/Monitor/Monitor');
});
//Login
const Login = React.lazy(() => {
  return import('./pages/Login/Login');
});

const App = props => {
  const [collapsed, setCollapsed] = useState(false);
  //取当前路由名称，让菜单高亮
  const [current, setCurrent] = useState(props.location.pathname.split('/')[1]);
  useEffect(() => {
    if (current === '') {
      setCurrent('banner');
    }
  }, [collapsed, current]);

  //折叠菜单
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  //点击左侧菜单
  const menuClickHandler = e => {
    setCurrent(e.key);
    props.history.push('/' + e.key);
  };

  //TODO
  let isAuthenticated = true;

  let routes = (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <AuthRoute
          isAuthenticated={isAuthenticated}
          path="/banner"
          component={Banner}
        ></AuthRoute>
        <AuthRoute
          isAuthenticated={isAuthenticated}
          path="/news"
          component={News}
        ></AuthRoute>
        <AuthRoute
          isAuthenticated={isAuthenticated}
          path="/payment"
          component={Payment}
        ></AuthRoute>
        <AuthRoute
          isAuthenticated={isAuthenticated}
          path="/monitor"
          component={Monitor}
        ></AuthRoute>
        <AuthRoute
          isAuthenticated={isAuthenticated}
          path="/login"
          component={Banner}
          unAuthenticatedComponent={Login}
        ></AuthRoute>
        <AuthRoute
          exact
          isAuthenticated={isAuthenticated}
          path="/"
          component={Banner}
          unAuthenticatedComponent={Login}
        ></AuthRoute>
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );

  return isAuthenticated ? (
    <div className={css.main}>
      <div className={[css.left, collapsed ? css.collapsed : ''].join(' ')}>
        <div className={css.top}>
          {collapsed ? null : <span>管理后台</span>}
        </div>
        <Menu
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          onClick={menuClickHandler}
          selectedKeys={[current]}
        >
          <Menu.Item key="banner">
            <Icon type="picture" />
            <span>横幅图管理</span>
          </Menu.Item>
          <Menu.Item key="news">
            <Icon type="profile" />
            <span>动态管理</span>
          </Menu.Item>
          <Menu.Item key="payment">
            <Icon type="money-collect" />
            <span>缴费记录</span>
          </Menu.Item>
          <Menu.Item key="monitor">
            <Icon type="video-camera" />
            <span>监控管理</span>
          </Menu.Item>
        </Menu>
      </div>
      <div className={css.right}>
        <div className={css.top}>
          <Button type="link" onClick={toggleCollapsed}>
            <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
          </Button>
          <div className={css.spacer}></div>
          <Button type="link" icon="logout">
            注销
          </Button>
        </div>
        <div className={css.content}>{routes}</div>
      </div>
    </div>
  ) : (
    routes
  );
};

export default withRouter(App);
