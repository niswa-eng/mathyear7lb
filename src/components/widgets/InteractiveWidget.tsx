/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { InteractiveWidgetConfig } from '../../types/content.ts';
import { NumberLineWidget } from './NumberLineWidget.tsx';
import { FactorArrayWidget } from './FactorArrayWidget.tsx';
import { FractionBarWidget } from './FractionBarWidget.tsx';
import { BalanceScaleWidget } from './BalanceScaleWidget.tsx';
import { ProtractorAngleWidget } from './ProtractorAngleWidget.tsx';
import { CoordinateGridWidget } from './CoordinateGridWidget.tsx';

interface InteractiveWidgetProps {
  config: InteractiveWidgetConfig;
}

export const InteractiveWidget: React.FC<InteractiveWidgetProps> = ({ config }) => {
  switch (config.type) {
    case 'number_line':
      return (
        <NumberLineWidget
          min={config.initialParams?.min ?? -10}
          max={config.initialParams?.max ?? 10}
          initialStart={config.initialParams?.initialStart ?? -2}
          initialHop={config.initialParams?.initialHop ?? 5}
        />
      );
    case 'factor_array':
      return <FactorArrayWidget initialNumber={config.initialParams?.initialNumber ?? 12} />;
    case 'fraction_bar':
      return <FractionBarWidget />;
    case 'balance_scale':
      return <BalanceScaleWidget />;
    case 'protractor_angle':
      return <ProtractorAngleWidget />;
    case 'coordinate_grid':
      return <CoordinateGridWidget />;
    default:
      return null;
  }
};
