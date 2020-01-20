import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/action';
import { Card, Icon } from 'antd';
import css from './Banner.module.scss';

const Banner = props => {
  const banner = useSelector(state => state.banner.banner);
  //const loading = useSelector(state => state.main.loading);
  const dispatch = useDispatch();
  const onGetBanner = useCallback(() => dispatch(actions.getBanner()), [
    dispatch
  ]);

  useEffect(() => {
    onGetBanner();
  }, [onGetBanner]);

  const { Meta } = Card;
  return (
    <div className={css.banner}>
      {banner.map(b => {
        return (
          <Card
            key={b.id}
            className={css.card}
            cover={<img src={b.url} className={css.image} alt="banner" />}
            actions={[
              <Icon type="up" key="up" />,
              <Icon type="down" key="down" />,
              <Icon type="edit" key="edit" />,
              <Icon type="delete" key="delete" />
            ]}
          >
            <Meta title="排序:1" />
          </Card>
        );
      })}

      <Card
        className={css.card}
        cover={
          <div className={css.upload}>
            <Icon type="cloud-upload" style={{ fontSize: '36px' }} />
          </div>
        }
      >
        <Meta title="点击上传一张横幅图" />
      </Card>
    </div>
  );
};

export default Banner;
