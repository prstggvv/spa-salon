import cls from './ArrowRight.module.css';
import { classNames } from '../../lib/classNames/classNames';
import ArrowRightIcon from '../../assets/images/icons/arrow-right.svg';

interface ArrowRightProps {
  className?: string;
}

const ArrowRight = ({ className }: ArrowRightProps) => {
  return (
    <img 
      className={classNames(cls.svg, {}, [className || ''])}
      src={ArrowRightIcon}
      alt='arrow-right'
    />
  )
}

export default ArrowRight;
