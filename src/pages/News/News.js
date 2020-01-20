import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/action';
import { Table, Button } from 'antd';
import css from './News.module.scss';

const News = props => {
  const news = useSelector(state => state.news.news);
  const loading = useSelector(state => state.main.loading);
  const dispatch = useDispatch();
  const onGetNews = useCallback(() => dispatch(actions.getNews()), [dispatch]);

  useEffect(() => {
    onGetNews();
  }, [onGetNews]);

  //列名
  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
      width: 200,
      sorter: (a, b) => a.title.localeCompare(b.title)
    },
    {
      title: '发布日期',
      dataIndex: 'date',
      key: 'date',
      width: 100,
      sorter: (a, b) => a.date.localeCompare(b.date)
    },
    {
      title: '操作',
      dataIndex: 'Action',
      key: 'Action',
      width: 50,
      render: (text, item) => (
        <React.Fragment>
          <Button
            ghost
            type="primary"
            shape="circle"
            icon="edit"
            onClick={() => handleEdit(item.id)}
          />
          &nbsp;&nbsp;
          <Button
            ghost
            type="danger"
            shape="circle"
            icon="delete"
            onClick={() => handleDelete(item.id)}
          />
        </React.Fragment>
      )
    }
  ];

  //点击编辑
  const handleEdit = () => {};
  //点击删除
  const handleDelete = () => {};
  return (
    <div className="white-bg">
      <div className={css.buttons}>
        <Button type="primary" icon="plus">
          新建
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={news}
        rowKey="id"
        pagination={true}
        size="middle"
        loading={loading}
      ></Table>
    </div>
  );
};

export default News;
