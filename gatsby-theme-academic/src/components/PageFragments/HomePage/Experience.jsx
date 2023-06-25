import { Row, Col, List } from 'antd';
import React from 'react';
import { Timeline } from 'react-event-timeline';

import { useSiteMetadata } from '../../../utils/hooks';
import Icon from '../../Icon';
import TimelineItem from '../../TimelineItem';

import * as styles from './homePage.module.less';

const generateInterest = (data) => (
  <List.Item>
    <List.Item.Meta
      avatar={<Icon size="lg" fixedWidth icon={data.icon} />}
      title={data.title}
    />
  </List.Item>
);

const Experience = () => {
  const siteMetadata = useSiteMetadata();
  const previousEducationTimeLineData = siteMetadata.school.slice(0, siteMetadata.school.length - 1);
  const previousJobTimeLineData = siteMetadata.job.slice(0, siteMetadata.job.length - 1);
  const lastEducationTimeLineData = siteMetadata.school.slice(siteMetadata.school.length - 1);
  const lastJobTimeLineData = siteMetadata.job.slice(siteMetadata.job.length - 1);

  return (
    <div className={styles.homepageSection}>
      <Row>
        <Col xs={24} sm={24} md={12} lg={15} style={{ marginBottom: '-2rem' }}>
          <h2 style={{ marginBottom: '0' }}>Education</h2>
          {siteMetadata.school.length > 1
            ? (
              <Timeline lineStyle={{ top: '20px' }} lineColor="#44566C" style={{ width: '100%' }}>
                {previousEducationTimeLineData.map(TimelineItem)}
              </Timeline>
            ) : null}
          {siteMetadata.school.length > 0
            ? (
              <Timeline
                lineStyle={{ display: 'none' }}
                style={{
                  top: '-30px',
                  width: '100%',
                }}
              >
                {lastEducationTimeLineData.map(TimelineItem)}
              </Timeline>
            ) : null}
        </Col>
        <Col xs={24} sm={24} md={12} lg={9}>
          <h2 style={{ marginBottom: '0.8rem' }} className="interests">Interests</h2>
          <List itemLayout="horizontal" split={false}>
            {siteMetadata.interests.map(generateInterest)}
          </List>
        </Col>
      </Row>
      <Row>
        <Col xs={24} sm={24} md={12} lg={15} style={{ marginBottom: '-2rem' }}>
          <h2 style={{ marginBottom: '0' }}>Experience</h2>
          {siteMetadata.job.length > 1
            ? (
              <Timeline lineStyle={{ top: '20px' }} lineColor="#44566C" style={{ width: '100%' }}>
                {previousJobTimeLineData.map(TimelineItem)}
              </Timeline>
            ) : null}
          {siteMetadata.job.length > 0
            ? (
              <Timeline
                lineStyle={{ display: 'none' }}
                style={{
                  top: '-30px',
                  width: '100%',
                }}
              >
                {lastJobTimeLineData.map(TimelineItem)}
              </Timeline>
            ) : null}
        </Col>
      </Row>
    </div>
  );
};

export default Experience;
