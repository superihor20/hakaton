import React, { CSSProperties, FC, PropsWithChildren } from 'react';
import './tableWithChair.module.scss';

type TableWithChair = {
  id: number;
  styles?: CSSProperties;
};

export const TableWithChair: FC<PropsWithChildren<TableWithChair>> = ({
  id,
}) => {
  return (
    <div id={'' + id}>
      <svg
        width='40'
        height='31'
        viewBox='0 0 25 21'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <line y1='10.5' x2='24' y2='10.5' stroke='black' />
        <line x1='0.5' y1='11' x2='0.5' y2='21' stroke='black' />
        <line y1='20.5' x2='24' y2='20.5' stroke='black' />
        <path d='M24 10V21' stroke='black' />
        <path
          d='M14.6429 9H10.3571C10.329 9.00001 10.3011 8.99553 10.2751 8.98684C10.2491 8.97814 10.2255 8.96539 10.2056 8.94932C10.1857 8.93325 10.1699 8.91417 10.1591 8.89317C10.1483 8.87216 10.1428 8.84966 10.1428 8.82692C10.1428 8.80419 10.1483 8.78168 10.1591 8.76068C10.1699 8.73968 10.1857 8.7206 10.2056 8.70452C10.2255 8.68845 10.2491 8.6757 10.2751 8.66701C10.3011 8.65831 10.329 8.65384 10.3571 8.65385H12.2964V7.26923H9.24286C9.17536 7.26923 9.11193 7.2656 9.05279 7.25885C8.57557 7.21627 8 7.00269 8 6.23077V4.52596C8 4.48006 8.02258 4.43604 8.06276 4.40358C8.10295 4.37112 8.15745 4.35288 8.21429 4.35288H9.07143V1.03846C9.07143 0.368827 9.52807 0 10.3571 0H14.6429C15.4719 0 15.9286 0.368827 15.9286 1.03846V4.35288H16.7857C16.8425 4.35288 16.8971 4.37112 16.9372 4.40358C16.9774 4.43604 17 4.48006 17 4.52596V6.23077C17 6.90473 16.5532 7.14531 16.1782 7.22838C16.0442 7.25638 15.9063 7.27011 15.7679 7.26923H12.725V8.65385H14.6429C14.671 8.65384 14.6989 8.65831 14.7249 8.66701C14.7509 8.6757 14.7745 8.68845 14.7944 8.70452C14.8143 8.7206 14.8301 8.73968 14.8409 8.76068C14.8516 8.78168 14.8572 8.80419 14.8572 8.82692C14.8572 8.84966 14.8516 8.87216 14.8409 8.89317C14.8301 8.91417 14.8143 8.93325 14.7944 8.94932C14.7745 8.96539 14.7509 8.97814 14.7249 8.98684C14.6989 8.99553 14.671 9.00001 14.6429 9V9ZM12.5107 6.92308H15.7679C15.8776 6.92308 15.9776 6.91338 16.0661 6.89435C16.2545 6.85263 16.4984 6.75502 16.5579 6.40385H8.44186C8.49436 6.71971 8.705 6.87963 9.10593 6.91546C9.15221 6.92065 9.19614 6.92308 9.24286 6.92308H12.5107ZM15.9286 6.05769H16.5714V4.69887H15.9286V6.05769ZM9.5 6.05769H15.5V2.94231H9.5V6.05769V6.05769ZM8.42857 6.05769H9.07143V4.69887H8.42857V6.05769ZM9.5 2.59615H15.5V1.03846C15.5 0.559558 15.2358 0.346154 14.6429 0.346154H10.3571C9.76421 0.346154 9.5 0.559558 9.5 1.03846V2.59615V2.59615Z'
          fill='black'
        />
      </svg>
    </div>
  );
};
