import { classNames } from '../../../shared/lib/classNames/classNames';

interface ArrowRightProps {
  className?: string;
}

const ArrowLeft = ({ className = '' }: ArrowRightProps) => (
  <svg
    className={classNames('', {}, [className])}
    width='32'
    height='32'
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    style={{ transform: 'rotate(180deg)' }}
  >
    <path
      d='M16 28C24.8366 28 32 20.8366 32 12C32 3.16344 24.8366 -4 16 -4C7.16344 -4 0 3.16344 0 12C0 20.8366 7.16344 28 16 28Z'
      stroke='black'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 20L4 12L12 4'
      stroke='black'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default ArrowLeft;
