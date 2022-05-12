import React from "react";
import { EuiProvider } from '@elastic/eui';
import { appendIconComponentCache } from '@elastic/eui/es/components/icon/icon';
import '@elastic/eui/dist/eui_theme_light.css';
import './theme.css';

import { icon as arrowDown } from '@elastic/eui/es/components/icon/assets/arrow_down';
import { icon as arrowLeft } from '@elastic/eui/es/components/icon/assets/arrow_left';
import { icon as accessibility } from '@elastic/eui/es/components/icon/assets/accessibility';
import { icon as addDataApp } from '@elastic/eui/es/components/icon/assets/app_add_data';
import { icon as advancedSettingsApp } from '@elastic/eui/es/components/icon/assets/app_advanced_settings';
import { icon as agentApp } from '@elastic/eui/es/components/icon/assets/app_fleet';
import { icon as aggregate } from '@elastic/eui/es/components/icon/assets/aggregate';
import { icon as alert } from '@elastic/eui/es/components/icon/assets/alert';
import { icon as analyzeEvent} from '@elastic/eui/es/components/icon/assets/analyzeEvent';
import { icon as annotation } from '@elastic/eui/es/components/icon/assets/annotation';
import { icon as apmApp } from '@elastic/eui/es/components/icon/assets/app_apm';
import { icon as apmTrace } from '@elastic/eui/es/components/icon/assets/apm_trace';
import { icon as appSearchApp } from '@elastic/eui/es/components/icon/assets/app_app_search';
import { icon as apps } from '@elastic/eui/es/components/icon/assets/apps';
import { icon as arrowRight } from '@elastic/eui/es/components/icon/assets/arrow_right';
import { icon as arrowUp } from '@elastic/eui/es/components/icon/assets/arrow_up';
import { icon as arrowStart } from '@elastic/eui/es/components/icon/assets/arrowStart';
import { icon as arrowEnd } from '@elastic/eui/es/components/icon/assets/arrowEnd';
import { icon as asterisk } from '@elastic/eui/es/components/icon/assets/asterisk';
import { icon as auditbeatApp } from '@elastic/eui/es/components/icon/assets/app_auditbeat';
import { icon as beaker } from '@elastic/eui/es/components/icon/assets/beaker';
import { icon as bell } from '@elastic/eui/es/components/icon/assets/bell';
import { icon as bellSlash } from '@elastic/eui/es/components/icon/assets/bellSlash';
import { icon as bolt } from '@elastic/eui/es/components/icon/assets/bolt';
import { icon as boxesHorizontal } from '@elastic/eui/es/components/icon/assets/boxes_horizontal';
import { icon as boxesVertical } from '@elastic/eui/es/components/icon/assets/boxes_vertical';
import { icon as branch } from '@elastic/eui/es/components/icon/assets/branch';
import { icon as broom } from '@elastic/eui/es/components/icon/assets/broom';
import { icon as brush } from '@elastic/eui/es/components/icon/assets/brush';
import { icon as bug } from '@elastic/eui/es/components/icon/assets/bug';
import { icon as bullseye } from '@elastic/eui/es/components/icon/assets/bullseye';
import { icon as calendar } from '@elastic/eui/es/components/icon/assets/calendar';
import { icon as canvasApp } from '@elastic/eui/es/components/icon/assets/app_canvas';
import { icon as check } from '@elastic/eui/es/components/icon/assets/check';
import { icon as checkInCircleFilled } from '@elastic/eui/es/components/icon/assets/checkInCircleFilled';
import { icon as cheer } from '@elastic/eui/es/components/icon/assets/cheer';
import { icon as classificationJob } from '@elastic/eui/es/components/icon/assets/ml_classification_job';

//One or more icons are passed in as an object of iconKey (string): IconComponent
appendIconComponentCache({
  arrowDown,
  arrowLeft,
  accessibility,
  addDataApp,
  agentApp,
  aggregate,
  alert,
  analyzeEvent,
  annotation,
  apmApp,
  apmTrace,
  appSearchApp,
  apps,
  arrowRight,
  arrowUp,
  arrowEnd,
  asterisk,
  advancedSettingsApp,
  arrowStart,
  auditbeatApp,
  beaker,
  bell,
  bellSlash,
  bolt,
  boxesHorizontal,
  boxesVertical,
  branch,
  broom,
  brush,
  bug,
  bullseye,
  calendar,
  canvasApp,
  check,
  checkInCircleFilled,
  cheer,
  classificationJob
});

export default function UXPinWrapper({ children }) {
  return <EuiProvider colorMode="light">{children}</EuiProvider>
}
