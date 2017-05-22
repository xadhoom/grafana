///<reference path="../../../headers/common.d.ts" />

import angular from 'angular';
import _ from 'lodash';
import {MysqlDatasource} from './datasource';
import {MysqlQueryCtrl} from './query_ctrl';

class MysqlConfigCtrl {
  static templateUrl = 'partials/config.html';
}

class MysqlAnnotationsQueryCtrl {
  static templateUrl = 'partials/annotations.editor.html';
}

export {
  MysqlDatasource,
  MysqlDatasource as Datasource,
  MysqlQueryCtrl as QueryCtrl,
  MysqlConfigCtrl as ConfigCtrl,
  MysqlAnnotationsQueryCtrl as AnnotationsQueryCtrl,
};

