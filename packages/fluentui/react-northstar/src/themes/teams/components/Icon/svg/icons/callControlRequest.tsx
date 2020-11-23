import * as React from 'react';
import { TeamsProcessedSvgIconSpec } from '../types';

export default {
  icon: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 20 20" className={classes.svg}>
      <path d="M2 6C2 4.89543 2.89543 4 4 4H16C17.1046 4 18 4.89543 18 6V13C18 13.8062 17.523 14.501 16.8358 14.8175C16.7658 14.6804 16.6738 14.5525 16.5607 14.4394L16.1148 13.9935C16.613 13.9366 17 13.5135 17 13V6C17 5.44772 16.5523 5 16 5H4C3.44772 5 3 5.44772 3 6V13C3 13.5523 3.44772 14 4 14H9V15H4C2.89543 15 2 14.1046 2 13V6Z" />
      <path d="M10.8536 10.1465C10.7106 10.0035 10.4955 9.96068 10.3087 10.0381C10.1218 10.1155 10 10.2978 10 10.5V17.5C10 17.7183 10.1415 17.9113 10.3497 17.9769C10.5578 18.0425 10.7845 17.9655 10.9096 17.7867L12.4813 15.5415L15.424 15.9942C15.6377 16.0271 15.8483 15.9189 15.946 15.726C16.0437 15.5332 16.0064 15.2993 15.8536 15.1465L10.8536 10.1465ZM11 15.9138V11.7071L14.0665 14.7736L12.326 14.5058C12.1379 14.4769 11.9496 14.5573 11.8404 14.7133L11 15.9138Z" />
    </svg>
  ),
  styles: {},
  exportedAs: 'call-control-request',
} as TeamsProcessedSvgIconSpec;